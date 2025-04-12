
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import GrowthCycleCard from "@/components/growth/GrowthCycleCard";
import { GrowthCycle } from "@/types";
import { useToast } from "@/hooks/use-toast";

const GrowthCycles: React.FC = () => {
  const { toast } = useToast();
  
  // Mock growth cycles data
  const growthCycles: GrowthCycle[] = [
    {
      id: 1,
      name: "Communication Foundations",
      description: "Master the fundamentals of effective communication",
      topics: [
        {
          id: "t1-1",
          name: "Active Listening",
          category: "communication",
          progress: 75,
          modules: [
            { id: "m1-1-1", name: "Basics of Active Listening", type: "mcq", status: "completed", xpReward: 50 },
            { id: "m1-1-2", name: "Body Language", type: "practice", status: "completed", xpReward: 75 },
            { id: "m1-1-3", name: "Reflective Listening", type: "quiz", status: "completed", xpReward: 50 },
            { id: "m1-1-4", name: "Advanced Techniques", type: "practice", status: "available", xpReward: 100 }
          ]
        },
        {
          id: "t1-2",
          name: "Clear Expression",
          category: "communication",
          progress: 50,
          modules: [
            { id: "m1-2-1", name: "Structuring Thoughts", type: "mcq", status: "completed", xpReward: 50 },
            { id: "m1-2-2", name: "Concise Communication", type: "practice", status: "completed", xpReward: 75 },
            { id: "m1-2-3", name: "Storytelling", type: "quiz", status: "available", xpReward: 100 },
            { id: "m1-2-4", name: "Persuasive Speaking", type: "practice", status: "locked", xpReward: 125 }
          ]
        },
        {
          id: "t1-3",
          name: "Written Communication",
          category: "english",
          progress: 25,
          modules: [
            { id: "m1-3-1", name: "Professional Emails", type: "mcq", status: "completed", xpReward: 50 },
            { id: "m1-3-2", name: "Business Writing", type: "practice", status: "available", xpReward: 75 },
            { id: "m1-3-3", name: "Technical Documentation", type: "quiz", status: "locked", xpReward: 100 },
            { id: "m1-3-4", name: "Creative Writing", type: "practice", status: "locked", xpReward: 75 }
          ]
        }
      ],
      progress: 65,
      unlocked: true
    },
    {
      id: 2,
      name: "Interview Mastery",
      description: "Develop advanced interview skills to impress recruiters",
      topics: [
        {
          id: "t2-1",
          name: "Self Introduction",
          category: "interview",
          progress: 100,
          modules: [
            { id: "m2-1-1", name: "Elevator Pitch", type: "practice", status: "completed", xpReward: 75 },
            { id: "m2-1-2", name: "Professional Background", type: "quiz", status: "completed", xpReward: 50 },
            { id: "m2-1-3", name: "Accomplishment Highlighting", type: "practice", status: "completed", xpReward: 100 }
          ]
        },
        {
          id: "t2-2",
          name: "Common Questions",
          category: "interview",
          progress: 60,
          modules: [
            { id: "m2-2-1", name: "Behavioral Questions", type: "mcq", status: "completed", xpReward: 50 },
            { id: "m2-2-2", name: "Situational Questions", type: "practice", status: "completed", xpReward: 75 },
            { id: "m2-2-3", name: "Technical Questions", type: "quiz", status: "available", xpReward: 100 },
            { id: "m2-2-4", name: "Challenging Questions", type: "practice", status: "locked", xpReward: 125 }
          ]
        },
        {
          id: "t2-3",
          name: "Interview Etiquette",
          category: "interview",
          progress: 33,
          modules: [
            { id: "m2-3-1", name: "Pre-Interview Preparation", type: "mcq", status: "completed", xpReward: 50 },
            { id: "m2-3-2", name: "During Interview", type: "practice", status: "available", xpReward: 75 },
            { id: "m2-3-3", name: "Post-Interview Follow-up", type: "quiz", status: "locked", xpReward: 50 }
          ]
        }
      ],
      progress: 70,
      unlocked: true
    },
    {
      id: 3,
      name: "Leadership Foundations",
      description: "Build essential leadership skills for career growth",
      topics: [
        {
          id: "t3-1",
          name: "Team Management",
          category: "leadership",
          progress: 0,
          modules: [
            { id: "m3-1-1", name: "Team Building", type: "mcq", status: "available", xpReward: 75 },
            { id: "m3-1-2", name: "Conflict Resolution", type: "practice", status: "locked", xpReward: 100 },
            { id: "m3-1-3", name: "Delegation Skills", type: "quiz", status: "locked", xpReward: 75 }
          ]
        },
        {
          id: "t3-2",
          name: "Decision Making",
          category: "leadership",
          progress: 0,
          modules: [
            { id: "m3-2-1", name: "Critical Analysis", type: "mcq", status: "locked", xpReward: 75 },
            { id: "m3-2-2", name: "Risk Assessment", type: "practice", status: "locked", xpReward: 100 },
            { id: "m3-2-3", name: "Strategic Thinking", type: "quiz", status: "locked", xpReward: 125 }
          ]
        }
      ],
      progress: 10,
      unlocked: true
    },
    {
      id: 4,
      name: "Problem-Solving Excellence",
      description: "Master advanced problem-solving techniques",
      topics: [
        {
          id: "t4-1",
          name: "Analytical Thinking",
          category: "problem-solving",
          progress: 0,
          modules: [
            { id: "m4-1-1", name: "Data Analysis", type: "practice", status: "locked", xpReward: 100 },
            { id: "m4-1-2", name: "Root Cause Analysis", type: "quiz", status: "locked", xpReward: 75 },
            { id: "m4-1-3", name: "Systems Thinking", type: "practice", status: "locked", xpReward: 125 }
          ]
        }
      ],
      progress: 0,
      unlocked: false
    },
    {
      id: 5,
      name: "Career Development",
      description: "Plan and execute your optimal career path",
      topics: [],
      progress: 0,
      unlocked: false
    },
    {
      id: 6,
      name: "Advanced Communication",
      description: "Master high-impact communication strategies",
      topics: [],
      progress: 0,
      unlocked: false
    },
    {
      id: 7,
      name: "Professional Excellence",
      description: "Achieve the highest levels of professional success",
      topics: [],
      progress: 0,
      unlocked: false
    }
  ];
  
  const handleViewCycle = (cycleId: number) => {
    const cycle = growthCycles.find(c => c.id === cycleId);
    if (cycle) {
      toast({
        title: `${cycle.name}`,
        description: `Viewing detailed modules for Growth Cycle ${cycleId}`,
      });
    }
  };
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Growth Cycles</h1>
              <div className="text-sm text-gray-500">
                <span className="font-medium">3 of 7</span> cycles unlocked
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">
              Complete growth cycles to master essential soft skills and advance your career journey.
              Each cycle contains multiple topics with interactive learning modules.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {growthCycles.map((cycle) => (
                <GrowthCycleCard 
                  key={cycle.id} 
                  cycle={cycle} 
                  onViewCycle={handleViewCycle}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GrowthCycles;
