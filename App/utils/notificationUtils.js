import { firestore } from '../../firebase';

// 반경 내 게시물을 감지하여 알림 추가
export const watchNearbyPosts = (latitude, longitude, radiusInKm = 3) => {
  const RADIUS_IN_DEGREES = radiusInKm / 111.32; // 반경을 도(degrees) 단위로 변환

  firestore.collection('Alarm').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const post = change.doc.data();
        console.log('Firestore에서 가져온 데이터:', post);

        const { latitude: postLat, longitude: postLng } = post.location;

        const isNearby =
          Math.abs(postLat - latitude) <= RADIUS_IN_DEGREES &&
          Math.abs(postLng - longitude) <= RADIUS_IN_DEGREES;

        console.log('반경 내 게시물 여부:', isNearby);

        if (isNearby) {
          firestore.collection('notifications').add({
            title: '새 게시물이 올라왔습니다!',
            description: `${post.title}: ${post.description}`,
            timestamp: firestore.FieldValue.serverTimestamp(),
            icon: 'location-outline',
            color: '#4CAF50',
          });
        }
      }
    });
  });
};
