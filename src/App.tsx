import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup'; // Create this component
// import Dashboard from './components/Dashboard'; // Example dashboard

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}
