import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { 
  Calendar, 
  AlertCircle, 
  Download, 
  ExternalLink, 
  Search,
  Filter,
  X 
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Scheme {
  id: string;
  title: string;
  description: string;
  eligibility: string[];
  benefits: string[];
  lastDate: string;
  status: 'Active' | 'Coming Soon' | 'Expired';
  documentationUrl: string;
}

export function GovernmentSchemes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'Active' | 'Coming Soon' | 'Expired'>('all');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [expandedScheme, setExpandedScheme] = useState<string | null>(null);

  const schemes: Scheme[] = [
    {
      id: '1',
      title: 'PM-KISAN',
      description: 'Direct income support of ₹6000 per year to farmer families',
      eligibility: [
        'Small and marginal farmers',
        'Family should own cultivable land',
        'Must have valid KYC details'
      ],
      benefits: [
        '₹6000 per year in three installments',
        'Direct bank transfer',
        'No intermediaries involved'
      ],
      lastDate: '2024-12-31',
      status: 'Active',
      documentationUrl: 'https://pmkisan.gov.in'
    },
    // ... (rest of the schemes data remains the same)
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || scheme.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: Scheme['status']) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Coming Soon':
        return 'bg-blue-100 text-blue-800';
      case 'Expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleSchemeExpansion = (schemeId: string) => {
    setExpandedScheme(expandedScheme === schemeId ? null : schemeId);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header Section */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Government Schemes for Farmers</h1>
            <p className="text-sm sm:text-base text-gray-600">Explore various government initiatives and programs designed to support farmers.</p>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search schemes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            {/* Mobile Filter Button */}
            <button
              className="sm:hidden flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg"
              onClick={() => setIsFilterMenuOpen(true)}
            >
              <Filter className="h-5 w-5 mr-2" />
              Filter
            </button>

            {/* Desktop Filter Select */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="hidden sm:block px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="all">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Coming Soon">Coming Soon</option>
              <option value="Expired">Expired</option>
            </select>
          </div>

          {/* Mobile Filter Menu */}
          {isFilterMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 sm:hidden">
              <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Filter Schemes</h3>
                  <button onClick={() => setIsFilterMenuOpen(false)}>
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      value={statusFilter}
                      onChange={(e) => {
                        setStatusFilter(e.target.value as any);
                        setIsFilterMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300"
                    >
                      <option value="all">All Statuses</option>
                      <option value="Active">Active</option>
                      <option value="Coming Soon">Coming Soon</option>
                      <option value="Expired">Expired</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Schemes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredSchemes.map((scheme) => (
              <Card key={scheme.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">{scheme.title}</CardTitle>
                    <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusColor(scheme.status)}`}>
                      {scheme.status}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{scheme.description}</p>

                  <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    Last Date: {new Date(scheme.lastDate).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>

                  {/* Mobile: Expandable Content */}
                  <div className="md:hidden">
                    <button
                      onClick={() => toggleSchemeExpansion(scheme.id)}
                      className="text-blue-600 text-sm font-medium mb-4"
                    >
                      {expandedScheme === scheme.id ? 'Show Less' : 'Show More'}
                    </button>
                    
                    {expandedScheme === scheme.id && (
                      <div className="space-y-4">
                        <SchemeDetails scheme={scheme} />
                      </div>
                    )}
                  </div>

                  {/* Desktop: Always Visible Content */}
                  <div className="hidden md:block space-y-4">
                    <SchemeDetails scheme={scheme} />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mt-6">
                    <a
                      href={scheme.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Learn More
                    </a>
                    <button className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                      <Download className="h-4 w-4 mr-2" />
                      Apply Now
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSchemes.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <AlertCircle className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">No schemes found</h3>
              <p className="text-sm text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// Extracted SchemeDetails component for better organization
const SchemeDetails = ({ scheme }: { scheme: Scheme }) => (
  <>
    <div>
      <h3 className="font-medium text-gray-800 mb-2">Eligibility:</h3>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
        {scheme.eligibility.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="font-medium text-gray-800 mb-2">Benefits:</h3>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
        {scheme.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  </>
);

export default GovernmentSchemes;