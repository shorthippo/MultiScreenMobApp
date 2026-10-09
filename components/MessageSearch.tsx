import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function MessageSearch() {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={18} color="gray" />
      <TextInput placeholder="Search" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#efefef",
    borderRadius: 10,
    marginHorizontal: 12,
    marginVertical: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
});
