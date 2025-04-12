
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Radio } from "@/components/ui/radio-group";
import { 
  ChevronRight, 
  ChevronLeft, 
  User, 
  Mail, 
  Smartphone, 
  MapPin, 
  Building, 
  GraduationCap, 
  Briefcase, 
  Users 
} from "lucide-react";
import { UserRole } from "@/types";

const RegisterForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "student" as UserRole,
    currentAddress: "",
    permanentAddress: "",
    otpVerified: false,
    otp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (role: UserRole) => {
    setFormData(prev => ({ ...prev, role }));
  };

  const handleSendOtp = () => {
    setIsSubmitting(true);
    // Simulate OTP sending
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const handleVerifyOtp = () => {
    setIsSubmitting(true);
    // Simulate OTP verification
    setTimeout(() => {
      setFormData(prev => ({ ...prev, otpVerified: true }));
      setIsSubmitting(false);
      setStep(2);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Final submission
    setTimeout(() => {
      navigate("/dashboard");
      setIsSubmitting(false);
    }, 1500);
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  return (
    <div>
      {/* Step indicators */}
      <div className="mb-6 flex justify-between">
        <div className={`h-1 w-1/3 ${step >= 1 ? "bg-indigo-600" : "bg-gray-200"} transition-colors`}></div>
        <div className={`h-1 w-1/3 ${step >= 2 ? "bg-indigo-600" : "bg-gray-200"} transition-colors`}></div>
        <div className={`h-1 w-1/3 ${step >= 3 ? "bg-indigo-600" : "bg-gray-200"} transition-colors`}></div>
      </div>

      {step === 1 && (
        <div>
          <h3 className="text-lg font-medium mb-4">Personal Information</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-10"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="pl-10"
                />
              </div>
            </div>

            {!formData.otpVerified ? (
              <div className="space-y-2">
                {formData.otp ? (
                  <>
                    <Input
                      id="otp"
                      name="otp"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={6}
                      placeholder="Enter 6-digit OTP"
                      value={formData.otp}
                      onChange={handleChange}
                      className="text-center tracking-widest"
                      required
                    />
                    <Button 
                      type="button" 
                      onClick={handleVerifyOtp}
                      disabled={isSubmitting || formData.otp.length < 4}
                      className="w-full bg-indigo-600 hover:bg-indigo-700"
                    >
                      {isSubmitting ? "Verifying..." : "Verify OTP"}
                    </Button>
                  </>
                ) : (
                  <Button 
                    type="button" 
                    onClick={handleSendOtp}
                    disabled={isSubmitting || !formData.phone || !formData.email}
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                  >
                    {isSubmitting ? "Sending..." : "Send OTP to Verify"}
                  </Button>
                )}
              </div>
            ) : (
              <Button 
                type="button" 
                onClick={nextStep}
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-lg font-medium mb-4">Select Your Role</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div
              onClick={() => handleRoleChange("student")}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                formData.role === "student"
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 hover:border-indigo-300"
              }`}
            >
              <GraduationCap className={`h-6 w-6 mx-auto mb-2 ${formData.role === "student" ? "text-indigo-600" : "text-gray-400"}`} />
              <p className="text-center text-sm font-medium">Student</p>
            </div>
            
            <div
              onClick={() => handleRoleChange("teacher")}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                formData.role === "teacher"
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 hover:border-indigo-300"
              }`}
            >
              <Users className={`h-6 w-6 mx-auto mb-2 ${formData.role === "teacher" ? "text-indigo-600" : "text-gray-400"}`} />
              <p className="text-center text-sm font-medium">Teacher</p>
            </div>
            
            <div
              onClick={() => handleRoleChange("professional")}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                formData.role === "professional"
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 hover:border-indigo-300"
              }`}
            >
              <Briefcase className={`h-6 w-6 mx-auto mb-2 ${formData.role === "professional" ? "text-indigo-600" : "text-gray-400"}`} />
              <p className="text-center text-sm font-medium">Professional</p>
            </div>
            
            <div
              onClick={() => handleRoleChange("other")}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                formData.role === "other"
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 hover:border-indigo-300"
              }`}
            >
              <User className={`h-6 w-6 mx-auto mb-2 ${formData.role === "other" ? "text-indigo-600" : "text-gray-400"}`} />
              <p className="text-center text-sm font-medium">Other</p>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button 
              type="button" 
              variant="outline"
              onClick={prevStep}
              className="w-1/3"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button 
              type="button" 
              onClick={nextStep}
              className="w-2/3 bg-indigo-600 hover:bg-indigo-700"
            >
              Continue <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-4">Address Information</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="currentAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Current Address
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <textarea
                  id="currentAddress"
                  name="currentAddress"
                  placeholder="Your current address"
                  value={formData.currentAddress}
                  onChange={(e) => setFormData(prev => ({ ...prev, currentAddress: e.target.value }))}
                  required
                  rows={2}
                  className="w-full rounded-md border border-input px-10 py-2 text-sm"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="permanentAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Permanent Address
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <textarea
                  id="permanentAddress"
                  name="permanentAddress"
                  placeholder="Your permanent address"
                  value={formData.permanentAddress}
                  onChange={(e) => setFormData(prev => ({ ...prev, permanentAddress: e.target.value }))}
                  required
                  rows={2}
                  className="w-full rounded-md border border-input px-10 py-2 text-sm"
                />
              </div>
            </div>

            <div className="pt-2">
              <Button 
                type="button" 
                variant="outline"
                onClick={prevStep}
                className="w-1/3 mr-2"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting || !formData.currentAddress || !formData.permanentAddress}
                className="w-2/3 bg-indigo-600 hover:bg-indigo-700"
              >
                {isSubmitting ? "Completing Registration..." : "Complete Registration"}
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
