
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InterviewQuestion, SkillCategory } from "@/types";
import { Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuestionBankProps {
  questions: InterviewQuestion[];
  onSelectQuestion: (question: InterviewQuestion) => void;
  selectedQuestionId?: string;
}

const QuestionBank: React.FC<QuestionBankProps> = ({ 
  questions, 
  onSelectQuestion,
  selectedQuestionId
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "hr" | "technical">("all");
  
  const filteredQuestions = questions.filter(q => {
    // Apply search filter
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply type filter
    const matchesType = typeFilter === "all" || q.type === typeFilter;
    
    return matchesSearch && matchesType;
  });
  
  const handleSelectQuestion = (question: InterviewQuestion) => {
    onSelectQuestion(question);
  };
  
  return (
    <Card className="h-full flex flex-col">
      <div className="p-4 border-b">
        <h3 className="font-medium mb-3">Question Bank</h3>
        <div className="relative mb-3">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full rounded-md border border-input bg-transparent pl-9 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex space-x-2">
          <Button 
            variant={typeFilter === "all" ? "default" : "outline"} 
            size="sm"
            className={typeFilter === "all" ? "bg-indigo-600 hover:bg-indigo-700" : ""}
            onClick={() => setTypeFilter("all")}
          >
            All
          </Button>
          <Button 
            variant={typeFilter === "hr" ? "default" : "outline"} 
            size="sm"
            className={typeFilter === "hr" ? "bg-indigo-600 hover:bg-indigo-700" : ""}
            onClick={() => setTypeFilter("hr")}
          >
            HR
          </Button>
          <Button 
            variant={typeFilter === "technical" ? "default" : "outline"} 
            size="sm"
            className={typeFilter === "technical" ? "bg-indigo-600 hover:bg-indigo-700" : ""}
            onClick={() => setTypeFilter("technical")}
          >
            Technical
          </Button>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto">
        {filteredQuestions.length > 0 ? (
          <div className="divide-y">
            {filteredQuestions.map((q) => (
              <div 
                key={q.id}
                className={cn(
                  "p-4 cursor-pointer hover:bg-gray-50",
                  selectedQuestionId === q.id && "bg-indigo-50 border-l-4 border-indigo-600"
                )}
                onClick={() => handleSelectQuestion(q)}
              >
                <h4 className="font-medium text-sm mb-1">{q.question}</h4>
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 capitalize">{q.type}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span 
                    className={cn(
                      "text-xs px-2 py-0.5 rounded-full capitalize",
                      q.type === "hr" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
                    )}
                  >
                    {q.category.replace(/-/g, ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center">
            <p className="text-gray-500">No questions match your filters</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default QuestionBank;
