import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { firestore } from '../../../../firebase';
import { requestLocationPermission, getCurrentLocation } from '../../../utils/locationUtils';
import { watchNearbyPosts } from '../../../utils/watchNearbyPosts';
import styles from '../Alarm/AlarmScreen.Style';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const setupNotifications = async () => {
      const hasPermission = await requestLocationPermission();
      if (hasPermission) {
        try {
          const { latitude, longitude } = await getCurrentLocation();
          console.log('사용자 위치:', latitude, longitude);

          // Watch for nearby posts
          watchNearbyPosts(latitude, longitude, 3); // 반경 3km
        } catch (error) {
          console.error('위치 가져오기 실패:', error);
        }
      }
    };

    setupNotifications();

    const unsubscribe = firestore
      .collection('Alarm')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        const newNotifications = snapshot.docs.map((doc) => ({
          id: doc.id,
          icon: doc.data().icon || 'notifications-outline',
          title: doc.data().title,
          description: doc.data().description,
          time: formatTime(doc.data().timestamp),
          color: doc.data().color || '#FFD700',
        }));
        setNotifications(newNotifications);
        console.log('알림 데이터:', newNotifications);
      });

    return () => unsubscribe();
  }, []);

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp.toMillis());
    const now = new Date();
    const diffMinutes = Math.floor((now - date) / (1000 * 60));

    if (diffMinutes < 60) {
      return `${diffMinutes}분 전`;
    } else if (diffMinutes < 1440) {
      return `${Math.floor(diffMinutes / 60)}시간 전`;
    } else {
      return `${Math.floor(diffMinutes / 1440)}일 전`;
    }
  };

  const deleteNotification = async (id) => {
    try {
      await firestore.collection('notifications').doc(id).delete();
    } catch (error) {
      console.error('알림 삭제 실패:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.notificationItem, { borderRadius: 16 }]}>
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Ionicons name={item.icon} size={24} color="white" />
      </View>
      <View style={styles.notificationText}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDescription}>{item.description}</Text>
      </View>
      <Text style={styles.notificationTime}>{item.time}</Text>
      <TouchableOpacity
        onPress={() => deleteNotification(item.id)}
        style={styles.deleteButton}
      >
        <Ionicons name="trash-outline" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
        <Text style={styles.headerTitle}>알림</Text>
      </View>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.notificationList}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;
