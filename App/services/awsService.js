import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import AWS from 'aws-sdk';
import { Buffer } from 'buffer';

AWS.config.update({
    accessKeyId: 'AKIAX3DNHGQE3QMR42OM',
    secretAccessKey: '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',
    region: 'ap-northeast-2', // 서울 리전
  });

export const pickImageAndAnalyze = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
  });

  if (result.canceled) throw new Error('이미지 선택이 취소되었습니다.');

  const base64 = await FileSystem.readAsStringAsync(result.assets[0].uri, {
    encoding: FileSystem.EncodingType.Base64,
  });

  const rekognition = new AWS.Rekognition();
  const params = {
    Image: { Bytes: Buffer.from(base64, 'base64') },
    MaxLabels: 10,
    MinConfidence: 70,
  };

  const data = await rekognition.detectLabels(params).promise();
  return { uri: result.assets[0].uri, labels: data.Labels };
};
