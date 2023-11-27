import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";

export default function Post({ post, onPress }) {
  return (
    <TouchableOpacity style={styles.post} onPress={onPress}>
      <Image source={{ uri: `${post.picture}` }} style={styles.picture} />
      <Text style={styles.title}>{post.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  post: {
    position: "relative",
    flexDirection: "row",
    alignItems: "flex-end",
    height: 220,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 24,
    borderRadius: 5,
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  picture: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 5,
  },
  title: {
    padding: 8,
    opacity: 0.85,
    backgroundColor: COLORS.fontPrimary,
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.secondary,
  },
});
