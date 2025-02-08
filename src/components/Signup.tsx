import React, { useState } from 'react';
import { Sprout, User, Mail, Lock } from 'lucide-react';
import LoginCrop from '../assets/LoginCrop.jpeg'

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOTP = () => {
    // Handle OTP sending logic here
    console.log('Sending OTP to:', email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, otp });
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-xl flex">
        {/* Left side - Image */}
        <div className="hidden md:block w-1/2">
          <img
            src={LoginCrop}
            alt="Growing crops in field"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Sign Up Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <Sprout className="h-8 w-8 text-green-700" />
              <span className="text-2xl font-bold text-green-700">CropNest</span>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign Up</h2>
            <p className="text-gray-600">Create your account to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full pl-10 pr-24 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <button
                type="button"
                onClick={handleSendOTP}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
              >
                Send OTP
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="OTP"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={handleSendOTP}
                className="text-blue-500 hover:text-blue-600 text-sm font-medium"
              >
                Didn't get an OTP? Resend OTP
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-colors font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}