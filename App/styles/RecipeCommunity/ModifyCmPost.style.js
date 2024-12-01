import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    height: 50,
  },
  title: {
    fontSize: 18,
    fontFamily: "Inter-bold",
    color: "#2E2F33",
  },
  emptySpace: {
    width: 30,
  },
  inputSection: {
    marginTop: 10,
    paddingHorizontal:20,
  },
  // @@을 작성해주세요.
  labelText: {
    fontSize: 16,
    fontFamily: "Inter-bold",
    color: "#2E2F33",
    marginBottom: 8,
  },
  //제목 작성란
  inputBox: {
    height: 40,
    backgroundColor: "#F2F3F6",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  //글 작성란
  textArea: {
    height: 400,
    backgroundColor: "#F2F3F6",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 15,
    textAlignVertical: "top",
    marginBottom: 0,
  },
  buttonContainer: {
    paddingTop: 140,
    backgroundColor: "#FFFFFF",
  },
  submitButton: {
    alignSelf: "center", // 화면 기준 정중앙으로 배치
    height: 40,
    width: 307,
    backgroundColor: "#2D754E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
