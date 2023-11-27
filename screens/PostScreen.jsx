import { StyleSheet, Text, Image, View } from "react-native";
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
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.fontPrimary,
    textShadowColor: "#333",
    textShadowOffset: { height: 1, width: 0 },
    textShadowRadius: 2,
  },
  content: {
    fontSize: 16,
    textShadowColor: "#333",
    textShadowOffset: { height: 1, width: 0 },
    textShadowRadius: 2,
    fontWeight: "500",
    color: COLORS.fontPrimary,
    lineHeight: 20,
  },
});
