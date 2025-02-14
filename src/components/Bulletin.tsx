import { Navbar } from './Navbar';
import { Clock, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  timeAgo: string;
  category: string;
}

export function Bulletin() {
    const newsItems: NewsItem[] = [
      {
        id: '1',
        title: 'Innovative Farming Techniques',
        description: 'New methods are being developed to enhance crop yields.',
        timeAgo: '2 hours ago',
        category: 'Technology'
      },
      {
        id: '2',
        title: 'Sustainable Practices for Farmers',
        description: 'How farmers can adopt sustainable practices to benefit the environment.',
        timeAgo: '10 days ago',
        category: 'Sustainability'
      },
      {
        id: '3',
        title: 'Government Policies Affecting Agriculture',
        description: 'A look at recent policies and their impact on the farming sector.',
        timeAgo: '1 week ago',
        category: 'Policy'
      },
      {
        id: '4',
        title: 'Technological Advancements in Farming',
        description: 'Exploring the latest technology trends in agriculture.',
        timeAgo: '5 days ago',
        category: 'Technology'
      },
      {
        id: '5',
        title: 'Climate Change and Agriculture',
        description: 'Understanding the challenges posed by climate change to farmers.',
        timeAgo: '2 weeks ago',
        category: 'Environment'
      },
      {
        id: '6',
        title: 'Organic Farming Benefits',
        description: 'The advantages of switching to organic farming practices.',
        timeAgo: '1 day ago',
        category: 'Organic'
      },
      {
        id: '7',
        title: 'Market Trends for Farmers',
        description: 'Analyzing current market trends and their implications for farmers.',
        timeAgo: '2 days ago',
        category: 'Market'
      },
      {
        id: '8',
        title: 'Impact of Technology on Crop Production',
        description: 'How technology is revolutionizing crop production methods.',
        timeAgo: '2 hours ago',
        category: 'Technology'
      },
      {
        id: '9',
        title: 'The Future of Farming',
        description: 'Predictions and insights into the future of agriculture.',
        timeAgo: '2 week ago',
        category: 'Future'
      },
      {
        id: '10',
        title: 'Community Supported Agriculture',
        description: 'How community supported agriculture is changing the landscape.',
        timeAgo: '1 month ago',
        category: 'Community'
      },
      {
        id: '11',
        title: 'Sustainable Practices for Modern Farmers',
        description: 'Learn about sustainable farming practices that benefit both farmers and the environment.',
        timeAgo: '10 days ago',
        category: 'Sustainability'
      },
      {
        id: '12',
        title: 'The Impact of Climate Change on Farming',
        description: 'An in-depth look at how climate change is affecting agricultural practices.',
        timeAgo: '5 hours ago',
        category: 'Environment'
      }
    ];

    return (
        <main className="md:ml-56">
            <Navbar />
          <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6 sm:mb-8">
                Trending News in Agriculture
              </h1>
    
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {newsItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 flex flex-col"
                  >
                    <div className="flex-1">
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-xs sm:text-sm text-gray-500">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        <span className="truncate max-w-[100px] sm:max-w-none">
                          {item.timeAgo}
                        </span>
                      </div>
                      <button className="text-blue-500 hover:text-blue-600 flex items-center text-xs sm:text-sm font-medium">
                        Read more
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      );
}