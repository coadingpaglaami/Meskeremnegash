"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const UserGrowthChart = () => {
  const data = [
    { month: "Jan", value: 150 },
    { month: "Feb", value: 200 },
    { month: "Mar", value: 250 },
    { month: "Apr", value: 300 },
    { month: "May", value: 280 },
    { month: "Jun", value: 320 },
    { month: "Jul", value: 400 },
    { month: "Aug", value: 450 },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">User Growth</h3>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
          >
            {/* Background dashed grid */}
            <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />

            {/* Axes */}
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />

            {/* Tooltip */}
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #E5E7EB",
                borderRadius: "6px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "#6B7280" }}
            />

            {/* Line */}
            <Line
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ r: 4, fill: "#10b981" }}
              activeDot={{ r: 6, strokeWidth: 2, stroke: "#047857" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
