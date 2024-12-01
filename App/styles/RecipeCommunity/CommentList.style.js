import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 25, // 전체 패딩
    backgroundColor: "#fff", // 배경색 설정
  },
  commentContainer: {
    flexDirection: "row", // 가로 정렬
    alignItems: "flex-start", // 텍스트가 프로필 이미지와 정렬
    marginBottom: 30,
  },
  commentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20, // 원형 이미지
    marginRight: 13, // 프로필 이미지와 텍스트 간 간격
  },
  commentDetails: {
    flex: 1, // 텍스트 영역 확장
  },
  commentName: {
    fontSize: 14,
    fontFamily: "Inter-bold", // 굵은 텍스트
    color: "#2E2F33",
    marginBottom: 2, // 시간과 내용 사이 간격
  },
  commentTimestamp: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.5)",
    marginBottom: 5, // 시간과 내용 사이 간격
    fontFamily: "Inter-regular",
  },
  commentContent: {
    fontSize: 13,
    fontFamily: "Inter-regular",
    color: "#000",
    lineHeight: 15, // 줄 간격
  },
});
