// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup'; // Create this component
import { SoilAnalysisForm } from './components/SoilAnalysisForm';
import { CropOverview } from './components/CropOverview';
import { AgricultureManagement } from './components/AgricultureManagement';
import {Profile} from './components/Profile';
import { GovernmentSchemes } from './components/GovernmentSchemes';
import { MarketView } from './components/MarketView';
import { Bulletin } from './components/Bulletin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/soilanalysisform" element={<SoilAnalysisForm />} />
        <Route path="/agriculturemanagement" element={<AgricultureManagement />} />
        <Route path="/cropoverview" element={<CropOverview />} />
        <Route path="/profile" element={<Profile />} /> 
         <Route path="/bulletin" element={<Bulletin />} />

        {/* to be imported */}
        
        <Route path="/marketview" element={<MarketView />} />
        <Route path="/schemes" element={<GovernmentSchemes />} />
      </Routes>
    </Router>
  );
}
