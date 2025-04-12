
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Bell, 
  Menu, 
  X,
  ChevronDown,
  LogOut,
  Settings,
  User,
  Medal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/dashboard" className="flex items-center">
                <span className="text-xl font-bold text-indigo-600">Skill</span>
                <span className="text-xl font-bold text-gray-900">Spark</span>
              </Link>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link to="/dashboard" className="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100">
              Dashboard
            </Link>
            <Link to="/interview" className="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100">
              Interview
            </Link>
            <Link to="/tasks" className="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100">
              Daily Tasks
            </Link>
            <Link to="/growth-cycles" className="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100">
              Growth Cycles
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative mr-2">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-indigo-600 ring-2 ring-white"></span>
            </Button>

            {/* XP Badge */}
            <Badge variant="xp" className="mr-4">
              <span className="font-bold">1,250</span> XP
            </Badge>

            {/* User dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center rounded-full">
                  <div className="h-8 w-8 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-800 font-semibold mr-2">
                    JS
                  </div>
                  <span className="hidden md:block text-sm font-medium text-gray-900">John Smith</span>
                  <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span>John Smith</span>
                    <span className="text-xs text-gray-500">john@example.com</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Medal className="mr-2 h-4 w-4" />
                  <span>Achievements</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <Link to="/login">Sign out</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-4 py-2">
            <Link 
              to="/dashboard" 
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/interview" 
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Interview
            </Link>
            <Link 
              to="/tasks" 
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Daily Tasks
            </Link>
            <Link 
              to="/growth-cycles" 
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Growth Cycles
            </Link>
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-800 font-semibold">
                  JS
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">John Smith</div>
                <div className="text-sm font-medium text-gray-500">john@example.com</div>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-indigo-600 ring-2 ring-white"></span>
              </Button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <Link 
                to="/profile" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profile
              </Link>
              <Link 
                to="/achievements" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Achievements
              </Link>
              <Link 
                to="/settings" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Settings
              </Link>
              <Link 
                to="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
