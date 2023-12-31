import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import React, { memo } from "react";
import { COLORS } from "../../constants/theme";

const Post = memo(({ post, onPress }) => {
  const { title, imageUrl } = post;

  return (
    <TouchableOpacity style={styles.post} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.picture} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
});

export default Post;

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
