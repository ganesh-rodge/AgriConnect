// import React from 'react';
import { Navbar } from './Navbar';
import { Tractor, Leaf, CloudSun } from 'lucide-react';

interface Equipment {
  name: string;
  status: 'Operational' | 'Needs Repair';
}

interface MarketPrice {
  crop: string;
  price: string;
}

interface FarmingDetails {
  label: string;
  value: string;
}

interface VegetableYield {
  name: string;
  amount: string;
}

interface soilQuality {
  label: string;
  value: string;
}

export function AgricultureManagement() {
  const farmStats = {
    totalFarms: 10,
    totalArea: 150,
    healthyCrops: 80,
    diseasedCrops: 15,
  };

  const harvestSchedule = [
    { crop: 'Wheat', date: 'June 10' },
    { crop: 'Corn', date: 'July 15' },
    { crop: 'Rice', date: 'August 20' },
  ];

  const equipment: Equipment[] = [
    { name: 'Tractor', status: 'Operational' },
    { name: 'Plow', status: 'Needs Repair' },
    { name: 'Harvester', status: 'Operational' },
  ];

  const marketPrices: MarketPrice[] = [
    { crop: 'Wheat', price: '$5.00/bushel' },
    { crop: 'Corn', price: '$4.50/bushel' },
    { crop: 'Rice', price: '$6.00/bushel' },
  ];

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

  const soilQuality: soilQuality[] =[
    {label: 'pH Level', value: '6.5 (optimal)'},
    {label: 'Zinc Level', value: '2ppm'},
    {label: 'Nitrogen', value: 'Medium'},
    {label: 'Moisture Content', value: 'Adequate'}
  ]

  const handleLogout = () => {
    console.log('Logging out...');
    // Handle logout logic here
  };

  const cardClasses = "bg-white rounded-xl shadow-md p-4 lg:p-6 flex flex-col min-h-[200px]";
  const headerClasses = "text-lg lg:text-xl font-semibold text-gray-800 mb-4";
  const contentClasses = "flex-1 flex flex-col justify-between";

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Navbar onLogout={handleLogout} />
      
      <div className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-0">Agriculture Management Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
            {/* Farm Overview Card */}
            <div className={cardClasses}>
              <div className="flex justify-between items-center mb-4">
                <h2 className={headerClasses}>Farm Overview</h2>
                <Tractor className="h-5 w-5 lg:h-6 lg:w-6 text-green-600" />
              </div>
              <div className={contentClasses}>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm lg:text-base text-gray-600">Total Farms:</span>
                    <span className="font-semibold">{farmStats.totalFarms}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm lg:text-base text-gray-600">Total Area:</span>
                    <span className="font-semibold">{farmStats.totalArea} acres</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Harvest Schedule Card */}
            <div className={cardClasses}>
              <h2 className={headerClasses}>Harvest Schedule</h2>
              <div className={contentClasses}>
                <div className="space-y-2">
                  {harvestSchedule.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm lg:text-base text-gray-600">{item.crop}</span>
                      <span className="font-semibold">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Weather Forecast Card */}
            <div className={cardClasses}>
              <div className="flex justify-between items-center mb-4">
                <h2 className={headerClasses}>Weather Forecast</h2>
                <CloudSun className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-500" />
              </div>
              <div className={contentClasses}>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm lg:text-base text-gray-600">Temperature:</span>
                    <span className="font-semibold">75°F</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm lg:text-base text-gray-600">Rainfall:</span>
                    <span className="font-semibold">20%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={cardClasses}>
              <h2 className={headerClasses}>Farming Details</h2>
              <div className={contentClasses}>
                <div className="space-y-2">
                  {farmingDetails.map((detail, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm lg:text-base text-gray-600">{detail.label}:</span>
                      <span className="font-semibold">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={cardClasses}>
              <div className="flex justify-between items-center mb-4">
                <h2 className={headerClasses}>Crop Health</h2>
                <Leaf className="h-5 w-5 lg:h-6 lg:w-6 text-green-600" />
              </div>
              <div className={contentClasses}>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm lg:text-base text-gray-600">Healthy Crops:</span>
                    <span className="font-semibold text-green-600">{farmStats.healthyCrops}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${farmStats.healthyCrops}%` }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm lg:text-base text-gray-600">Diseased Crops:</span>
                    <span className="font-semibold text-red-600">{farmStats.diseasedCrops}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-red-600 h-2.5 rounded-full" style={{ width: `${farmStats.diseasedCrops}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={cardClasses}>
              <h2 className={headerClasses}>Equipment Status</h2>
              <div className={contentClasses}>
                <div className="space-y-2">
                  {equipment.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm lg:text-base text-gray-600">{item.name}</span>
                      <span className={`font-semibold ${
                        item.status === 'Operational' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={cardClasses}>
              <h2 className={headerClasses}>Market Prices</h2>
              <div className={contentClasses}>
                <div className="space-y-2">
                  {marketPrices.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm lg:text-base text-gray-600">{item.crop}</span>
                      <span className="font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={cardClasses}>
              <h2 className={headerClasses}>Vegetables Section</h2>
              <div className={contentClasses}>
                <div className="space-y-2">
                  {vegetableYields.map((vegetable, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm lg:text-base text-gray-600">{vegetable.name}:</span>
                      <span className="font-semibold">{vegetable.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={cardClasses}>
              <h2 className={headerClasses}>Soil Quality Analysis</h2>
              <div className={contentClasses}>
                <div className="space-y-2">
                  {soilQuality.map((vegetable, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm lg:text-base text-gray-600">{vegetable.label}:</span>
                      <span className="font-semibold">{vegetable.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}