import { StyleSheet, View } from "react-native";
import Header from "../components/header/Header";
import Search from "../components/search/Search";
import { COLORS } from "../constants/theme";
import Feed from "../components/postfeed/Feed";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Search />
        <Feed navigation={navigation} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.fontPrimary,
  },
});
