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
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E2F33",
  },
  emptySpace: {
    width: 24, // NavigateBefore와 크기 맞추기
  },
  commentInputContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: "center",
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 20,
    paddingLeft: 16,
    paddingVertical: 10,
    fontSize: 14,
  },
});
