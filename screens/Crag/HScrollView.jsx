import { View, Text, ScrollView, StyleSheet } from "react-native";
import { capitalize } from "../../utils/capitalize";

export default function HScrollView({ title, elements }) {
  return (
    <View>
      <Text>{title.toUpperCase()}</Text>
      <ScrollView horizontal>
        <View style={styles.HScrollView}>
          {elements.map((element) => (
            <Text>{capitalize(element)}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  HScrollView: {
    flexDirection: "row",
    gap: 8,
    paddingBottom: 16,
  },
});
