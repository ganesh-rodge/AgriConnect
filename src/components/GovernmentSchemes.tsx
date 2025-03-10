import React from 'react';
import { Navbar } from './Navbar';
import { Calendar, AlertCircle, Download, ExternalLink, Search } from 'lucide-react';

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
  const [searchQuery, setSearchQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState<'all' | 'Active' | 'Coming Soon' | 'Expired'>('all');

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
    {
      id: '2',
      title: 'Pradhan Mantri Fasal Bima Yojana',
      description: 'Crop insurance scheme to protect against natural calamities',
      eligibility: [
        'All farmers growing notified crops',
        'Must have land records',
        'Both loanee and non-loanee farmers eligible'
      ],
      benefits: [
        'Insurance coverage for crop loss',
        'Minimal premium rates',
        'Quick claim settlement'
      ],
      lastDate: '2024-06-30',
      status: 'Active',
      documentationUrl: 'https://pmfby.gov.in'
    },
    {
      id: '3',
      title: 'Kisan Credit Card Scheme',
      description: 'Provides farmers with timely access to credit',
      eligibility: [
        'All farmers - individual/joint cultivators',
        'Tenant farmers',
        'Oral lessees & sharecroppers'
      ],
      benefits: [
        'Flexible credit limits',
        'Lower interest rates',
        'Insurance coverage included'
      ],
      lastDate: '2024-09-15',
      status: 'Active',
      documentationUrl: 'https://www.nabard.org'
    },
    {
      id: '4',
      title: 'National Agriculture Market (eNAM)',
      description: 'Online trading platform for agricultural commodities',
      eligibility: [
        'All farmers can register',
        'Must have basic digital literacy',
        'Valid bank account required'
      ],
      benefits: [
        'Better price discovery',
        'Direct market access',
        'Reduced intermediaries'
      ],
      lastDate: '2024-03-31',
      status: 'Coming Soon',
      documentationUrl: 'https://enam.gov.in'
    },
    {
      id: '5',
      title: 'Soil Health Card Scheme',
      description: 'Provides information on soil health and fertilizer recommendations',
      eligibility: [
        'All farmers eligible',
        'Must own or cultivate land',
        'Registration with local agriculture office'
      ],
      benefits: [
        'Free soil testing',
        'Customized fertilizer recommendations',
        'Increased crop productivity'
      ],
      lastDate: '2023-12-31',
      status: 'Expired',
      documentationUrl: 'https://soilhealth.dac.gov.in'
    },
    {
      id: '6',
      title: 'Rashtriya Krishi Vikas Yojana',
      description: 'Aims to promote holistic development in agriculture and allied sectors by providing financial assistance to states',
      eligibility: [
        'All farmers and agricultural entrepreneurs',
        'State governments submit project proposals',
        'Beneficiaries as per state guidelines'
      ],
      benefits: [
        'Financial assistance for agriculture projects',
        'Support for infrastructure development',
        'Encouragement for innovation and technology adoption'
      ],
      lastDate: '2025-03-31',
      status: 'Active',
      documentationUrl: 'https://rkvy.nic.in'
    },
    {
      id: '7',
      title: 'National Agricultural Insurance Scheme (NAIS)',
      description: 'Provided insurance coverage and financial support to farmers in case of crop failure due to natural calamities, pests, and diseases.',
      eligibility: [
        'All farmers growing notified crops',
        'Both loanee and non-loanee farmers were eligible',
        'Enrollment through designated banks or insurance companies'
      ],
      benefits: [
        'Coverage against natural calamities',
        'Financial assistance for crop loss',
        'Low premium rates for different crops'
      ],
      lastDate: '2016-03-31',
      status: 'Expired',
      documentationUrl: 'https://agricoop.nic.in'
    },
    {
      id: '8',
      title: 'Six-Year Programme to Boost Pulses Production',
      description: 'A government initiative to increase pulses production and reduce import dependency by ensuring procurement at guaranteed prices.',
      eligibility: [
        'Registered farmers producing pulses',
        'State agencies participating in procurement',
        'Compliance with agricultural guidelines'
      ],
      benefits: [
        'Guaranteed procurement prices for pulses',
        'Financial and infrastructural support',
        'Reduced dependency on imports'
      ],
      lastDate: 'TBA',
      status: 'Coming Soon',
      documentationUrl: 'https://www.reuters.com/world/india/india-budget-india-unveils-long-term-programmes-boost-pulses-cotton-output-2025-02-01'
    }
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

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      

        <Navbar />

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8 mt-16 lg:mt-0">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 lg:mb-8">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-700 mb-2 lg:mb-4">
              Government Schemes for Farmers
            </h1>
            <p className="text-sm lg:text-base text-gray-600">
              Explore various government initiatives and programs designed to support farmers.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-6 lg:mb-8 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search schemes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm lg:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-4 py-2 text-sm lg:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="all">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Coming Soon">Coming Soon</option>
              <option value="Expired">Expired</option>
            </select>
          </div>

          {/* Schemes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
            {filteredSchemes.map((scheme) => (
              <div key={scheme.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-4 lg:p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3 lg:mb-4">
                      <h2 className="text-lg lg:text-xl font-semibold text-gray-800">{scheme.title}</h2>
                      <span className={`px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium ${getStatusColor(scheme.status)}`}>
                        {scheme.status}
                      </span>
                    </div>
                    
                    <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">{scheme.description}</p>

                    <div className="flex items-center text-xs lg:text-sm text-gray-500 mb-3 lg:mb-4">
                      <Calendar className="h-3 w-3 lg:h-4 lg:w-4 mr-2" />
                      Last Date: {scheme.lastDate}
                    </div>

                    <div className="space-y-3 lg:space-y-4">
                      <div>
                        <h3 className="text-sm lg:text-base font-medium text-gray-800 mb-1 lg:mb-2">Eligibility:</h3>
                        <ul className="list-disc list-inside text-xs lg:text-sm text-gray-600 space-y-1">
                          {scheme.eligibility.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-sm lg:text-base font-medium text-gray-800 mb-1 lg:mb-2">Benefits:</h3>
                        <ul className="list-disc list-inside text-xs lg:text-sm text-gray-600 space-y-1">
                          {scheme.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4 lg:mt-6">
                    <a
                      href={scheme.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700 text-xs lg:text-sm font-medium"
                    >
                      <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                      Learn More
                    </a>
                    <button className="flex items-center px-3 lg:px-4 py-1.5 lg:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-xs lg:text-sm font-medium">
                      <Download className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSchemes.length === 0 && (
            <div className="flex flex-col items-center justify-center py-8 lg:py-12">
              <AlertCircle className="h-8 w-8 lg:h-12 lg:w-12 text-gray-400 mb-3 lg:mb-4" />
              <h3 className="text-base lg:text-lg font-medium text-gray-900">No schemes found</h3>
              <p className="text-sm lg:text-base text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}