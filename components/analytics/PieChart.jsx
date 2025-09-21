"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Updated product distribution data
const categoryDistribution = [
  { name: "Computers", value: 350 },
  { name: "Mobile Devices", value: 280 },
  { name: "Accessories", value: 180 },
  { name: "Miscellaneous", value: 90 },
];

// New color palette
const CHART_COLORS = ["#6366f1", "#10b981", "#fbbf24", "#f87171"];

export default function ProductDistributionCard() {
  return (
    <Card className="bg-gradient-to-r from-indigo-50 to-green-50">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">
          Product Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[320px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryDistribution}
              cx="50%"
              cy="50%"
              outerRadius={110}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              labelLine={false}
            >
              {categoryDistribution.map((entry, index) => (
                <Cell
                  key={`slice-${index}`}
                  fill={CHART_COLORS[index % CHART_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#f3f4f6", borderRadius: "6px" }}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
