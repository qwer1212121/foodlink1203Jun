import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  profileCard: {
    marginVertical: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  profileText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "600",
    color: "rgba(0, 0, 0, 0.8)",
    marginBottom: 14,
  },
  highlightText: {
    color: "#2D754E",
    fontSize: 18,
    fontWeight: "600",
  },
  cameraButton: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: 120, // 사진 크기 고정
    height: 120, // 사진 크기 고정
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "transparent", // 회색 배경 제거
    borderWidth: 0, // 테두리 제거
  },
  gridImage: {
    width: "100%", // gridItem에 맞춰 사진 크기 설정
    height: "100%",
    resizeMode: "cover", // 사진이 컨테이너에 꽉 차게 표시
  },
  deleteIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "red",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteIconText: {
    color: "#fff",
    fontWeight: "bold",
  },
  emptyGridItem: {
    width: 120, // 빈 네모 크기 고정
    height: 120,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "transparent", // 빈 네모의 회색 배경 제거
  },
});

export default styles;
