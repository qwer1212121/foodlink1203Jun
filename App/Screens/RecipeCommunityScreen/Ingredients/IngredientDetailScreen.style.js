import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 60,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 20,
  },
  detailContainer: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  toggleButton: {
    marginVertical: 15,
    padding: 10,
    backgroundColor: "#2D754E",
    borderRadius: 8,
    alignItems: "center",
  },
  toggleButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  ingredientsScroll: {
    marginVertical: 10,
  },
  ingredientButton: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginHorizontal: 5,
  },
  ingredientSelected: {
    backgroundColor: "#2D754E",
  },
  ingredientText: {
    color: "#000",
  },
  recipeItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  recipeImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  recipeDetails: {
    flex: 1,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: "500",
  },
  recipeDescription: {
    fontSize: 14,
    color: "#888",
  },
  separator: {
    marginVertical: 20,
    alignItems: "center",
  },
  separatorText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
  },
});

export default styles;
