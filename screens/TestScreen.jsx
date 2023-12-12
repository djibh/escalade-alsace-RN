import { ScrollView, StyleSheet } from "react-native";
import Header from "../components/header/Header";
import Search from "../components/search/Search";
import { COLORS } from "../constants/theme";

export default function TestScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <Search />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.fontPrimary,
  },
});
