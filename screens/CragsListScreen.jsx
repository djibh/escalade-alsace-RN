import { FlatList, ScrollView, StyleSheet } from "react-native";
import Header from "../components/header/Header";
import Search from "../components/search/Search";
import { COLORS } from "../constants/theme";
import { useCrags } from "../services/useCrags";
import Crag from "../components/Crag";

export default function CragsListScreen({ navigation }) {
  const { data } = useCrags();
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <Search />
      <FlatList
        style={styles.latestPosts}
        ref={(ref) => {
          this.flatListRef = ref;
        }}
        data={data}
        initialNumToRender={5}
        renderItem={({ item }) => (
          <Crag
            crag={item}
            onPress={() =>
              navigation.navigate("Crag", {
                label: item.label,
                region: item.region,
                routesCount: item.routesCount,
                type: item.type,
                gradesResume: item.gradesResume,
              })
            }
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.fontPrimary,
  },
  latestPosts: {
    paddingHorizontal: 16,
  },
});
