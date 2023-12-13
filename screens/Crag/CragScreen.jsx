import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import { COLORS } from "../../constants/theme";
import Badge from "../../components/Badge";
import comments from "../../assets/comments.png";
import { capitalize } from "../../utils/capitalize";
import Banner from "./Banner";

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
        <Banner label={label} region={region} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentWrapper}>
            <Text style={styles.content}>{routesCount} voies</Text>
            <Text style={styles.content}>Type : {capitalize(type)}</Text>
            <View style={styles.comments}>
              <Image source={comments} />
              <Text style={styles.commentNumber}>
                {getRandomIntInclusive(10, 1000)}
              </Text>
            </View>

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
    gap: 16,
  },
  contentWrapper: {
    flexDirection: "column",
    height: "100%",
    paddingHorizontal: 16,
    gap: 24,
  },
  banner: {
    height: 200,
    backgroundColor: COLORS.primary,
  },
  bannerPicture: {
    position: "absolute",
    height: "100%",
    objectFit: "cover",
    opacity: 0.7,
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    marginTop: 100,
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.fontPrimary,
    textShadowColor: "#333",
    textShadowOffset: { height: 1, width: 0 },
    textShadowRadius: 2,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "semibold",
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
    gap: 12,
  },
});
