import { View, Text, ScrollView, StyleSheet } from "react-native";
import { capitalize } from "../../utils/capitalize";

export default function HScrollView({ title, elements }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      <ScrollView horizontal>
        <View style={styles.HScrollView}>
          {elements.map((element) => (
            <Text key={element} style={styles.elements}>
              {capitalize(element)}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
    gap: 8,
  },
  HScrollView: {
    flexDirection: "row",
    gap: 8,
  },
  title: {
    fontSize: 20,
  },
  elements: {
    fontSize: 16,
  },
});
