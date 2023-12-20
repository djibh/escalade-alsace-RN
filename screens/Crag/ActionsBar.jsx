import { View, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../../constants/theme";
import { MaterialIcons, Ionicons } from "@expo/vector-icons/";

export default function ActionsBar() {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.log("**PRESSED** Location action");
        }}
      >
        <Ionicons name="ios-location-sharp" size={24} color={COLORS.primary} />
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.log("**PRESSED** Share action");
        }}
      >
        <MaterialIcons name="ios-share" size={24} color={COLORS.primary} />
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.log("**PRESSED** Add action");
        }}
      >
        <Ionicons name="ios-add" size={24} color={COLORS.primary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: COLORS.logoPink,
    borderRadius: 10,
  },
});
