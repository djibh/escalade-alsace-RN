import { StyleSheet } from "react-native";
import Header from "../components/header/Header";
import Search from "../components/search/Search";
import { COLORS } from "../constants/theme";
import Feed from "../components/postfeed/Feed";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <Header />
      <Search />
      <Feed navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.fontPrimary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});
