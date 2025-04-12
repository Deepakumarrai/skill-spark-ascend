
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Video, MessageCircle, Info } from "lucide-react";
import { InterviewQuestion, SkillCategory } from "@/types";
import { cn } from "@/lib/utils";

interface InterviewCardProps {
  question: InterviewQuestion;
  onStartRecording: () => void;
  onGetAIFeedback: () => void;
}

const getCategoryColor = (category: SkillCategory) => {
  const colors: Record<SkillCategory, string> = {
    communication: "bg-blue-100 text-blue-800",
    leadership: "bg-purple-100 text-purple-800",
    teamwork: "bg-indigo-100 text-indigo-800", 
    "problem-solving": "bg-green-100 text-green-800",
    "critical-thinking": "bg-teal-100 text-teal-800",
    english: "bg-sky-100 text-sky-800",
    resume: "bg-orange-100 text-orange-800",
    interview: "bg-pink-100 text-pink-800",
    "public-speaking": "bg-red-100 text-red-800",
    "emotional-intelligence": "bg-amber-100 text-amber-800",
    "time-management": "bg-lime-100 text-lime-800",
    adaptability: "bg-emerald-100 text-emerald-800",
    creativity: "bg-fuchsia-100 text-fuchsia-800",
    "conflict-resolution": "bg-rose-100 text-rose-800",
    networking: "bg-cyan-100 text-cyan-800"
  };
  
  return colors[category] || "bg-gray-100 text-gray-800";
};

const InterviewCard: React.FC<InterviewCardProps> = ({ 
  question, 
  onStartRecording,
  onGetAIFeedback
}) => {
  const [recordingType, setRecordingType] = React.useState<"audio" | "video" | null>(null);
  const [isRecording, setIsRecording] = React.useState(false);
  const [recordingTime, setRecordingTime] = React.useState(0);
  const [hasRecorded, setHasRecorded] = React.useState(false);
  
  const intervalRef = React.useRef<number | null>(null);
  
  const startRecording = (type: "audio" | "video") => {
    setRecordingType(type);
    setIsRecording(true);
    setRecordingTime(0);
    
    // Start timer
    intervalRef.current = window.setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1000);
    
    // Simulate the actual recording functionality
    onStartRecording();
  };
  
  const stopRecording = () => {
    setIsRecording(false);
    setHasRecorded(true);
    
    // Clear timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  React.useEffect(() => {
    // Cleanup interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-1">{question.question}</CardTitle>
            <CardDescription>
              {question.type === "hr" ? "HR Question" : "Technical Question"} • 
              <span className={cn(
                "ml-1 px-2 py-0.5 rounded-full text-xs",
                getCategoryColor(question.category)
              )}>
                {question.category.charAt(0).toUpperCase() + question.category.slice(1).replace(/-/g, ' ')}
              </span>
            </CardDescription>
          </div>
          {question.tips && (
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Info className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {isRecording ? (
          <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center">
            <div className="flex items-center justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-red-500 animate-pulse"></div>
              </div>
            </div>
            <div className="text-2xl font-mono mb-3">{formatTime(recordingTime)}</div>
            <p className="text-gray-500 text-sm mb-4">
              {recordingType === "audio" ? "Audio recording in progress..." : "Video recording in progress..."}
            </p>
            <Button onClick={stopRecording} variant="destructive">
              Stop Recording
            </Button>
          </div>
        ) : hasRecorded ? (
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-indigo-100 text-indigo-800 rounded-full flex items-center justify-center mr-3">
                  {recordingType === "audio" ? <Mic className="h-5 w-5" /> : <Video className="h-5 w-5" />}
                </div>
                <div>
                  <h4 className="font-medium">Recording completed</h4>
                  <p className="text-sm text-gray-500">Length: {formatTime(recordingTime)}</p>
                </div>
              </div>
              <div>
                <Button variant="outline" size="sm">Play</Button>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Button 
                variant="default"
                className="w-full bg-indigo-600 hover:bg-indigo-700"
                onClick={onGetAIFeedback}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Get AI Feedback
              </Button>
              <Button 
                variant="outline"
                className="w-full"
                onClick={() => {
                  setRecordingType(null);
                  setHasRecorded(false);
                }}
              >
                Record Again
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <Button
              className="h-32 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 text-indigo-700 border border-indigo-200"
              variant="secondary"
              onClick={() => startRecording("audio")}
            >
              <Mic className="h-8 w-8 mb-2" />
              <span className="font-medium">Audio Response</span>
              <span className="text-xs text-indigo-500">Speak your answer</span>
            </Button>
            <Button
              className="h-32 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700 border border-blue-200"
              variant="secondary"
              onClick={() => startRecording("video")}
            >
              <Video className="h-8 w-8 mb-2" />
              <span className="font-medium">Video Response</span>
              <span className="text-xs text-blue-500">Record with camera</span>
            </Button>
          </div>
        )}
      </CardContent>
      {!isRecording && !hasRecorded && question.tips && (
        <CardFooter className="border-t px-6 py-4 bg-amber-50 text-amber-800">
          <div className="flex text-sm">
            <Info className="h-5 w-5 mr-2 flex-shrink-0" />
            <p>{question.tips}</p>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default InterviewCard;
