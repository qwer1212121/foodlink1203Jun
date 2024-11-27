import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding:10,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff", // Safe area background
  },
  
  header: {
    flexDirection: "row", // 버튼과 텍스트를 한 줄로 정렬
    alignItems: "center",
    padding: 0,
    backgroundColor: "white",
  },
  navigateContainer: {
    marginRight: 0,
  },
  headerText: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight:800,
    color: "black",
    marginLeft: 15,
  },
  profileCard: {
    
    marginVertical:20,
    marginBottom:10,
    width:350,
    height:239,
    margin: 10,
    backgroundColor: "#F6F6F6",
    borderRadius: 15,
    padding: 30,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileText: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Inter-bold",
    fontWeight: "600",
    color: "rgba(0, 0, 0, 0.8)",
  },
  highlightText: {
    color: "#2D754E",
    fontSize: 20,
    fontFamily: "Inter-bold",
  },
  smallText: {
    fontSize: 8,
  },
  options: {
    marginBottom: "20%",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  optionItem: {
    paddingVertical: 20,
  },
  optionText: {
    fontSize: 17,
    fontFamily: "Inter",
    fontWeight: "400",
    color: "#646464",
  },
  footer: {
    alignItems: "center",
    padding: 20,
    position: "relative",
  },
  footerText: {
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: "500",
    color: "#D0D0D0",
    textAlign: "center",
    },
  creditsText: {
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: "500",
    color: "#CBCBCB",
    textAlign: "center",
  },
er: {
    marginVertical: 20,
    alignItems: "center",
  },
  stars: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  ratingValue: {
    fontSize: 14,
    color: "#000",
  },
});
