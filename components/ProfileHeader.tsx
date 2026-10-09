import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>anieb</Text>
      <View style={styles.icons}>
        <Ionicons name="add-circle-outline" size={26} />
        <Ionicons name="menu-outline" size={26} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
    gap: 16,
  },
});
