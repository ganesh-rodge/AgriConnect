import { useState, useMemo } from 'react';
import { Navbar } from './Navbar';
import { Filter } from 'lucide-react';

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

  // ... (keeping all the existing data structures - categories, indianStates, marketData)
  const categories: CategoryData[] = [
    {
      name: 'Cereals and millets',
      crops: ['Wheat', 'Maize', 'Paddy', 'Pearl Millet', 'Barley', 'Oats', 'Ragi', 'Sorghum']
    },
    // ... (rest of the categories)
  ];

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    // ... (rest of the states)
  ];

  const marketData: MarketData[] = [
    // ... (all market data entries)
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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">Market View Dashboard</h1>
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
                    <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Crop</th>
                    <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500">Market</th>
                    <th className="px-4 md:px-6 py-3 text-right text-xs md:text-sm font-medium text-gray-500">Price (₹/quintal)</th>
                    <th className="px-4 md:px-6 py-3 text-right text-xs md:text-sm font-medium text-gray-500">Last Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredMarketData.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-900">{item.crop}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-900">{item.market}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-900 text-right">₹{item.price.toLocaleString()}</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-500 text-right">
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
                <Filter className="mx-auto h-8 w-8 md:h-12 md:w-12 text-gray-400" />
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
}git 