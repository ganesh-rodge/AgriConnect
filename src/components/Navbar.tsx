import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { api } from '../api';
import {
  Sprout, Menu, X, User, Home, FileText, Scaling as Seedling,
  ShoppingCart, Paperclip, 
  UserCircle, Notebook
} from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await api.post('/auth/logout');
      if (response.status === 200) {
        console.log(response.data.message);
        navigate('/login');
      } else {
        console.error('Logout failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6 text-green-700" /> : <Menu className="h-6 w-6 text-green-700" />}
      </button>

      {/* Overlay when menu is open on mobile */}
      {isOpen && <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu} />}

      {/* Sidebar Navigation */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed top-0 left-0 h-screen w-56 bg-emerald-50 p-3 flex flex-col z-40 transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <Sprout className="h-8 w-8 text-green-700" />
          <span className="text-2xl font-bold text-green-700">CropNest</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <a 
                href="/agriculturemanagement" 
                className={`flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-emerald-100 rounded-lg transition-colors ${
                  location.pathname === '/agriculturemanagement' ? 'bg-green-200 text-green-800' : ''
                }`}
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a 
                href="/soilanalysisform" 
                className={`flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-emerald-100 rounded-lg transition-colors ${
                  location.pathname === '/soilanalysisform' ? 'bg-green-200 text-green-800' : ''
                }`}
              >
                <FileText className="h-5 w-5" />
                <span>Soil Analysis Form</span>
              </a>
            </li>
            <li>
              <a 
                href="/cropoverview" 
                className={`flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-emerald-100 rounded-lg transition-colors ${
                  location.pathname === '/cropoverview' ? 'bg-green-200 text-green-800' : ''
                }`}
              >
                <Seedling className="h-5 w-5" />
                <span>Crops</span>
              </a>
            </li>
            <li>
              <a 
                href="/marketview" 
                className={`flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-emerald-100 rounded-lg transition-colors ${
                  location.pathname === '/marketview' ? 'bg-green-200 text-green-800' : ''
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Market View</span>
              </a>
            </li>
            <li>
              <a 
                href="/schemes" 
                className={`flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-emerald-100 rounded-lg transition-colors ${
                  location.pathname === '/schemas' ? 'bg-green-200 text-green-800' : ''
                }`}
              >
                <Notebook className="h-5 w-5" />
                <span>Government Schemes</span>
              </a>
            </li>
            <li>
              <a 
                href="/bulletin" 
                className={`flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-emerald-100 rounded-lg transition-colors ${
                  location.pathname === '/bulletin' ? 'bg-green-200 text-green-800' : ''
                }`}
              >
                <Paperclip className="h-5 w-5" />
                <span>Bulletin</span>
              </a>
            </li>
            <li>
              <a 
                href="/profile" 
                className={`flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-emerald-100 rounded-lg transition-colors ${
                  location.pathname === '/profile' ? 'bg-green-200 text-green-800' : ''
                }`}
              >
                <UserCircle className="h-5 w-5" />
                <span>Profile</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-auto px-2 py-2 flex items-center gap-3 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
          disabled={loading}
        >
          <User className="h-5 w-5" />
          <span>{loading ? 'Logging out...' : 'Logout'}</span>
        </button>
      </div>

      {/* Main Content Area Shift for Sidebar */}
      <div className="md:ml-56 p-4">
        {/* Your page content here */}
      </div>
    </>
  );
}
