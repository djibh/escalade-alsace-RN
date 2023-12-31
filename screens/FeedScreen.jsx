import { ScrollView, StyleSheet } from "react-native";
import Header from "../components/header/Header";
import Search from "../components/search/Search";
import { COLORS } from "../constants/theme";
import Feed from "../components/postfeed/Feed";

export default function FeedScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <Search />
      <Feed navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.fontPrimary,
  },
});
