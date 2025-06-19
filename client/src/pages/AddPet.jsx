import React, { useState } from 'react';
import { ChevronDown, Upload, Phone } from 'lucide-react';
import Footer from '../componets/Footer';
import Navbar from '../componets/Navbar';

const AddStrayPetForm = () => {
  const [formData, setFormData] = useState({
    petName: '',
    animalType: '',
    estimatedAge: '',
    gender: '',
    description: '',
    locationFound: '',
    agencyLevel: 'Normal',
    yourName: '',
    phoneNumber: '',
    emailAddress: '',
    photo: null
  });

  const [dropdownStates, setDropdownStates] = useState({
    animalType: false,
    estimatedAge: false,
    gender: false,
    agencyLevel: false
  });

  const animalTypes = ['Dog', 'Cat', 'Bird', 'Rabbit', 'Other'];
  const ageRanges = ['Puppy/Kitten (0-1 year)', 'Young (1-3 years)', 'Adult (3-7 years)', 'Senior (7+ years)'];
  const genders = ['Male', 'Female', 'Unknown'];
  const agencyLevels = ['Critical', 'High', 'Normal', 'Low'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleDropdown = (dropdown) => {
    setDropdownStates(prev => ({
      ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
      [dropdown]: !prev[dropdown]
    }));
  };

  const handleDropdownSelect = (field, value) => {
    handleInputChange(field, value);
    setDropdownStates(prev => ({ ...prev, [field]: false }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, photo: file }));
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Pet listing submitted successfully!');
  };

  const DropdownField = ({ label, field, options, placeholder, required = false }) => (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}{required && '*'}
      </label>
      <button
        type="button"
        onClick={() => toggleDropdown(field)}
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-left"
      >
        <span className={formData[field] ? 'text-gray-900' : 'text-gray-500'}>
          {formData[field] || placeholder}
        </span>
        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${dropdownStates[field] ? 'rotate-180' : ''}`} />
      </button>
      
      {dropdownStates[field] && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleDropdownSelect(field, option)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-gray-700"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
  return (


    <div className="min-h-screen bg-gray-100">
          <Navbar/>
      {/* Header */}
      <div className="bg-orange-500 text-white px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8  rounded-lg flex items-center justify-center">
              <img src="/assets/paw1.png" alt="Paw Icon" className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold">Add a stray pet</h1>
            <span className="text-xl">              <img src="/assets/paw1.png" alt="Paw Icon" className="w-6 h-6" />
</span>
          </div>
          <p className="text-orange-100">
            Help connect this furry friend with a loving home.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="space-y-6">
          {/* Pet Name and Animal Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pet Name*
              </label>
              <input
                type="text"
                value={formData.petName}
                onChange={(e) => handleInputChange('petName', e.target.value)}
                placeholder="Luna"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              />
            </div>
            <DropdownField
              label="Animal Type"
              field="animalType"
              options={animalTypes}
              placeholder="Select animal type"
              required
            />
          </div>

          {/* Estimated Age and Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DropdownField
              label="Estimated Age"
              field="estimatedAge"
              options={ageRanges}
              placeholder="Select age range"
              required
            />
            <DropdownField
              label="Gender"
              field="gender"
              options={genders}
              placeholder="Gender select"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Describe the pet's appearance, behavior and any special needs..."
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
            />
          </div>

          {/* Location Found */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location Found
            </label>
            <input
              type="text"
              value={formData.locationFound}
              onChange={(e) => handleInputChange('locationFound', e.target.value)}
              placeholder="Colombo"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Agency Level */}
          <DropdownField
            label="Agency Level"
            field="agencyLevel"
            options={agencyLevels}
            placeholder="Normal"
          />

          {/* Contact Information */}
          <div className="pt-4">
            <div className="flex items-center gap-2 mb-4">
              <Phone className="h-5 w-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
            </div>

            <div className="space-y-4">
              {/* Your Name and Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.yourName}
                    onChange={(e) => handleInputChange('yourName', e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.emailAddress}
                  onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>

          {/* Add Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 ">
              Add Photo
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
                id="photo-upload"
              />
              <label htmlFor="photo-upload" className="cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Upload className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-600">Upload from your device</p>
                {formData.photo && (
                  <p className="text-sm text-green-600 mt-2">
                    Selected: {formData.photo.name}
                  </p>
                )}
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <div className="flex items-center justify-center gap-2">
            <button
              onClick={handleSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 outline-none flex items-center justify-center gap-2"
            >
              <img src="/assets/paw1.png" alt="Paw Icon" className="w-6 h-6" /> Add Pet Listing
            </button></div>
          </div>
        </div>
      </div>

      <Footer/>
      
    </div>
  );
};

export default AddStrayPetForm;