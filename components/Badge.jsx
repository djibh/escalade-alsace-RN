import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { capitalize } from "../utils/capitalize";

export default function Badge({ label }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{capitalize(label)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4f46e5",
    gap: 16,
    borderRadius: 20,
  },
  label: {
    color: "white",
    textAlign: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontWeight: "600",
    fontSize: 12,
  },
});
