
import React from "react";
import { 
  BarChart, 
  Bar, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from "recharts";
import { WeeklyProgress } from "@/types";

interface ProgressChartProps {
  data: WeeklyProgress[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  const chartData = data.map(item => ({
    ...item,
    name: item.day,
  }));
  
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
        <XAxis 
          dataKey="name" 
          tick={{ fontSize: 12, fill: "#6b7280" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis 
          tick={{ fontSize: 12, fill: "#6b7280" }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => value === 0 ? "" : value}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #f0f0f0",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            padding: "8px",
          }}
        />
        <Legend wrapperStyle={{ paddingTop: 10 }} />
        <Bar 
          dataKey="tasksCompleted" 
          name="Tasks" 
          fill="#8b5cf6" 
          radius={[4, 4, 0, 0]} 
        />
        <Bar 
          dataKey="xpGained" 
          name="XP" 
          fill="#10b981" 
          radius={[4, 4, 0, 0]} 
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProgressChart;
