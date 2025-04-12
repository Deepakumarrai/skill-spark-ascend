
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Video, StopCircle, Save, Loader2 } from "lucide-react";

interface RecordingInterfaceProps {
  onSaveRecording: (recordingData: { type: string; data: any }) => void;
}

const RecordingInterface: React.FC<RecordingInterfaceProps> = ({ onSaveRecording }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingType, setRecordingType] = useState<"audio" | "video" | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Timer reference
  const timerRef = React.useRef<number | null>(null);
  
  const startRecording = (type: "audio" | "video") => {
    setRecordingType(type);
    setIsRecording(true);
    setRecordingTime(0);
    
    // Start timer
    timerRef.current = window.setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
  };
  
  const stopRecording = () => {
    // Clear timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    setIsRecording(false);
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      // Simulate saving recording data
      onSaveRecording({
        type: recordingType || "audio",
        data: { duration: recordingTime },
      });
      setIsProcessing(false);
      setRecordingType(null);
    }, 1500);
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  React.useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Record Your Response</CardTitle>
      </CardHeader>
      <CardContent>
        {isRecording ? (
          <div className="flex flex-col items-center">
            <div className="mb-6 relative">
              <div className="w-32 h-32 rounded-full bg-red-100 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-red-200 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl font-mono">
                      {formatTime(recordingTime)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2">
                {recordingType === "audio" ? (
                  <Mic className="h-10 w-10 p-2 bg-red-500 text-white rounded-full animate-pulse" />
                ) : (
                  <Video className="h-10 w-10 p-2 bg-red-500 text-white rounded-full animate-pulse" />
                )}
              </div>
            </div>
            <p className="mb-4 text-gray-500">
              {recordingType === "audio" ? "Audio recording in progress" : "Video recording in progress"}
            </p>
            <Button 
              onClick={stopRecording}
              className="bg-red-500 hover:bg-red-600"
            >
              <StopCircle className="mr-2 h-4 w-4" />
              Stop Recording
            </Button>
          </div>
        ) : isProcessing ? (
          <div className="flex flex-col items-center py-8">
            <Loader2 className="h-16 w-16 text-indigo-500 animate-spin mb-4" />
            <p className="text-gray-500">Processing your recording...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={() => startRecording("audio")}
              variant="outline" 
              className="h-24 flex items-center justify-center"
            >
              <Mic className="mr-2 h-5 w-5" />
              Record Audio
            </Button>
            <Button
              onClick={() => startRecording("video")}
              variant="outline"
              className="h-24 flex items-center justify-center"
            >
              <Video className="mr-2 h-5 w-5" />
              Record Video
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecordingInterface;
