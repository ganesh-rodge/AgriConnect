import React from 'react';
import { Navbar } from './Navbar';
import { Sun, Cloud, CloudRain } from 'lucide-react';

interface FarmingDetails {
  label: string;
  value: string;
}

interface VegetableYield {
  name: string;
  amount: string;
}

export function FarmDashboard() {
  const farmingDetails: FarmingDetails[] = [
    { label: 'Total Area', value: '50 acres' },
    { label: 'Crops Grown', value: 'Corn, Wheat, Soybeans' },
    { label: 'Harvest Season', value: 'June - September' },
    { label: 'Irrigation Type', value: 'Drip Irrigation' },
  ];

  const vegetableYields: VegetableYield[] = [
    { name: 'Tomatoes', amount: '200 kg' },
    { name: 'Carrots', amount: '150 kg' },
    { name: 'Lettuce', amount: '100 kg' },
    { name: 'Cucumbers', amount: '120 kg' },
  ];

  const weatherConditions = [
    { icon: <Sun className="h-5 w-5 text-yellow-500" />, condition: 'Sunny' },
    { icon: <Cloud className="h-5 w-5 text-gray-500" />, condition: 'Partly Cloudy' },
    { icon: <CloudRain className="h-5 w-5 text-blue-500" />, condition: 'Rainy' },
  ];

  const handleLogout = () => {
    console.log('Logging out...');
    // Handle logout logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navbar onLogout={handleLogout}/>
      
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Farm Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Farming Details Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Farming Details</h2>
              <div className="space-y-4">
                {farmingDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{detail.label}:</span>
                    <span className="font-semibold">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vegetables Section Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Vegetables Section</h2>
              <div className="space-y-4">
                {vegetableYields.map((vegetable, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{vegetable.name}:</span>
                    <span className="font-semibold">{vegetable.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weather Forecast Card */}
          <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Weather Forecast</h2>
            <div className="space-y-4">
              {weatherConditions.map((weather, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {weather.icon}
                  </div>
                  <span className="font-semibold">{weather.condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}