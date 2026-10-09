import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function MessagesHeader() {
  return (
    <View style={styles.container}>
      <Ionicons name="chevron-back" size={26} />
      <Text style={styles.title}>anieb</Text>
      <Ionicons
        name="create-outline"
        size={24}
        style={{ marginLeft: "auto" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
