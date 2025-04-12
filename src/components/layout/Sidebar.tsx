
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Video,
  CalendarCheck,
  Sparkles,
  Layers,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, href, isActive }) => (
  <Link
    to={href}
    className={cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
      isActive
        ? "bg-indigo-100 text-indigo-900 font-medium"
        : "text-gray-700 hover:text-indigo-900 hover:bg-indigo-50"
    )}
  >
    <div className={cn("h-6 w-6", isActive ? "text-indigo-600" : "text-gray-500")}>{icon}</div>
    <span>{label}</span>
  </Link>
);

const Sidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    {
      icon: <BarChart3 />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <Video />,
      label: "Mock Interview",
      href: "/interview",
    },
    {
      icon: <CalendarCheck />,
      label: "Daily Tasks",
      href: "/tasks",
    },
    {
      icon: <Sparkles />,
      label: "Growth Cycles",
      href: "/growth-cycles",
    },
    {
      icon: <Layers />,
      label: "My Progress",
      href: "/progress",
    },
    {
      icon: <MessageSquare />,
      label: "Chatbot",
      href: "/chatbot",
    },
    {
      icon: <Users />,
      label: "Mentors",
      href: "/mentors",
    },
    {
      icon: <Settings />,
      label: "Settings",
      href: "/settings",
    },
  ];

  return (
    <div className="hidden md:flex h-screen sticky top-0 w-64 flex-col border-r bg-white px-3 py-4">
      <div className="mb-8 flex h-12 items-center justify-start pl-2">
        <Link to="/dashboard" className="flex items-center">
          <span className="text-xl font-bold text-indigo-600">Skill</span>
          <span className="text-xl font-bold text-gray-900">Spark</span>
        </Link>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={currentPath === item.href}
          />
        ))}
      </nav>
      <div className="mt-auto pt-4">
        <div className="rounded-lg bg-gray-50 p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-800 font-semibold">
              JS
            </div>
            <div>
              <div className="text-sm font-medium">John Smith</div>
              <div className="text-xs text-gray-500">Silver 2</div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-500 flex justify-between">
              <span>Level 5</span>
              <span>1,250 XP</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 rounded-full bg-indigo-600" style={{ width: "60%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
