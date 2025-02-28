import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  backButton: {
    marginTop: 10,
    marginBottom: 16,
  },
  backText: {
    fontSize: 16,
    color: "#4CAF50",
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  titleSection: {
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 8,
  },
  titleHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  categoryDot: {
    width: 6,
    height: 6,
    backgroundColor: "#FFD700",
    borderRadius: 3,
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  category: {
    fontSize: 14,
    color: "#777",
  },
  timeAgo: {
    fontSize: 14,
    color: "#777",
  },
  descriptionSection: {
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 8,
    height: 250,
  },
  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginBottom: 8,
  },
  favoriteBox: {
    position: "absolute",
    bottom: "10%",
    left: "10%",
    right: "10%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  favoriteText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  favoriteButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  favoriteButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  favoriteButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#EAEAEA",
    backgroundColor: "#F9F9F9",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  favoriteButton: {
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  favoriteIcon: {
    fontSize: 18,
    color: "#4CAF50",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  chatButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  chatButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
