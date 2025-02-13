import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Camera } from 'lucide-react';

interface ProfileData {
  name: string;
  userId: string;
  mobile: string;
  email: string;
  governmentId: string;
  dateOfBirth: string;
  role: string;
  address: string;
  village: string;
  state: string;
  taluka: string;
  district: string;
}

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Shantaram Patil',
    userId: '123456',
    mobile: '+91 123456789',
    email: 'shantaram@example.com',
    governmentId: 'Aadhar ID: 1234-5678-9012',
    dateOfBirth: 'January 1, 1990',
    role: 'Farmer',
    address: '123 Farmer Lane, Agriculture Town',
    village: 'Mahiravani',
    state: 'Maharashtra',
    taluka: 'Udgir',
    district: 'Latur'
  });

  const handleSave = () => {
    setIsEditing(false);
    console.log('Saving profile:', profileData);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const roles = ['Farmer', 'Customer', 'Agent', 'Admin'];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-4 md:p-8">
            {/* Profile Picture Section */}
            <div className="flex flex-col items-center mb-6 md:mb-8">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                  <Camera className="h-6 w-6 md:h-8 md:w-8 text-gray-400" />
                </div>
                <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-1.5 md:p-2 rounded-full hover:bg-blue-600 transition-colors">
                  <Camera className="h-3 w-3 md:h-4 md:w-4" />
                </button>
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-3 md:mt-4">{profileData.name}</h2>
              <p className="text-sm md:text-base text-gray-600">User ID: {profileData.userId}</p>
            </div>

            {/* Profile Form */}
            <div className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number:
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={profileData.mobile}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                </div>

                {/* Government ID Proof */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Government ID Proof:
                  </label>
                  <input
                    type="text"
                    name="governmentId"
                    value={profileData.governmentId}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth:
                  </label>
                  <input
                    type="text"
                    name="dateOfBirth"
                    value={profileData.dateOfBirth}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <select
                    name="role"
                    value={profileData.role}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address:
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                </div>

                {/* Village */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State:
                  </label>
                  <input
                    type="text"
                    name="village"
                    value={profileData.state}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    District:
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={profileData.district}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                </div>

                {/* Taluka */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Taluka:
                  </label>
                  <input
                    type="text"
                    name="taluka"
                    value={profileData.taluka}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                </div>

                {/* Village */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Village:
                  </label>
                  <input
                    type="text"
                    name="taluka"
                    value={profileData.village}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-3 md:px-4 py-2 text-sm md:text-base rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4 mt-6 md:mt-8">
                {isEditing ? (
                  <button
                    onClick={handleSave}
                    className="px-4 md:px-6 py-2 text-sm md:text-base bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={handleEdit}
                    className="px-4 md:px-6 py-2 text-sm md:text-base bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}