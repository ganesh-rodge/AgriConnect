import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendOtp, loginUser } from '../api';
import { Sprout, User, Lock } from 'lucide-react';
import LoginCrop from '../assets/LoginCrop.jpeg';

export default function Login() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [role, setRole] = useState("");

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    setError('');
    try {
      await sendOtp(mobileNumber);
      setMessage('OTP sent successfully !');
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
  
      // Redirect to Signup if user does not exist
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
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-xl flex">
        <div className="hidden md:block w-1/2">
          <img src={LoginCrop} alt="Growing crops in field" className="w-full h-full object-cover" />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="flex justify-center mb-8">
            <Sprout className="h-8 w-8 text-green-700" />
            <span className="text-2xl font-bold text-green-700">CropNest</span>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Sign In</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {message && <p className="text-green-500 text-center mb-4">{message}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute inset-y-0 left-3 top-3 text-gray-400 h-5 w-5" />
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Mobile Number"
                className="w-full pl-10 pr-24 py-3 border rounded-xl"
              />
              <button
                type="button"
                onClick={handleSendOTP}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1.5 rounded-lg"
              >
                Send OTP
              </button>
            </div>

            <div className="relative">
              <Lock className="absolute inset-y-0 left-3 top-3 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="OTP"
                className="w-full pl-10 py-3 border rounded-xl"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Select Role:</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full mt-1 py-3 border rounded-xl px-3"
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
              className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600"
            >
              {loading ? 'Logging in...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
