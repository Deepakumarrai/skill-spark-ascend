
import React from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  authType: "login" | "register";
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle, authType }) => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">{subtitle}</p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-6 py-8 shadow rounded-lg">
            {children}
          </div>
          <div className="mt-4 text-center">
            {authType === "login" ? (
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Register
                </Link>
              </p>
            ) : (
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Login
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:block lg:w-1/2 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-white rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-white rounded-full"></div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12">
            <h1 className="text-4xl font-bold mb-4">Skill Spark Ascend</h1>
            <p className="text-xl mb-8 text-center max-w-md">
              Develop essential soft skills through interactive training, feedback, and continuous growth.
            </p>
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">7+</div>
                <div className="text-sm">Growth Cycles</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Skill Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Interview Questions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm">Daily Tasks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
