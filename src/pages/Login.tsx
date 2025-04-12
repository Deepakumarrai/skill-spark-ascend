
import React from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

const Login: React.FC = () => {
  return (
    <AuthLayout 
      title="Sign in to your account"
      subtitle="Enter your email or phone to continue"
      authType="login"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
