//watchNearbyPosts.js
import { firestore, FieldValue } from '../../firebase';

export const watchNearbyPosts = (latitude, longitude, radiusInKm = 3) => {
  const RADIUS_IN_DEGREES = radiusInKm / 111.32; // 반경을 도(degrees)로 변환

  firestore.collection('Alarm').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const post = change.doc.data();
        console.log('Firestore에서 가져온 데이터:', post);

        // location 필드 확인
        if (!post.location || !post.location.latitude || !post.location.longitude) {
          console.error('잘못된 데이터: location 정보가 없습니다.', post);
          return;
        }

        const { latitude: postLat, longitude: postLng } = post.location;

        const isNearby =
          Math.abs(postLat - latitude) <= RADIUS_IN_DEGREES &&
          Math.abs(postLng - longitude) <= RADIUS_IN_DEGREES;

        console.log('반경 내 게시물 여부:', isNearby);

        if (isNearby) {
          // FieldValue 방어 코드 추가
          if (!FieldValue || !FieldValue.serverTimestamp) {
            console.error('FieldValue.serverTimestamp가 정의되지 않았습니다. 기본 시간값으로 대체합니다.');
            firestore.collection('notifications').add({
              title: '새 게시물이 올라왔습니다!',
              description: `${post.title}: ${post.description}`,
              timestamp: new Date(), // 기본값으로 현재 시간 사용
              icon: 'location-outline',
              color: '#4CAF50',
            });
            return;
          }

          // 정상적인 serverTimestamp 사용
          firestore.collection('notifications').add({
            title: '새 게시물이 올라왔습니다!',
            description: `${post.title}: ${post.description}`,
            timestamp: FieldValue.serverTimestamp(), // 서버 타임스탬프
            icon: 'location-outline',
            color: '#4CAF50',
          });
        }
      }
    });
  });
};
