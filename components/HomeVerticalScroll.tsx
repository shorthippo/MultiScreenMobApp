import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

const photos = [
  {
    id: 1,
    image: require("../assets/images/photos/photo1.jpg"),
  },

  {
    id: 2,
    image: require("../assets/images/photos/photo2.jpg"),
  },
  {
    id: 3,
    image: require("../assets/images/photos/photo3.jpg"),
  },

  {
    id: 4,
    image: require("../assets/images/photos/photo4.jpg"),
  },

  {
    id: 5,
    image: require("../assets/images/photos/photo5.jpg"),
  },

  {
    id: 6,
    image: require("../assets/images/photos/photo6.jpg"),
  },

  {
    id: 7,
    image: require("../assets/images/photos/photo7.jpg"),
  },

  {
    id: 8,
    image: require("../assets/images/photos/photo8.jpg"),
  },

  {
    id: 9,
    image: require("../assets/images/photos/photo9.jpg"),
  },

  {
    id: 10,
    image: require("../assets/images/photos/photo10.jpg"),
  },

  {
    id: 11,
    image: require("../assets/images/photos/photo11.jpg"),
  },

  {
    id: 12,
    image: require("../assets/images/photos/photo12.jpg"),
  },

  {
    id: 13,
    image: require("../assets/images/photos/photo13.jpg"),
  },
];

export default function Posts() {
  return (
    <View style={styles.container}>
      {photos.map((photo) => (
        <View key={photo.id}>
          <Text style={styles.text}>AnieB</Text>
          <Image source={photo.image} style={styles.photo} resizeMode="cover" />
          <View style={styles.footer}>
            <Ionicons name="heart-outline" size={24}></Ionicons>
            <Ionicons name="chatbubble-outline" size={24}></Ionicons>
            <Ionicons name="repeat-outline" size={24}></Ionicons>
            <Ionicons name="paper-plane-outline" size={24}></Ionicons>
            <Ionicons
              name="bookmark-outline"
              size={24}
              style={{ marginLeft: "auto" }}
            ></Ionicons>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  photo: {
    width: "100%",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});
