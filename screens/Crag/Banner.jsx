import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from "../../constants/theme";
import { capitalize } from "../../utils/capitalize";
import { BlurView } from "expo-blur";

export default function Banner({ imageUrl, label, region, routesCount, type }) {
  return (
    <View>
      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vue_aérienne_du_Kronthal.JPG",
          }}
          style={styles.bannerPicture}
        />
        <Text style={styles.title}>{label}</Text>
        <Text style={styles.subtitle}>{region}</Text>
      </View>
      <BlurView intensity={60} style={styles.meta}>
        <Text style={styles.metaContent}>Type: {capitalize(type)}</Text>
        <Text style={styles.metaContent}>{routesCount} voies</Text>
        <Text style={styles.metaContent}>{routesCount} blocs</Text>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 210,
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
    marginTop: 80,
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
    fontWeight: "500",
    color: COLORS.fontPrimary,
    lineHeight: 20,
  },
});
