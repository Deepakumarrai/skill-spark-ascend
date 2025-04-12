
import React from "react";
import { Card } from "@/components/ui/card";
import { Achievement } from "@/types";
import { format } from "date-fns";

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  return (
    <Card className="flex items-center p-4 mb-3 overflow-hidden hover:bg-gray-50 transition-all">
      <div className="mr-4 rounded-full bg-purple-100 p-3 text-purple-600">
        <div className="h-8 w-8 flex items-center justify-center text-lg font-medium">
          {achievement.icon}
        </div>
      </div>
      <div className="flex-grow">
        <h4 className="text-sm font-medium">{achievement.title}</h4>
        <p className="text-xs text-gray-500">{achievement.description}</p>
      </div>
      <div className="text-xs text-gray-500">
        {format(achievement.dateEarned, "MMM d")}
      </div>
    </Card>
  );
};

export default AchievementCard;
