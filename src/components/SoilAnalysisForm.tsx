import React, { useState } from 'react';
import { Navbar } from './Navbar';

interface SoilAnalysisData {
  farmerName: string;
  farmLocation: string;
  soilType: string;
  sampleDate: string;
  phLevel: string;
  nutrientComposition: string;
  moistureContent: string;
  textureClassification: string;
}

export function SoilAnalysisForm() {
  const [formData, setFormData] = useState<SoilAnalysisData>({
    farmerName: '',
    farmLocation: '',
    soilType: '',
    sampleDate: '',
    phLevel: '',
    nutrientComposition: '',
    moistureContent: '',
    textureClassification: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // Handle logout logic here
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Navbar onLogout={handleLogout} />
      
      <div className="flex-1">
        <div className="p-4 sm:p-6 lg:p-10 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4 sm:mb-0">Soil Analysis Form</h1>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              Welcome to the Soil Analysis Dashboard
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Please fill out the soil analysis form to get insights into your soil quality.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="farmerName" className="block text-sm font-medium text-gray-700 mb-1">
                    Farmer Name
                  </label>
                  <input
                    type="text"
                    id="farmerName"
                    name="farmerName"
                    value={formData.farmerName}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="farmLocation" className="block text-sm font-medium text-gray-700 mb-1">
                    Farm Location City
                  </label>
                  <input
                    type="text"
                    id="farmLocation"
                    name="farmLocation"
                    value={formData.farmLocation}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                    placeholder="Enter your farm location"
                  />
                </div>

                <div>
                  <label htmlFor="soilType" className="block text-sm font-medium text-gray-700 mb-1">
                    Soil Type
                  </label>
                  <input
                    type="text"
                    id="soilType"
                    placeholder='ex: sandy soil, clayy soil, loamy soil'
                    name="soilType"
                    value={formData.soilType}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="sampleDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Sample Date
                  </label>
                  <input
                    type="date"
                    id="sampleDate"
                    name="sampleDate"
                    placeholder='dd-mm-yyyy'
                    value={formData.sampleDate}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="phLevel" className="block text-sm font-medium text-gray-700 mb-1">
                    Soil pH Level
                  </label>
                  <input
                    type="number"
                    id="phLevel"
                    name="phLevel"
                    placeholder='ex: 1.4'
                    value={formData.phLevel}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                    step="0.1"
                    min="0"
                    max="14"
                  />
                </div>

                <div>
                  <label htmlFor="nutrientComposition" className="block text-sm font-medium text-gray-700 mb-1">
                    Nutrient Composition
                  </label>
                  <input
                    type="text"
                    id="nutrientComposition"
                    name="nutrientComposition"
                    placeholder='ex: Zinc: 2ppm, Copper: 2ppm'
                    value={formData.nutrientComposition}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="moistureContent" className="block text-sm font-medium text-gray-700 mb-1">
                    Moisture Content
                  </label>
                  <input
                    type="number"
                    id="moistureContent"
                    name="moistureContent"
                    placeholder='ex: 10%, 20%'
                    value={formData.moistureContent}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="textureClassification" className="block text-sm font-medium text-gray-700 mb-1">
                    Sand
                  </label>
                  <input
                    type="text"
                    id="textureClassification"
                    name="textureClassification"
                    placeholder='ex: 15%'
                    value={formData.textureClassification}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="textureClassification" className="block text-sm font-medium text-gray-700 mb-1">
                    Loam
                  </label>
                  <input
                    type="text"
                    id="textureClassification"
                    name="textureClassification"
                    placeholder='ex: 20%'
                    value={formData.textureClassification}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="textureClassification" className="block text-sm font-medium text-gray-700 mb-1">
                    Clay
                  </label>
                  <input
                    type="text"
                    id="textureClassification"
                    name="textureClassification"
                    placeholder='ex: 25%'
                    value={formData.textureClassification}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="textureClassification" className="block text-sm font-medium text-gray-700 mb-1">
                    Silt
                  </label>
                  <input
                    type="text"
                    id="textureClassification"
                    name="textureClassification"
                    placeholder='ex: 10%'
                    value={formData.textureClassification}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="textureClassification" className="block text-sm font-medium text-gray-700 mb-1">
                    Sandy Clay
                  </label>
                  <input
                    type="text"
                    id="textureClassification"
                    name="textureClassification"
                    placeholder='ex: 12%'
                    value={formData.textureClassification}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="flex justify-start mt-6 sm:mt-8">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 text-sm sm:text-base"
                >
                  Submit Analysis
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}