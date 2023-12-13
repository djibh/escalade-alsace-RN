import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "5a",
    uv: 4000,
  },
  {
    name: "5c",
    uv: 3000,
  },
  {
    name: "6c",
    uv: 2000,
  },
  {
    name: "7a",
    uv: 2780,
  },
];

export default function LevelChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
