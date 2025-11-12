
"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const RevenueByMonth = () => {
  const data = [
    { month: "Jan", value: 500 },
    { month: "Feb", value: 350 },
    { month: "Mar", value: 600 },
    { month: "Apr", value: 400 },
    { month: "May", value: 550 },
    { month: "Jun", value: 300 },
    { month: "Jul", value: 650 },
    { month: "Aug", value: 400 },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Revenue by Month
      </h3>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
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
              tickFormatter={(value) => `${value}`}
            />

            {/* Tooltip */}
            <Tooltip
              cursor={{ fill: "rgba(59, 130, 246, 0.1)" }}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #E5E7EB",
                borderRadius: "6px",
                fontSize: "12px",
              }}
              labelStyle={{ color: "#6B7280" }}
            />

            {/* Bars */}
            <Bar
              dataKey="value"
              fill="#3B82F6"
              radius={[6, 6, 0, 0]}
              className="transition-colors hover:fill-blue-600"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
