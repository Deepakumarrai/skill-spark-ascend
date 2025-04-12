
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { GrowthCycle, SkillTopic } from "@/types";
import { Lock, ChevronRight, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopicItemProps {
  topic: SkillTopic;
}

const TopicItem: React.FC<TopicItemProps> = ({ topic }) => {
  const completedModules = topic.modules.filter(m => m.status === "completed").length;
  const totalModules = topic.modules.length;
  const progressPercent = Math.round((completedModules / totalModules) * 100);
  
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <div className="text-sm font-medium">{topic.name}</div>
        <div className="text-xs text-gray-500">{completedModules}/{totalModules}</div>
      </div>
      <Progress value={progressPercent} className="h-2" />
    </div>
  );
};

interface GrowthCycleCardProps {
  cycle: GrowthCycle;
  onViewCycle?: (cycleId: number) => void;
}

const GrowthCycleCard: React.FC<GrowthCycleCardProps> = ({ cycle, onViewCycle }) => {
  return (
    <Card className={cn(
      "overflow-hidden transition-all",
      !cycle.unlocked && "opacity-80"
    )}>
      <CardHeader className="pb-3 relative">
        {!cycle.unlocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-500/20 backdrop-blur-sm">
            <div className="bg-white/90 p-4 rounded-full">
              <Lock className="h-6 w-6 text-gray-500" />
            </div>
          </div>
        )}
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Growth Cycle {cycle.id}</CardTitle>
          <div className="flex items-center bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">
            <Award className="h-4 w-4 mr-1" />
            {cycle.topics.reduce((total, topic) => 
              total + topic.modules.reduce((t, m) => t + m.xpReward, 0), 0
            )} XP
          </div>
        </div>
        <p className="text-gray-600 text-sm">{cycle.description}</p>
        <div className="mt-2">
          <div className="flex justify-between text-sm mb-1">
            <span>Overall Progress</span>
            <span className="font-medium">{cycle.progress}%</span>
          </div>
          <Progress value={cycle.progress} className="h-2" />
        </div>
      </CardHeader>
      <CardContent>
        <h4 className="text-sm font-semibold text-gray-500 mb-3">Topics ({cycle.topics.length})</h4>
        
        {cycle.topics.slice(0, 3).map((topic) => (
          <TopicItem key={topic.id} topic={topic} />
        ))}
        
        {cycle.topics.length > 3 && (
          <p className="text-xs text-gray-500 mb-3">
            +{cycle.topics.length - 3} more topics
          </p>
        )}
        
        <Button 
          variant="outline" 
          className="w-full mt-2"
          disabled={!cycle.unlocked}
          onClick={() => cycle.unlocked && onViewCycle?.(cycle.id)}
        >
          {cycle.unlocked ? (
            <>
              View Details
              <ChevronRight className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              <Lock className="mr-1 h-4 w-4" />
              Locked
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default GrowthCycleCard;
