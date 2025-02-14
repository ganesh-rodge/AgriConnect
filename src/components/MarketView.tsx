import { useState, useMemo } from 'react';
import { Navbar } from './Navbar';
// import { Filter } from 'lucide-react';

interface MarketData {
  id: string;
  category: string;
  crop: string;
  market: string;
  state: string;
  price: number;
  lastUpdated: string;
}

interface CategoryData {
  name: string;
  crops: string[];
}

export function MarketView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedCrop, setSelectedCrop] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');

  const categories: CategoryData[] = [
    {
      name: 'Cereals and millets',
      crops: ['Wheat', 'Maize', 'Paddy', 'Pearl Millet', 'Barley', 'Oats', 'Ragi', 'Sorghum']
    },
    {
      name: 'Vegetables',
      crops: ['Tomato', 'Potato', 'Onion', 'Cabbage', 'Cauliflower', 'Carrot', 'Spinach', 'Peas', 'Brinjal', 'Capsicum']
    },
    {
      name: 'Fibres',
      crops: ['Cotton', 'Jute', 'Hemp', 'Silk Cotton']
    },
    {
      name: 'Oil crops',
      crops: ['Groundnut', 'Mustard', 'Sunflower', 'Soybean', 'Sesame', 'Castor']
    },
    {
      name: 'Pulses',
      crops: ['Chickpea', 'Pigeon Pea', 'Green Gram', 'Black Gram', 'Lentil']
    },
    {
      name: 'Spices',
      crops: ['Turmeric', 'Chilli', 'Cardamom', 'Pepper', 'Coriander', 'Cumin']
    },
    {
      name: 'Fruits',
      crops: ['Mango', 'Banana', 'Apple', 'Orange', 'Grapes', 'Pomegranate']
    },
    {
      name: 'Plantation',
      crops: ['Coffee', 'Tea', 'Rubber', 'Coconut']
    },
    {
      name: 'DryFruits',
      crops: ['Almonds', 'Cashew', 'Walnut', 'Pistachio']
    }
  ];

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const marketData: MarketData[] = [
    { id: '1', category: 'Cereals and millets', crop: 'Wheat', market: 'Delhi', state: 'Delhi', price: 2800, lastUpdated: '2024-02-15' },
    { id: '2', category: 'Cereals and millets', crop: 'Maize', market: 'Indore', state: 'Madhya Pradesh', price: 2200, lastUpdated: '2024-02-14' },
    { id: '3', category: 'Vegetables', crop: 'Tomato', market: 'Latur', state: 'Maharashtra', price: 3500, lastUpdated: '2024-02-16' },
    { id: '4', category: 'Vegetables', crop: 'Potato', market: 'Agra', state: 'Uttar Pradesh', price: 1800, lastUpdated: '2024-02-13' },
    { id: '5', category: 'Fibres', crop: 'Cotton', market: 'Nagpur', state: 'Maharashtra', price: 6500, lastUpdated: '2024-02-15' },
    { id: '6', category: 'Fibres', crop: 'Jute', market: 'Kolkata', state: 'West Bengal', price: 4200, lastUpdated: '2024-02-14' },
    { id: '7', category: 'Oil crops', crop: 'Groundnut', market: 'Rajkot', state: 'Gujarat', price: 7200, lastUpdated: '2024-02-12' },
    { id: '8', category: 'Oil crops', crop: 'Soybean', market: 'Indore', state: 'Madhya Pradesh', price: 5000, lastUpdated: '2024-02-16' },
    { id: '9', category: 'Pulses', crop: 'Chickpea', market: 'Bikaner', state: 'Rajasthan', price: 5400, lastUpdated: '2024-02-14' },
    { id: '10', category: 'Pulses', crop: 'Green Gram', market: 'Hyderabad', state: 'Telangana', price: 6200, lastUpdated: '2024-02-13' },
    { id: '11', category: 'Spices', crop: 'Turmeric', market: 'Erode', state: 'Tamil Nadu', price: 9600, lastUpdated: '2024-02-15' },
    { id: '12', category: 'Spices', crop: 'Chilli', market: 'Guntur', state: 'Andhra Pradesh', price: 12000, lastUpdated: '2024-02-14' },
    { id: '13', category: 'Fruits', crop: 'Mango', market: 'Ratnagiri', state: 'Maharashtra', price: 8500, lastUpdated: '2024-02-16' },
    { id: '14', category: 'Fruits', crop: 'Apple', market: 'Shimla', state: 'Himachal Pradesh', price: 9000, lastUpdated: '2024-02-15' },
    { id: '15', category: 'Plantation', crop: 'Coffee', market: 'Chikmagalur', state: 'Karnataka', price: 11000, lastUpdated: '2024-02-12' },
    { id: '16', category: 'Plantation', crop: 'Tea', market: 'Darjeeling', state: 'West Bengal', price: 9500, lastUpdated: '2024-02-14' },
    { id: '17', category: 'DryFruits', crop: 'Almonds', market: 'Srinagar', state: 'Jammu and Kashmir', price: 15000, lastUpdated: '2024-02-16' },
    { id: '18', category: 'DryFruits', crop: 'Cashew', market: 'Goa', state: 'Goa', price: 14000, lastUpdated: '2024-02-15' }
  ];

  const availableCrops = useMemo(() => {
    if (!selectedCategory) {
      return categories.flatMap(cat => cat.crops);
    }
    return categories.find(cat => cat.name === selectedCategory)?.crops || [];
  }, [selectedCategory]);

  const filteredMarketData = useMemo(() => {
    return marketData.filter(item => {
      const matchesCategory = !selectedCategory || item.category === selectedCategory;
      const matchesCrop = !selectedCrop || item.crop === selectedCrop;
      const matchesState = !selectedState || item.state === selectedState;
      return matchesCategory && matchesCrop && matchesState;
    });
  }, [selectedCategory, selectedCrop, selectedState]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-2 md:mb-4">Market View Dashboard</h1>
            <p className="text-sm md:text-base text-gray-600">Track current market prices and trends across India</p>
          </div>

          {/* Filters Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Category Filter */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedCrop('');
                }}
                className="w-full px-3 py-2 md:px-4 md:py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Crop Filter */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Crop
              </label>
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="w-full px-3 py-2 md:px-4 md:py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">All Crops</option>
                {availableCrops.map((crop) => (
                  <option key={crop} value={crop}>
                    {crop}
                  </option>
                ))}
              </select>
            </div>

            {/* State Filter */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-3 py-2 md:px-4 md:py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">All States</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Market Data Table */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Crop</th>
                    <th className="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Market</th>
                    <th className="px-3 md:px-6 py-3 text-right text-xs md:text-sm font-medium text-gray-500">Price (₹/quintal)</th>
                    <th className="px-3 md:px-6 py-3 text-right text-xs md:text-sm font-medium text-gray-500">Last Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredMarketData.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-900">{item.crop}</td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-900">{item.market}</td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-900 text-right">₹{item.price.toLocaleString()}</td>
                      <td className="px-3 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-500 text-right">
                        {new Date(item.lastUpdated).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredMarketData.length === 0 && (
              <div className="text-center py-8 md:py-12">
                {/* <Filter className="mx-auto h-8 w-8 md:h-12 md:w-12 text-gray-400" /> */}
                <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
                <p className="mt-1 text-xs md:text-sm text-gray-500">
                  Try adjusting your search filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}