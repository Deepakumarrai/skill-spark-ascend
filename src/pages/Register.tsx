
import React from "react";
import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

const Register: React.FC = () => {
  return (
    <AuthLayout 
      title="Create your account"
      subtitle="Join our platform to enhance your soft skills"
      authType="register"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
