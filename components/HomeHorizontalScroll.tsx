import { Image, ScrollView, StyleSheet, View } from "react-native";

const profiles = [
  {
    id: "1",
    image: require("../assets/images/profilepics/pexels-d-flamez-2155520858-36680469.jpg"),
  },

  {
    id: "2",
    image: require("../assets/images/profilepics/pexels-juan-hiop-202978628-11951275.jpg"),
  },

  {
    id: "3",
    image: require("../assets/images/profilepics/pexels-kampus-6684739.jpg"),
  },

  {
    id: "4",
    image: require("../assets/images/profilepics/pexels-simon-robben-55958-614810.jpg"),
  },

  {
    id: "5",
    image: require("../assets/images/profilepics/pexels-ventarafilms-31430969.jpg"),
  },
];

export default function StoriesScroll() {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        {profiles.map((photo) => (
          <Image key={photo.id} source={photo.image} style={styles.photo} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  photo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginHorizontal: 8,
  },
});
