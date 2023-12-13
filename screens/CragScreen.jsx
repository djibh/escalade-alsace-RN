import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import { COLORS } from "../constants/theme";
import Badge from "../components/Badge";
import comments from "../assets/comments.png";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function CragScreen({ route }) {
  const { label, region, routesCount, type } = route.params;
  const fakeTags = ["Bouldering", "Best perf", "Kronthal"];

  return (
    <>
      <View style={styles.container}>
        {/* <Image
          source={{ uri: imageUrl }}
          style={styles.bgPicture}
          blurRadius={30}
        /> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <Search /> */}
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>{label}</Text>
            <Text style={styles.title}>{region}</Text>
            {/* <Image source={{ uri: imageUrl }} style={styles.picture} /> */}
            <View style={styles.comments}>
              <Image source={comments} />
              <Text style={styles.commentNumber}>
                {getRandomIntInclusive(10, 1000)}
              </Text>
            </View>
            <Text style={styles.content}>{type}</Text>
            <Text style={styles.content}>{routesCount} voies et blocs</Text>
            <View style={styles.tags}>
              {fakeTags.map((item) => (
                <Badge key={item} label={item} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
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
    gap: 24,
  },
  picture: {
    width: "100%",
    aspectRatio: 4 / 3,
    objectFit: "cover",
    borderRadius: 5,
  },
  title: {
    marginTop: 100,
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.fontPrimary,
    textShadowColor: "#333",
    textShadowOffset: { height: 1, width: 0 },
    textShadowRadius: 2,
    textAlign: "center",
  },
  comments: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  commentNumber: {
    color: COLORS.fontPrimary,
    fontWeight: "600",
  },
  content: {
    textAlign: "justify",
    fontSize: 16,
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
