"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Updated user growth data
const monthlyUsers = [
  { month: "Jan", activeUsers: 220 },
  { month: "Feb", activeUsers: 450 },
  { month: "Mar", activeUsers: 700 },
  { month: "Apr", activeUsers: 950 },
  { month: "May", activeUsers: 1300 },
  { month: "Jun", activeUsers: 1700 },
];

export default function ActiveUsersChart() {
  return (
    <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">
          Active Users Trend
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={monthlyUsers}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fill: "#4b5563", fontSize: 12 }} />
            <YAxis tick={{ fill: "#4b5563", fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#fef3c7", borderRadius: "6px" }}
            />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="activeUsers"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ r: 4, fill: "#ec4899" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
