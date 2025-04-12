
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Smartphone } from "lucide-react";

const LoginForm: React.FC = () => {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate OTP sending
    setTimeout(() => {
      setOtpSent(true);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate login
    setTimeout(() => {
      navigate("/dashboard");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      <div className="mb-4 flex rounded-md overflow-hidden border">
        <button
          type="button"
          onClick={() => setLoginMethod("email")}
          className={`w-1/2 py-2 px-4 flex items-center justify-center ${
            loginMethod === "email" 
              ? "bg-indigo-600 text-white" 
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <Mail className="mr-2 h-4 w-4" />
          Email
        </button>
        <button
          type="button"
          onClick={() => setLoginMethod("phone")}
          className={`w-1/2 py-2 px-4 flex items-center justify-center ${
            loginMethod === "phone" 
              ? "bg-indigo-600 text-white" 
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <Smartphone className="mr-2 h-4 w-4" />
          Phone
        </button>
      </div>

      {!otpSent ? (
        <form onSubmit={handleSendOtp}>
          <div className="mb-4">
            <label htmlFor="identifier" className="block text-sm font-medium text-gray-700 mb-1">
              {loginMethod === "email" ? "Email Address" : "Phone Number"}
            </label>
            <Input
              id="identifier"
              type={loginMethod === "email" ? "email" : "tel"}
              placeholder={loginMethod === "email" ? "you@example.com" : "+91 1234567890"}
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div>
            <Button 
              type="submit" 
              className="w-full bg-indigo-600 hover:bg-indigo-700" 
              disabled={isSubmitting || !identifier}
            >
              {isSubmitting ? "Sending..." : "Send OTP"}
            </Button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="mb-2">
            <p className="text-sm text-gray-600">
              OTP sent to {loginMethod === "email" ? identifier : `+91 ${identifier}`}
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
              Enter OTP
            </label>
            <Input
              id="otp"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              placeholder="123456"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full text-center text-lg tracking-widest"
            />
          </div>
          <div>
            <Button 
              type="submit" 
              className="w-full bg-indigo-600 hover:bg-indigo-700" 
              disabled={isSubmitting || otp.length < 4}
            >
              {isSubmitting ? "Verifying..." : "Verify & Log In"}
            </Button>
          </div>
          <div className="mt-2 text-center">
            <button 
              type="button" 
              onClick={() => setOtpSent(false)}
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Change {loginMethod === "email" ? "Email" : "Phone Number"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
