
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { InterviewCard } from "@/components/interview/InterviewCard";
import { RecordingInterface } from "@/components/interview/RecordingInterface";
import { QuestionBank } from "@/components/interview/QuestionBank";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InterviewType, SkillCategory } from "@/types";

const Interview: React.FC = () => {
  const [selectedType, setSelectedType] = useState<InterviewType>("hr");

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Mock Interview</h1>
        <p className="text-gray-600 mb-8">
          Practice your interview skills with our AI-powered mock interview simulator.
          Choose from HR or technical questions and get feedback on your responses.
        </p>

        <Tabs defaultValue="hr" onValueChange={(value) => setSelectedType(value as InterviewType)} className="mb-6">
          <TabsList>
            <TabsTrigger value="hr">HR Questions</TabsTrigger>
            <TabsTrigger value="technical">Technical Questions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hr" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <InterviewCard 
                type="hr"
                category="communication"
                question="Tell me about a time when you had to explain a complex concept to a non-technical person."
                difficulty="medium"
              />
              <InterviewCard 
                type="hr"
                category="leadership"
                question="Describe a situation where you had to lead a team through a difficult challenge."
                difficulty="medium"
              />
              <InterviewCard 
                type="hr"
                category="teamwork"
                question="Give an example of how you've contributed to a team environment."
                difficulty="easy"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="technical" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <InterviewCard 
                type="technical"
                category="problem-solving" // Changed from "career-planning" to a valid type
                question="How would you approach solving a complex problem with multiple stakeholders?"
                difficulty="hard"
              />
              <InterviewCard 
                type="technical"
                category="critical-thinking"
                question="Walk me through your thought process when debugging a challenging issue."
                difficulty="medium"
              />
              <InterviewCard 
                type="technical"
                category="technical-skills"
                question="Explain how you would design a scalable system for handling high traffic."
                difficulty="hard"
              />
            </div>
          </TabsContent>
        </Tabs>

        <QuestionBank />
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Record Your Response</h2>
          <RecordingInterface />
        </div>
      </div>
    </Layout>
  );
};

export default Interview;
