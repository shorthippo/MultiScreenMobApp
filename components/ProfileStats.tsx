import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileStats() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/photos/photo1.jpg")}
        style={styles.avatar}
      />
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.value}>13</Text>
          <Text style={styles.label}>Posts</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.value}>1280</Text>
          <Text style={styles.label}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.value}>342</Text>
          <Text style={styles.label}>Following</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
  },
  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  stat: {
    alignItems: "center",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
  label: {
    fontSize: 13,
  },
});
