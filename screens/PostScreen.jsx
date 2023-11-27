import { StyleSheet, Text, Image, View } from "react-native";
import Search from "../components/search/Search";
import { COLORS } from "../constants/theme";
import Badge from "../components/Badge";

export default function PostScreen({ route, navigation }) {
  const { id, title, content, picture, tags } = route.params;

  return (
    <>
      <View style={styles.container}>
        <Image
          source={{ uri: picture }}
          style={styles.bgPicture}
          blurRadius={30}
        />
        <Search />
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Image source={{ uri: picture }} style={styles.picture} />
          <Text style={styles.content}>{content}</Text>
          <View style={styles.tags}>
            {tags.map((item) => (
              <Badge key={item} label={item} />
            ))}
          </View>
        </View>
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
  bgPicture: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.4,
  },
  contentWrapper: {
    flexDirection: "column",
    height: "100%",
    gap: 16,
  },
  picture: {
    width: "100%",
    aspectRatio: 4 / 3,
    objectFit: "cover",
    borderRadius: 5,
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
  tags: {
    flexDirection: "row",
    gap: 8,
  },
});
