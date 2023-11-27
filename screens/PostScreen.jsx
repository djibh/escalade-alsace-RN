import { StyleSheet, Button, Text, Image, View } from "react-native";
import Header from "../components/header/Header";
import Search from "../components/search/Search";
import { COLORS } from "../constants/theme";

export default function PostScreen({ route, navigation }) {
  const { title, content, picture } = route.params;

  return (
    <>
      {/* <Header /> */}
      <View style={styles.container}>
        <Image source={{ uri: picture }} style={styles.picture} />
        <Search />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        {/* <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "justify",
    justifyContent: "flex-start",
    padding: 16,
    gap: 16,
  },
  picture: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
    lineHeight: 20,
  },
});
