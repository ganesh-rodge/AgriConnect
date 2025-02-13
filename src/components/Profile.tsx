import { useState, useRef } from 'react';
import {Navbar} from './Navbar';
import { Camera, Menu } from 'lucide-react';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: 'Shantarani Patil',
    userId: '123456',
    mobile: '+91 123456789',
    email: 'shantaram@example.com',
    govId: 'Aadhar ID: 1234-5678-9012',
    dob: 'January 1, 1990',
    role: '',
    address: '123 Farmer Lane, Agriculture Town',
    village: 'Gondia',
    state: 'Maharashtra',
    taluka: 'Latur'
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e:any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Saving changes:', formData);
  };

  const roleOptions = ['Customer', 'Agent', 'Farmer', 'Admin'];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-green-100 p-4 flex items-center justify-between">
        <span className="text-green-700 text-xl font-semibold">🌱 CropNest</span>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md hover:bg-green-200"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-100 p-4">
          <Navbar />
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-4 md:p-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-6 md:mb-8">
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
              </div>
              <button 
                onClick={() => fileInputRef.current.click()}
                className="absolute bottom-4 right-0 p-1 bg-white rounded-full shadow-lg hover:bg-gray-100"
              >
                <Camera size={16} className="text-gray-600" />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-center">{formData.name}</h2>
            <p className="text-sm md:text-base text-gray-500">User ID: {formData.userId}</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4 md:space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number:</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className={`w-full p-2 border rounded-md ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className={`w-full p-2 border rounded-md ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Government ID Proof:</label>
              <input
                type="text"
                name="govId"
                value={formData.govId}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className={`w-full p-2 border rounded-md ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth:</label>
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className={`w-full p-2 border rounded-md ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role:</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full p-2 border rounded-md ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              >
                <option value="">Select Role</option>
                {roleOptions.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className={`w-full p-2 border rounded-md ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Village:</label>
              <input
                type="text"
                name="village"
                value={formData.village}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className={`w-full p-2 border rounded-md ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">State:</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className={`w-full p-2 border rounded-md ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Taluka:</label>
              <input
                type="text"
                name="taluka"
                value={formData.taluka}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className={`w-full p-2 border rounded-md ${isEditing ? 'bg-white' : 'bg-gray-50'}`}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-6 md:mt-8">
            {isEditing ? (
              <button 
                onClick={handleSave}
                className="min-w-[100px] max-w-[140px] px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Save
              </button>
            ) : (
              <button 
                onClick={() => setIsEditing(true)}
                className="min-w-[100px] max-w-[140px] px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;