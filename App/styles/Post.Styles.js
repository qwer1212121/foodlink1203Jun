const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  imageContainer: {
    width: 127,
    height: 109,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    marginRight: 10, // 이미지와 텍스트 간격 추가
  },
  imagePlaceholder: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
  },
  contentContainer: {
    flex: 1, // 텍스트가 이미지 옆에 배치될 수 있도록 확장
    justifyContent: "space-between",
    paddingHorizontal: 8, // 내부 여백 추가
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    flex: 1, // 제목 줄이 잘리지 않도록 확장
  },
  statusIndicator: {
    width: 6,
    height: 6,
    backgroundColor: "#B1F47F",
    borderRadius: 3,
    marginRight: 5, // 상태 표시기와 텍스트 간격 추가
  },
  title: {
    flex: 1,
    color: "#521212",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 18,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 8,
  },
  infoText: {
    color: "#8C8C8C",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 16,
  },
  infoSeparator: {
    color: "#8C8C8C",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 16,
  },
  price: {
    color: "#2D754E",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 22,
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  actionText: {
    color: "#8C8C8C",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
});

export default styles;
