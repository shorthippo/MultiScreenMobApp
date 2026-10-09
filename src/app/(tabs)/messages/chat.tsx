import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Chat() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} />
        </Pressable>
        <Image
          source={require("../../../../assets/images/photos/photo1.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.title}>Chat</Text>
        <View style={styles.icons}>
          <Ionicons name="call-outline" size={24} />
          <Ionicons name="videocam-outline" size={26} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginLeft: "auto",
  },
});
