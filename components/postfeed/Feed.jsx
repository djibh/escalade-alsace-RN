import { StyleSheet, FlatList } from "react-native";

import React from "react";
import { COLORS } from "../../constants/theme";
import Post from "./Post";
import { posts } from "../../dummy/data";

export default function Feed({ navigation }) {
  return (
    <FlatList
      style={styles.latestPosts}
      data={posts}
      renderItem={({ item }) => (
        <Post post={item} onPress={() => navigation.navigate("Post")} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  latestPosts: {
    backgroundColor: COLORS.fontPrimary,
    paddingHorizontal: 16,
  },
});
