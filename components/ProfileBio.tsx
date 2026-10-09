import { StyleSheet, Text, View } from "react-native";

export default function ProfileBio() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Anie B</Text>
      <Text style={styles.bio}>Some bio description I can't come up with</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 14,
    marginTop: 2,
  },
});
