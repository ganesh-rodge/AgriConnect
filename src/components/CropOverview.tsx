// import React from 'react';
import { Navbar } from './Navbar';
import { Plus } from 'lucide-react';

interface CropUpdate {
  crop: string;
  status: string;
  date: string;
}

export function CropOverview() {
  const cropUpdates: CropUpdate[] = [
    { crop: 'Corn', status: 'Healthy', date: '2023-10-01' },
    { crop: 'Wheat', status: 'Needs Attention', date: '2023-09-28' },
    { crop: 'Soybeans', status: 'Healthy', date: '2023-09-25' },
    { crop: 'Rice', status: 'Under Observation', date: '2023-09-20' },
    { crop: 'Barley', status: 'Healthy', date: '2023-09-15' },
  ];

  const handleLogout = () => {
    console.log('Logging out...');
    // Handle logout logic here
  };

  const handleAddCrop = () => {
    console.log('Adding new crop...');
    // Handle add crop logic here
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-8">Crop Overview</h1>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-8">
            {/* Crop Yield Card */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Crop Yield</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600">Total Yield:</span>
                  <span className="text-sm sm:text-base font-semibold">1500 tons</span>
                </div>
              </div>
            </div>

            {/* Water Usage Card */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Water Usage</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600">Total Water Used:</span>
                  <span className="text-sm sm:text-base font-semibold">20000 liters</span>
                </div>
              </div>
            </div>

            {/* Pest Control Card */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Pest Control</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600">Pest Incidents:</span>
                  <span className="text-sm sm:text-base font-semibold">5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Crop Updates Table */}
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-0">Recent Crop Updates</h2>
              <button
                onClick={handleAddCrop}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Crop
              </button>
            </div>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-sm sm:text-base text-gray-600">Crop</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-sm sm:text-base text-gray-600 text-center">Status</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-sm sm:text-base text-gray-600">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {cropUpdates.map((update, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">{update.crop}</td>
                      <td className="px-3 sm:px-4 py-2 sm:py-3 text-center">
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs sm:text-sm ${
                            update.status === 'Healthy'
                              ? 'bg-green-100 text-green-800'
                              : update.status === 'Needs Attention'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {update.status}
                        </span>
                      </td>
                      <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-600">{update.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}