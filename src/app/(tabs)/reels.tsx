import { StyleSheet, Text, View } from "react-native";

export default function Reels() {
  return (
    <View style={styles.container}>
      <Text>Reels</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
