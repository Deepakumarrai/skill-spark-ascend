
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import DashboardCard from "@/components/dashboard/DashboardCard";
import ProgressChart from "@/components/dashboard/ProgressChart";
import StatsCard from "@/components/dashboard/StatsCard";
import AchievementCard from "@/components/dashboard/AchievementCard";
import LeaderboardCard from "@/components/dashboard/LeaderboardCard";
import { Achievement, WeeklyProgress } from "@/types";
import { 
  BarChart3, 
  Award, 
  Flame, 
  Trophy, 
  CalendarCheck 
} from "lucide-react";

const Dashboard: React.FC = () => {
  // Mock data
  const weeklyProgressData: WeeklyProgress[] = [
    { day: "Mon", tasksCompleted: 3, xpGained: 150 },
    { day: "Tue", tasksCompleted: 5, xpGained: 220 },
    { day: "Wed", tasksCompleted: 2, xpGained: 90 },
    { day: "Thu", tasksCompleted: 4, xpGained: 180 },
    { day: "Fri", tasksCompleted: 6, xpGained: 250 },
    { day: "Sat", tasksCompleted: 2, xpGained: 100 },
    { day: "Sun", tasksCompleted: 1, xpGained: 50 },
  ];
  
  const recentAchievements: Achievement[] = [
    {
      id: "1",
      title: "First Interview Completed",
      description: "Complete your first mock interview",
      icon: "🎯",
      dateEarned: new Date("2025-04-10"),
    },
    {
      id: "2",
      title: "3-Day Streak",
      description: "Complete daily tasks for 3 consecutive days",
      icon: "🔥",
      dateEarned: new Date("2025-04-09"),
    },
    {
      id: "3",
      title: "Resume Master",
      description: "Complete the Resume Writing module with 90%+ score",
      icon: "📝",
      dateEarned: new Date("2025-04-07"),
    },
  ];
  
  const leaderboardEntries = [
    { rank: 1, name: "Emily Wang", xp: 4890, medal: "platinum1" as const },
    { rank: 2, name: "Alex Chen", xp: 4750, medal: "platinum2" as const },
    { rank: 3, name: "Sarah Johnson", xp: 4580, medal: "platinum3" as const },
    { rank: 4, name: "John Smith", xp: 4250, medal: "gold1" as const },
    { rank: 5, name: "Michael Brown", xp: 3950, medal: "gold2" as const },
  ];
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <StatsCard
                title="Total XP"
                value="1,250"
                icon={<Award className="h-5 w-5" />}
                trend={{ value: 12, positive: true }}
              />
              <StatsCard
                title="Current Streak"
                value="5 days"
                icon={<Flame className="h-5 w-5" />}
                trend={{ value: 2, positive: true }}
              />
              <StatsCard
                title="Global Rank"
                value="#4,209"
                icon={<Trophy className="h-5 w-5" />}
                trend={{ value: 3, positive: false }}
              />
              <StatsCard
                title="Tasks Completed"
                value="27"
                icon={<CalendarCheck className="h-5 w-5" />}
                trend={{ value: 8, positive: true }}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <DashboardCard 
                  title="Weekly Progress" 
                  description="Tasks completed and XP gained"
                >
                  <ProgressChart data={weeklyProgressData} />
                </DashboardCard>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <DashboardCard title="Today's Focus">
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                          <span className="text-lg">💬</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Communication Skills</h4>
                          <p className="text-xs text-gray-500">2 tasks pending today</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 bg-green-50 rounded-lg">
                        <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                          <span className="text-lg">🧠</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Critical Thinking</h4>
                          <p className="text-xs text-gray-500">1 task pending today</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                        <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3">
                          <span className="text-lg">👔</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Interview Preparation</h4>
                          <p className="text-xs text-gray-500">Mock interview scheduled</p>
                        </div>
                      </div>
                    </div>
                  </DashboardCard>
                  
                  <DashboardCard title="Skill Mastery" description="Your skill progress">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Communication</span>
                          <span>65%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div
                            className="h-2 rounded-full bg-blue-600"
                            style={{ width: "65%" }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Leadership</span>
                          <span>42%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div
                            className="h-2 rounded-full bg-purple-600"
                            style={{ width: "42%" }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Interview Skills</span>
                          <span>78%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div
                            className="h-2 rounded-full bg-green-600"
                            style={{ width: "78%" }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Critical Thinking</span>
                          <span>51%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div
                            className="h-2 rounded-full bg-orange-600"
                            style={{ width: "51%" }}
                          ></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Resume Building</span>
                          <span>90%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div
                            className="h-2 rounded-full bg-pink-600"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </DashboardCard>
                </div>
              </div>
              
              <div className="space-y-6">
                <DashboardCard title="Leaderboard" className="h-fit">
                  <LeaderboardCard 
                    entries={leaderboardEntries}
                    currentUserRank={4}
                  />
                </DashboardCard>
                
                <DashboardCard title="Recent Achievements" description="Your latest accomplishments">
                  <div className="space-y-2">
                    {recentAchievements.map((achievement) => (
                      <AchievementCard
                        key={achievement.id}
                        achievement={achievement}
                      />
                    ))}
                  </div>
                </DashboardCard>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
