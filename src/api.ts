import axios from 'axios';

const API_BASE_URL = 'http://89.116.34.84:8081';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Send OTP request
export const sendOtp = async (phone: string) => {
  return await api.post('/auth/send-otp', { phone });
};

// Login request
export const loginUser = async (phone: string, otp: string, role: string) => {
  return await api.post('/auth/login-agent', { phone, otp, role });
};


export const registerUser = async (name: String, phone: string, email: string, otp:string) =>{
    return await api.post('/auth/register-agent', {name, phone, email, otp});
}

export const logout = async (message: string) => {
  return await api.post('auth/logout', {message})
}