"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Updated data with slightly different numbers
const monthlyStats = [
  { month: "Jan", unitsSold: 4200, revenueGenerated: 2500 },
  { month: "Feb", unitsSold: 3100, revenueGenerated: 2300 },
  { month: "Mar", unitsSold: 5200, revenueGenerated: 2400 },
  { month: "Apr", unitsSold: 4600, revenueGenerated: 2100 },
  { month: "May", unitsSold: 6000, revenueGenerated: 2250 },
  { month: "Jun", unitsSold: 4500, revenueGenerated: 2600 },
];

export default function SalesOverviewCard() {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-green-50">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">
          Monthly Sales Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={monthlyStats}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" />
            <XAxis dataKey="month" tick={{ fill: "#4b5563", fontSize: 12 }} />
            <YAxis tick={{ fill: "#4b5563", fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px" }}
            />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="unitsSold" fill="#3b82f6" barSize={20} />
            <Bar dataKey="revenueGenerated" fill="#10b981" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
