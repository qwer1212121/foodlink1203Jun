import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff", 
  },
  
  titleSection: {
    flex: 0.2,
    marginTop: 0,
    paddingLeft: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 8,
  },
  location: {
    fontSize: 18,
    fontFamily: "inter-semibold",
    color: "#2D754E",
  },
  subtitle: {
    fontSize: 18,
    color: "#000",
    fontFamily: "inter-semibold",
  },
  mapContainer: {
    flex: 0.7,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  footer: {
    flex: 0.3,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    marginBottom: 10,
  },
  footerText: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 18,
    fontFamily: "inter-bold",
    flex: 1, 
  },
  footerButton: {
    alignItems: "flex-end", 
  },
  button: {
    backgroundColor: "#2D754E",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: 307,
    height: 45,
    alignSelf: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalContent: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22, 
  },
  modalCloseButton: {
    backgroundColor: "#2D754E",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
