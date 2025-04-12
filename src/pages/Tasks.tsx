
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import DailyTaskCard from "@/components/tasks/DailyTaskCard";
import { Task } from "@/types";
import { useToast } from "@/hooks/use-toast";

const Tasks: React.FC = () => {
  const { toast } = useToast();
  
  // Mock tasks data
  const tasks: Task[] = [
    {
      id: "task1",
      title: "Record a 2-minute self-introduction",
      description: "Practice introducing yourself professionally in a clear and concise manner. Focus on your background, skills, and career goals.",
      xpReward: 50,
      category: "communication",
      status: "available"
    },
    {
      id: "task2",
      title: "Solve a logical reasoning puzzle",
      description: "Complete the provided critical thinking exercise to enhance your problem-solving abilities.",
      xpReward: 75,
      category: "critical-thinking",
      status: "available"
    },
    {
      id: "task3",
      title: "Analyze a case study on team conflict",
      description: "Read the case study and identify the best approaches to resolve the team conflict situation.",
      xpReward: 100,
      category: "teamwork",
      status: "completed"
    },
    {
      id: "task4",
      title: "Write a professional email response",
      description: "Craft a well-structured email response to the provided business scenario.",
      xpReward: 60,
      category: "communication",
      status: "completed"
    },
    {
      id: "task5",
      title: "Practice active listening exercise",
      description: "Complete the audio exercise and summarize the key points mentioned by the speaker.",
      xpReward: 70,
      category: "communication",
      status: "locked",
      unlockDate: new Date(Date.now() + 24 * 60 * 60 * 1000) // Tomorrow
    },
    {
      id: "task6",
      title: "Update your resume with accomplishments",
      description: "Add at least three quantifiable achievements to your resume using the STAR method.",
      xpReward: 90,
      category: "resume",
      status: "locked",
      unlockDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // Day after tomorrow
    },
    {
      id: "task7",
      title: "Respond to common interview objections",
      description: "Record your responses to three common objections hiring managers might raise.",
      xpReward: 85,
      category: "interview",
      status: "locked",
      unlockDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days from now
    },
  ];
  
  const handleStartTask = (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      toast({
        title: "Task Started",
        description: `You've started working on: ${task.title}`,
      });
    }
  };
  
  const todayTasks = tasks.filter(task => 
    task.status === "available" || (task.status === "completed" && Math.random() > 0.5)
  );
  
  const upcomingTasks = tasks.filter(task => task.status === "locked");
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Daily Tasks</h1>
              <div className="flex items-center bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                <span className="font-medium">Current Streak: 5 days</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">Today's Tasks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {todayTasks.map((task) => (
                  <DailyTaskCard 
                    key={task.id} 
                    task={task} 
                    onStartTask={handleStartTask}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-medium mb-4">Upcoming Tasks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingTasks.map((task) => (
                  <DailyTaskCard 
                    key={task.id} 
                    task={task}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tasks;
