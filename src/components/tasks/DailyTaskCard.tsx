
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/Badge";
import { Task, SkillCategory } from "@/types";
import { CheckCircle2, Lock, Clock, BarChart, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface DailyTaskCardProps {
  task: Task;
  onStartTask?: (taskId: string) => void;
}

const DailyTaskCard: React.FC<DailyTaskCardProps> = ({ task, onStartTask }) => {
  const getCategoryColor = (category: SkillCategory) => {
    return `bg-skill-${category} text-white`;
  };

  const getStatusIcon = () => {
    switch (task.status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "locked":
        return <Lock className="h-5 w-5 text-gray-400" />;
      case "available":
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  };

  const formatUnlockTime = (date?: Date) => {
    if (!date) return "Soon";
    
    const now = new Date();
    const unlockDate = new Date(date);
    const diffHours = Math.floor((unlockDate.getTime() - now.getTime()) / (1000 * 60 * 60));
    
    if (diffHours < 1) {
      const diffMinutes = Math.floor((unlockDate.getTime() - now.getTime()) / (1000 * 60));
      return `${diffMinutes} min`;
    }
    
    return `${diffHours} hours`;
  };

  return (
    <Card className={cn(
      "overflow-hidden transition-all",
      task.status === "completed" ? "border-green-200" : 
      task.status === "available" ? "border-blue-200" : 
      "border-gray-200 opacity-75"
    )}>
      <CardHeader className={cn(
        "pb-2",
        task.status === "completed" ? "bg-green-50" :
        task.status === "available" ? "bg-blue-50" :
        "bg-gray-50"
      )}>
        <div className="flex justify-between items-center">
          <Badge className={cn(
            "text-xs",
            task.status === "locked" ? "bg-gray-100 text-gray-600" : 
            getCategoryColor(task.category)
          )}>
            {task.category.charAt(0).toUpperCase() + task.category.slice(1).replace(/-/g, ' ')}
          </Badge>
          <div className="flex items-center">
            {getStatusIcon()}
            {task.status === "locked" && task.unlockDate && (
              <span className="text-xs text-gray-500 ml-1">
                {formatUnlockTime(task.unlockDate)}
              </span>
            )}
          </div>
        </div>
        <CardTitle className="text-lg">{task.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-sm text-gray-600 mb-3">{task.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <Award className="h-4 w-4 mr-1" />
          <span>{task.xpReward} XP reward</span>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-3 pb-3 flex justify-end">
        {task.status === "available" && (
          <Button 
            onClick={() => onStartTask?.(task.id)}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Start Task
          </Button>
        )}
        {task.status === "completed" && (
          <Button variant="outline" disabled>
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Completed
          </Button>
        )}
        {task.status === "locked" && (
          <Button variant="outline" disabled>
            <Lock className="mr-2 h-4 w-4" />
            Locked
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default DailyTaskCard;
