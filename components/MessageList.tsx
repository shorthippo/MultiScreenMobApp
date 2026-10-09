import { useRouter } from "expo-router";

import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const messages = [
  {
    id: 1,
    name: "anna_k",
    text: "Sent a reel",
    time: "2m",
    image: require("../assets/images/photos/photo1.jpg"),
  },
  {
    id: 2,
    name: "mike.dev",
    text: "Haha that's great",
    time: "1h",
    image: require("../assets/images/photos/photo2.jpg"),
  },
  {
    id: 3,
    name: "sofia",
    text: "See you tomorrow!",
    time: "3h",
    image: require("../assets/images/photos/photo3.jpg"),
  },
  {
    id: 4,
    name: "john_doe",
    text: "Liked a message",
    time: "1d",
    image: require("../assets/images/photos/photo4.jpg"),
  },
  {
    id: 5,
    name: "lisa.m",
    text: "Where are you?",
    time: "2d",
    image: require("../assets/images/photos/photo5.jpg"),
  },
  {
    id: 6,
    name: "tom",
    text: "Okay sounds good",
    time: "1w",
    image: require("../assets/images/photos/photo6.jpg"),
  },
];

export default function MessageList() {
  const router = useRouter();
  return (
    <View>
      {messages.map((message) => (
        <Pressable
          key={message.id}
          style={styles.row}
          onPress={() => router.push({ pathname: "/messages/chat" })}
        >
          <Image source={message.image} style={styles.avatar} />
          <View style={styles.content}>
            <Text style={styles.name}>{message.name}</Text>
            <Text style={styles.text} numberOfLines={1}>
              {message.text} · {message.time}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 14,
  },
  text: {
    fontSize: 14,
    color: "gray",
    marginTop: 2,
  },
});
