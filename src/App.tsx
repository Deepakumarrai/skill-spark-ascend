import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import GrowthCycles from "./pages/GrowthCycles";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Chatbot from "@/pages/chatbot";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Prevent duplicate script loads
    const existingScript = document.querySelector(`script[src="https://fastbots.ai/js/embed.js"]`);
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://fastbots.ai/js/embed.js";
      script.async = true;
      script.onload = () => {
        console.log("FastBots script loaded");
      };
      script.setAttribute("data-bot-id", "cm9e2pc0b1mlkrik7fjtgiy8z");
      document.body.appendChild(script);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/growth-cycles" element={<GrowthCycles />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
