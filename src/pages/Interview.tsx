
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import InterviewCard from "@/components/interview/InterviewCard";
import QuestionBank from "@/components/interview/QuestionBank";
import { InterviewQuestion } from "@/types";
import { useToast } from "@/hooks/use-toast";

const Interview: React.FC = () => {
  const { toast } = useToast();
  const [selectedQuestion, setSelectedQuestion] = useState<InterviewQuestion | null>(null);
  
  // Mock interview questions
  const interviewQuestions: InterviewQuestion[] = [
    {
      id: "hr1",
      type: "hr",
      question: "Tell me about yourself and your background",
      category: "communication",
      tips: "Keep it professional and relevant to the job. Structure your answer with past, present, and future."
    },
    {
      id: "hr2",
      type: "hr",
      question: "Why do you want to work for this company?",
      category: "interview",
      tips: "Show you've done research about the company. Connect their values to yours."
    },
    {
      id: "hr3",
      type: "hr",
      question: "What are your greatest strengths?",
      category: "interview",
      tips: "Focus on strengths relevant to the job. Use specific examples to back up your claims."
    },
    {
      id: "hr4",
      type: "hr",
      question: "How do you handle conflict in a team?",
      category: "teamwork",
      tips: "Use the STAR method (Situation, Task, Action, Result) to describe a specific example."
    },
    {
      id: "hr5",
      type: "hr",
      question: "Where do you see yourself in 5 years?",
      category: "career-planning",
      tips: "Show ambition while being realistic. Tie your goals to the company's growth."
    },
    {
      id: "tech1",
      type: "technical",
      question: "Describe a challenging project you worked on and how you approached it",
      category: "problem-solving",
      tips: "Focus on your problem-solving process, challenges overcome, and results achieved."
    },
    {
      id: "tech2",
      type: "technical",
      question: "How do you prioritize tasks when managing multiple projects?",
      category: "time-management",
      tips: "Mention specific tools or methodologies you use for task management."
    },
    {
      id: "tech3",
      type: "technical",
      question: "Explain a time when you had to learn a new skill or technology quickly",
      category: "adaptability",
      tips: "Highlight your learning process and how you applied the new knowledge effectively."
    },
    {
      id: "tech4",
      type: "technical",
      question: "How do you ensure your work is of high quality?",
      category: "critical-thinking",
      tips: "Mention quality control processes, review methods, and attention to detail."
    },
    {
      id: "tech5",
      type: "technical",
      question: "Give an example of a creative solution you developed for a problem",
      category: "creativity",
      tips: "Focus on your innovative thinking process and the impact of your solution."
    }
  ];
  
  const handleSelectQuestion = (question: InterviewQuestion) => {
    setSelectedQuestion(question);
  };
  
  const handleStartRecording = () => {
    toast({
      title: "Recording started",
      description: "Your microphone is now active. Speak clearly and confidently.",
    });
  };
  
  const handleGetAIFeedback = () => {
    toast({
      title: "AI Analysis in Progress",
      description: "We're analyzing your response. This usually takes 10-15 seconds.",
    });
    
    // Simulate AI processing
    setTimeout(() => {
      toast({
        title: "Feedback Ready",
        description: "Your interview feedback has been generated successfully.",
      });
    }, 3000);
  };
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Mock Interview</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <QuestionBank 
                  questions={interviewQuestions} 
                  onSelectQuestion={handleSelectQuestion}
                  selectedQuestionId={selectedQuestion?.id}
                />
              </div>
              <div className="lg:col-span-2">
                {selectedQuestion ? (
                  <InterviewCard 
                    question={selectedQuestion} 
                    onStartRecording={handleStartRecording}
                    onGetAIFeedback={handleGetAIFeedback}
                  />
                ) : (
                  <div className="h-full flex items-center justify-center bg-white rounded-lg border border-gray-200 p-6">
                    <div className="text-center">
                      <h3 className="text-lg font-medium mb-2">Select a Question</h3>
                      <p className="text-gray-500">
                        Choose an interview question from the question bank to get started
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Interview;
