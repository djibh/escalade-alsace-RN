import React, { useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Text,
  View,
} from "react-native";

import Post from "./Post";
import { usePosts } from "../services/api";

export default function Feed({ navigation }) {
  const { data } = usePosts();

  return (
    <FlatList
      style={styles.latestPosts}
      ref={(ref) => {
        this.flatListRef = ref;
      }}
      data={data}
      initialNumToRender={5}
      renderItem={({ item }) => (
        <Post
          post={item}
          onPress={() =>
            navigation.navigate("Post", {
              itemId: item.id,
              title: item.title,
              imageUrl: item.imageUrl,
              content: item.content,
            })
          }
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  latestPosts: {
    paddingHorizontal: 16,
  },
});
