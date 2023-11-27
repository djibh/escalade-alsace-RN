import { StyleSheet, View, TextInput, Image } from "react-native";
import search from "../../assets/search.png";

import { COLORS } from "../../constants/theme";

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image source={search} />
        <TextInput
          style={styles.searchInput}
          // onChangeText={onChangeText}
          // value={text}
          placeholder="Rechercher"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.fontPrimary,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: "row",
    flex: 1,
    gap: 8,
    alignItems: "center",
    backgroundColor: "#ccc",
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#bbb",
  },
  searchInput: {
    flex: 1,
    fontSize: 20,
  },
});
