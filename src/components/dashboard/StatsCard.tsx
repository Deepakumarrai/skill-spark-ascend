
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    positive: boolean;
  };
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, trend, className }) => {
  return (
    <Card className={cn("flex items-center p-4 overflow-hidden", className)}>
      <div className="mr-4 rounded-lg bg-indigo-100 p-3 text-indigo-600">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <h4 className="text-2xl font-bold tracking-tight">{value}</h4>
        {trend && (
          <p className={cn(
            "text-xs",
            trend.positive ? "text-green-600" : "text-red-600"
          )}>
            {trend.positive ? "+" : "-"}{trend.value}% from last week
          </p>
        )}
      </div>
    </Card>
  );
};

export default StatsCard;
