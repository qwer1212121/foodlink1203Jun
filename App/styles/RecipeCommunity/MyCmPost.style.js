import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E2F33",
  },
  emptySpace: {
    width: 24,
  },
  recipeListContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    paddingTop: 15,
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
