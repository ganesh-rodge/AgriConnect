import React, { useState } from 'react';
import { Sprout, User, Mail, Lock, Phone } from 'lucide-react';
import LoginCrop from '../assets/LoginCrop.jpeg';
import { registerUser, sendOtp } from '../api';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [otpDisabled, setOtpDisabled] = useState(false);
  const [timer, setTimer] = useState(30);

  // Send OTP
  const handleSendOTP = async () => {
    setMessage('');
    try {
      await sendOtp(mobileNumber);
      setMessage('OTP sent successfully!');
      setOtpDisabled(true);
      let countdown = 30;
      setTimer(countdown);

      const interval = setInterval(() => {
        countdown -= 1;
        setTimer(countdown);
        if (countdown === 0) {
          clearInterval(interval);
          setOtpDisabled(false);
        }
      }, 1000);
    } catch (error) {
      setMessage('Failed to send OTP. Try again.');
    }
  };

  // Register Agent
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await registerUser(name, mobileNumber, email, otp);
      if (response.status === 201) {
        setMessage('Registration successful!');
      } else {
        setMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      setMessage('Error registering. Please check your details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-xl flex">
        {/* Left side - Image */}
        <div className="hidden md:block w-1/2">
          <img src={LoginCrop} alt="Growing crops in field" className="w-full h-full object-cover" />
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

          {message && <p className="text-center text-red-500">{message}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute inset-y-0 left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border"
              />
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Phone className="absolute inset-y-0 left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Mobile No."
                  className="w-full pl-10 py-3 bg-gray-50 rounded-xl border"
                />
              </div>
              
              <div className="text-right">
                <button
                  type="button"
                  onClick={handleSendOTP}
                  disabled={otpDisabled}
                  className={`text-sm sm:text-base font-medium transition-colors py-1 px-2 rounded-lg ${
                    otpDisabled
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-blue-500 hover:text-blue-600'
                  }`}
                >
                  {otpDisabled ? `Resend OTP in ${timer}s` : 'Send OTP'}
                </button>
              </div>
            </div>

            <div className="relative">
              <Mail className="absolute inset-y-0 left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border"
              />
            </div>

            <div className="relative">
              <Lock className="absolute inset-y-0 left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="OTP"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl border"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-colors"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
