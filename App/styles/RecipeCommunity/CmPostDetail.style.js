import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  postContainer: {
    paddingHorizontal: 30,
    color: "FFFFFF",
},
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  authorName: {
    fontSize: 16,
    fontFamily: "Inter-bold",
    color: "#2E2F33",
  },
  timestamp: {
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter"
  },
  postTitle: {
    fontSize: 17,
    color: "rgba(0, 0, 0, 0.8)",
    marginBottom: 5,
    fontFamily: "Inter-bold"
  },
  postContent: {
    fontSize: 14,
    color: "#000",
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    marginBottom:40,
  },
  actionText: {
    fontSize: 12,
    color: "#8C8C8C",
    marginLeft: 5,
    marginRight: 15,
  },
});
