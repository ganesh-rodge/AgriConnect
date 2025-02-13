import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup'; // Create this component
import { SoilAnalysisForm } from './components/SoilAnalysisForm';
import { CropOverview } from './components/CropOverview';
import { AgricultureManagement } from './components/AgricultureManagement';
import { FarmDashboard } from './components/FarmDashboard';
import Profile from './components/Profile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/farmdashboard" element={<FarmDashboard />} />
        <Route path="/soilanalysisform" element={<SoilAnalysisForm />} />
        <Route path="/agriculturemanagement" element={<AgricultureManagement />} />
        <Route path="/cropoverview" element={<CropOverview />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
