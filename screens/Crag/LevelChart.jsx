import React from "react";
import { StyleSheet, View } from "react-native";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
} from "victory-native";

export default function LevelChart({ data }) {
  return (
    <View style={styles.container}>
      <VictoryChart height={220} theme={VictoryTheme.material}>
        <VictoryBar
          data={data}
          x="level"
          y="quantity"
          barWidth={24}
          cornerRadius={12}
          style={{
            data: {
              fill: ({ datum }) =>
                datum.level < 6
                  ? "lightblue"
                  : datum.level < 7
                  ? "green"
                  : datum.level < 8
                  ? "yellow"
                  : datum.level < 9
                  ? "orange"
                  : "red",
            },
          }}
        />
        <VictoryAxis
          tickValues={[1]}
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            grid: { stroke: "transparent" },
            tickLabels: { fill: "#bbb", fontSize: 16, fontWeight: "bold" },
          }}
        />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
