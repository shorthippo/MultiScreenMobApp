import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ProfileButtons() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Edit profile</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Share profile</Text>
      </Pressable>
      <Pressable style={styles.iconButton}>
        <Ionicons name="person-add-outline" size={18} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#efefef",
    borderRadius: 8,
    paddingVertical: 8,
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efefef",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
