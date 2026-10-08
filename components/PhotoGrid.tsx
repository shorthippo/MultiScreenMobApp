import { Image, StyleSheet, View } from "react-native";

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

export default function PhotoGrid() {
  return (
    <View style={styles.grid}>
      {photos.map((photo) => (
        <Image
          key={photo.id}
          source={photo.image}
          style={styles.photo}
          resizeMode="cover"
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },

  photo: {
    width: "33.33%",
    aspectRatio: 1,
  },
});
