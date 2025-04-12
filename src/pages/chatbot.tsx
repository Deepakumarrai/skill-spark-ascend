import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("https://chatgpt-42.p.rapidapi.com/chatgpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-key": "c9f1030696mshe08e3dfcef67769p113f57jsn41e3db8fc9ad",
          "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: input }],
          web_access: false,
        }),
      });

      const data = await response.json();
      const botReply = data?.result ?? "Sorry, something went wrong.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: botReply },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, there was a problem reaching the assistant.",
        },
      ]);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 flex flex-col">
          <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col bg-white rounded-lg shadow p-4">
            <h1 className="text-2xl font-bold mb-4">Ask Assistant</h1>
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg max-w-[75%] ${
                    msg.role === "user"
                      ? "bg-blue-100 self-end text-right"
                      : "bg-gray-100 self-start text-left"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 border rounded px-4 py-2"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSend}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Send
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Chatbot;
