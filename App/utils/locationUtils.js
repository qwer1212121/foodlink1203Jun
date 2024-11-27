//locationUtils.js
import * as Location from 'expo-location';

// 위치 권한 요청
export const requestLocationPermission = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('위치 권한이 거부되었습니다.');
      return false;
    }
    return true;
  } catch (error) {
    console.error('권한 요청 중 오류 발생:', error);
    return false;
  }
};

// 현재 위치 가져오기
export const getCurrentLocation = async () => {
  try {
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    const { latitude, longitude } = location.coords;
    console.log('위치 가져오기 성공:', latitude, longitude);
    return { latitude, longitude };
  } catch (error) {
    console.error('위치 가져오기 오류:', error);
    throw error;
  }
};
