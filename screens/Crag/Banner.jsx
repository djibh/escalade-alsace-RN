import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from "../../constants/theme";

export default function Banner({ imageUrl, label, region }) {
  return (
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
  );
}

const styles = StyleSheet.create({
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
});
