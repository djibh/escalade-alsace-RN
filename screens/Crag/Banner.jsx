import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from "../../constants/theme";
import { capitalize } from "../../utils/capitalize";
import { BlurView } from "expo-blur";

export default function Banner({
  imageUrl,
  label,
  region,
  routesCount,
  height,
  type,
}) {
  const mockImages = [
    "https://upload.wikimedia.org/wikipedia/commons/7/76/Vue_aérienne_du_Kronthal.JPG",
    "https://planetgrimpe.com/wp-content/uploads/2016/04/13000608_1083884445009234_437871316_o-600x200.jpg",
    "https://planetgrimpe.com/wp-content/uploads/2016/04/12986880_1756288461266552_363553203_o-1-600x338.jpg",
    "https://media.camptocamp.org/c2corg-active/1347603629_703932831MI.jpg",
  ];

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const photoIndex = getRandomIntInclusive(0, mockImages.length - 1);

  return (
    <View>
      <View style={styles.banner}>
        <Image
          source={{
            uri: mockImages[photoIndex],
          }}
          style={styles.bannerPicture}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{label}</Text>
          <Text style={styles.subtitle}>{region}</Text>
        </View>
      </View>
      <BlurView intensity={35} style={styles.meta}>
        <Text style={styles.metaContent}>Type: {capitalize(type)}</Text>
        <Text style={styles.metaContent}>{routesCount} voies</Text>
        {height && <Text style={styles.metaContent}>{height}m</Text>}
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    // height: 250,
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
  titleContainer: {
    paddingVertical: 100,
  },
  title: {
    // marginTop: 90,
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
  meta: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#44444477",
  },
  metaContent: {
    flex: 1,
    textAlign: "center",
    fontWeight: "600",
    color: COLORS.fontPrimary,
    lineHeight: 20,
    // fontSize: 16,
  },
});
