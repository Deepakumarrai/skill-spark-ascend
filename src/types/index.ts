
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  level: number;
  xp: number;
  streak: number;
  rank: number;
  medal: Medal;
}

export type UserRole = "student" | "teacher" | "professional" | "other";

export type Medal = "bronze3" | "bronze2" | "bronze1" | "silver3" | "silver2" | "silver1" | "gold3" | "gold2" | "gold1" | "platinum3" | "platinum2" | "platinum1";

export interface Task {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  category: SkillCategory;
  status: "locked" | "available" | "completed";
  unlockDate?: Date;
}

export interface InterviewQuestion {
  id: string;
  type: "hr" | "technical";
  question: string;
  tips?: string;
  category: SkillCategory;
}

export interface GrowthCycle {
  id: number;
  name: string;
  description: string;
  topics: SkillTopic[];
  progress: number;
  unlocked: boolean;
}

export interface SkillTopic {
  id: string;
  name: string;
  category: SkillCategory;
  progress: number;
  modules: TopicModule[];
}

export interface TopicModule {
  id: string;
  name: string;
  type: "mcq" | "aptitude" | "practice" | "quiz";
  status: "locked" | "available" | "completed";
  xpReward: number;
}

export type SkillCategory = 
  | "communication" 
  | "leadership" 
  | "teamwork" 
  | "problem-solving" 
  | "critical-thinking" 
  | "english" 
  | "resume" 
  | "interview" 
  | "public-speaking" 
  | "emotional-intelligence" 
  | "time-management" 
  | "adaptability" 
  | "creativity" 
  | "conflict-resolution" 
  | "networking";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  dateEarned: Date;
}

export interface FeedbackScore {
  clarity: number;
  confidence: number;
  relevance: number;
  structure: number;
  overall: number;
  feedback: string;
  date: Date;
}

export interface WeeklyProgress {
  day: string;
  tasksCompleted: number;
  xpGained: number;
}
