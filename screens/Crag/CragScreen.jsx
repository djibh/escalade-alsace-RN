import { StyleSheet, View, ScrollView, Text } from "react-native";
import { COLORS } from "../../constants/theme";
import Banner from "./Banner";
import LevelChart from "./LevelChart";
import ActionsBar from "./ActionsBar";
import HScrollView from "./HScrollView";

export default function CragScreen({ route }) {
  const {
    label,
    region,
    routesCount,
    type,
    gradesResume,
    expositions,
    rocks,
    height,
  } = route.params;
  const data = gradesResume.labels
    .map((label, index) => ({
      level: label,
      quantity: gradesResume.data[index],
    }))
    .sort((a, b) => a.level - b.level);

  return (
    <>
      <View style={styles.container}>
        {data && (
          <Banner
            label={label}
            region={region}
            routesCount={routesCount}
            type={type}
            height={height}
          />
        )}
        <ScrollView showsVerticalScrollIndicator={false}>
          <LevelChart data={data} />
          <View style={styles.contentWrapper}>
            <View>
              <HScrollView title={"EXPOSITION"} elements={expositions} />
              <HScrollView title={"ROCHE"} elements={rocks} />
            </View>
            <ActionsBar />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ede",
  },
  contentWrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    padding: 16,
    gap: 16,
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
