import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { COLORS } from "../constants/theme";

const Crag = memo(({ crag, onPress }) => {
  const { label, region, routesCount, type } = crag;

  return (
    <TouchableOpacity style={styles.crag} onPress={onPress}>
      <View style={styles.contentLeft}>
        <Text numberOfLines={1} style={styles.title}>
          {label}
        </Text>
        <Text style={styles.subtitle}>{region}</Text>
      </View>
      <View style={styles.contentRight}>
        <Text style={styles.subtitle}>{routesCount} voies</Text>
        <Text style={styles.subtitle}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default Crag;

const styles = StyleSheet.create({
  crag: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 24,
    borderRadius: 5,
    backgroundColor: COLORS.secondary,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  contentLeft: {
    gap: 8,
  },
  contentRight: {
    alignItems: "flex-end",
    gap: 8,
  },
  title: {
    opacity: 0.85,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    opacity: 0.85,
    fontSize: 16,
    fontWeight: "bold",
    color: "#ddd",
  },
});
