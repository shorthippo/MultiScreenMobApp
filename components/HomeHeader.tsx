import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="add-outline" size={24}></Ionicons>
      </View>
      <Text style={styles.text}>Instagram</Text>
      <View style={styles.header}>
        <Ionicons name="heart-outline" size={24}></Ionicons>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    padding: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontSize: 24,
  },
});
