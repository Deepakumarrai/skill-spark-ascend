
import React from "react";
import { Card } from "@/components/ui/card";
import { Medal } from "@/types";
import { cn } from "@/lib/utils";

interface LeaderboardEntryProps {
  rank: number;
  name: string;
  xp: number;
  medal: Medal;
  isCurrentUser?: boolean;
}

const LeaderboardEntry: React.FC<LeaderboardEntryProps> = ({ 
  rank, 
  name, 
  xp, 
  medal,
  isCurrentUser 
}) => {
  const getMedalColor = (medalType: Medal) => {
    if (medalType.includes("bronze")) return "bg-medal-bronze1 text-yellow-900";
    if (medalType.includes("silver")) return "bg-medal-silver1 text-gray-900";
    if (medalType.includes("gold")) return "bg-medal-gold1 text-yellow-900";
    if (medalType.includes("platinum")) return "bg-medal-platinum1 text-gray-900";
    return "bg-gray-200 text-gray-600";
  };

  const formatMedalName = (medalType: Medal) => {
    const parts = medalType.split(/(\d+)/);
    return `${parts[0].charAt(0).toUpperCase() + parts[0].slice(1)} ${parts[1]}`;
  };

  return (
    <div 
      className={cn(
        "flex items-center px-3 py-2 text-sm rounded-md",
        isCurrentUser ? "bg-indigo-50 border border-indigo-100" : "hover:bg-gray-50"
      )}
    >
      <div className="w-6 text-center font-semibold">{rank}</div>
      <div className="ml-2 flex-grow flex items-center">
        <div className="h-8 w-8 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-800 font-semibold mr-2">
          {name.split(" ").map(n => n[0]).join("")}
        </div>
        <span className="font-medium">{name}</span>
        {isCurrentUser && (
          <span className="ml-2 text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">You</span>
        )}
      </div>
      <div className="text-right flex items-center">
        <div className={`px-2 py-1 rounded-full text-xs mr-2 ${getMedalColor(medal)}`}>
          {formatMedalName(medal)}
        </div>
        <span className="font-semibold">{xp.toLocaleString()} XP</span>
      </div>
    </div>
  );
};

interface LeaderboardCardProps {
  entries: LeaderboardEntryProps[];
  currentUserRank: number;
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ entries, currentUserRank }) => {
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-3">Leaderboard</h3>
      <div className="space-y-2">
        {entries.map((entry) => (
          <LeaderboardEntry 
            key={entry.rank}
            {...entry}
            isCurrentUser={entry.rank === currentUserRank}
          />
        ))}
      </div>
    </Card>
  );
};

export default LeaderboardCard;
