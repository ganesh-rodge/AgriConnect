import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendOtp, loginUser } from '../api';
import { Sprout, User, Lock } from 'lucide-react';
import LoginCrop from '../assets/LoginCrop.jpeg';

export default function Login() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [otpDisabled, setOtpDisabled] = useState(false);
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    setError('');
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
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to send OTP.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!role) {
      setError('Please select a role.');
      setLoading(false);
      return;
    }

    try {
      const response = await loginUser(mobileNumber, otp, role);
      const { accessToken, refreshToken, user } = response.data.data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('role', role);

      alert('Login successful!');
      navigate('/dashboard');
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Login failed. Try again.';

      if (errorMessage.includes("User does not exist")) {
        alert("User does not exist. Redirecting to Signup...");
        navigate('/signup');
      } else {
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl flex flex-col md:flex-row">
        <div className="hidden md:block md:w-1/2">
          <img 
            src={LoginCrop} 
            alt="Growing crops in field" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12">
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <Sprout className="h-6 w-6 sm:h-8 sm:w-8 text-green-700" />
            <span className="text-xl sm:text-2xl font-bold text-green-700">CropNest</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-3 sm:mb-4">
            Sign In
          </h2>
          
          {error && <p className="text-red-500 text-sm sm:text-base text-center mb-3 sm:mb-4">{error}</p>}
          {message && <p className="text-green-500 text-sm sm:text-base text-center mb-3 sm:mb-4">{message}</p>}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <div className="relative">
                <User className="absolute inset-y-0 left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Mobile Number"
                  className="w-full pl-10 py-2.5 sm:py-3 border rounded-xl text-sm sm:text-base"
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
              <Lock className="absolute inset-y-0 left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="OTP"
                className="w-full pl-10 py-2.5 sm:py-3 border rounded-xl text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1.5">
                Select Role:
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full py-2.5 sm:py-3 border rounded-xl px-3 text-sm sm:text-base"
              >
                <option value="">Select a role</option>
                <option value="Vendor">Vendor</option>
                <option value="Customer">Customer</option>
                <option value="Admin">Admin</option>
                <option value="Agent">Agent</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-colors hover:bg-blue-600 disabled:bg-gray-400"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-sm sm:text-base text-gray-600 mt-4 sm:mt-6">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
