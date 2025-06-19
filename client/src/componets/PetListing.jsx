import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const SearchFilterBar = ({ onSearchChange, onUrgencyChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUrgency, setSelectedUrgency] = useState('All Urgency');
  const [showUrgencyDropdown, setShowUrgencyDropdown] = useState(false);

  const urgencyLevels = [
    'All Urgency',
    'Critical',
    'High',
    'Medium',
    'Low'
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange && onSearchChange(value);
  };

  const handleUrgencySelect = (urgency) => {
    setSelectedUrgency(urgency);
    setShowUrgencyDropdown(false);
    onUrgencyChange && onUrgencyChange(urgency);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
        
        {/* Search Input */}
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by name, description, or location..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Urgency Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowUrgencyDropdown(!showUrgencyDropdown)}
            className="w-full lg:w-40 px-4 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            <span className="text-gray-700 font-medium">{selectedUrgency}</span>
            <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${showUrgencyDropdown ? 'rotate-180' : ''}`} />
          </button>
          
          {showUrgencyDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {urgencyLevels.map((urgency) => (
                <button
                  key={urgency}
                  onClick={() => handleUrgencySelect(urgency)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                    selectedUrgency === urgency ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{urgency}</span>
                    {urgency !== 'All Urgency' && (
                      <div className={`w-2 h-2 rounded-full ${
                        urgency === 'Critical' ? 'bg-red-500' :
                        urgency === 'High' ? 'bg-orange-500' :
                        urgency === 'Medium' ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`} />
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PetCard = ({ pet }) => {
  
  const getAgeColor = (age) => {
    switch (age.toLowerCase()) {
      case 'baby':
        return 'bg-blue-100 text-blue-800';
      case 'young':
        return 'bg-green-100 text-green-800';
      case 'adult':
        return 'bg-orange-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'Critical':
        return 'bg-red-500 text-white';
      case 'High':
        return 'bg-orange-500 text-white';
      case 'Medium':
        return 'bg-yellow-500 text-white';
      case 'Low':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image Container */}
      <div className="relative h-48 bg-gray-200">
        <img 
          src={pet.image} 
          alt={pet.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTM1QzEyNy42MTQgMTM1IDE1MCA5NC4yNDI3IDE1MCA0NUMxNTAgLTQuMjQyNzMgMTI3LjYxNCAtNDUgMTAwIC00NUM3Mi4zODU4IC00NSA1MCA0LjI0MjczIDUwIDQ1QzUwIDk0LjI0MjcgNzIuMzg1OCAxMzUgMTAwIDEzNVoiIGZpbGw9IiNEMUQ1REIiLz4KPC9zdmc+';
          }}
        />
        {/* Age Badge */}
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getAgeColor(pet.age)}`}>
          {pet.age}
        </div>
        {/* Urgency Badge */}
        <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(pet.urgency)}`}>
          {pet.urgency}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{pet.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {pet.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <img src='./assets/pin.png' className='h-5 w-3'/>  {pet.location}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {pet.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <a href='./contact'> <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors w-[310px]">
            Adopt
          </button></a>
          <button className="px-3 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors">
            <img src='./assets/heart.svg' alt="Favorite" className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Main component with filtering functionality
const FilteredPetCards = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUrgency, setSelectedUrgency] = useState('All Urgency');

  const allPets = [
    {
      id: 1,
      name: "Buddy",
      age: "Baby",
      urgency: "Critical",
      image: "./assets/pet1.png",
      description: "Sweet and gentle cat who loves to cuddle and purr. Perfect companion for quiet evenings.",
      location: "Mt.Lavinia",
      tags: ["Male", "Friendly", "Playful"]
    },
    {
      id: 2,
      name: "Rubby",
      age: "Young",
      urgency: "Low",
      image: "./assets/pet2.png",
      description: "Buddy is a playful and energetic puppy looking for his forever home. He loves treats and belly rubs!",
      location: "Dehiwala",
      tags: ["Female", "Calm", "Indoor"]
    },
    {
      id: 3,
      name: "Charlie",
      age: "Adult",
      urgency: "Medium",
      image: "./assets/pet3.png",
      description: "Well-trained dog looking for an active family. Great with kids and other pets.",
      location: "Homagama",
      tags: ["Male", "Trained", "Active"]
    }
    
  ];

  // Filter pets based on search term and urgency
  const filteredPets = allPets.filter(pet => {
    const matchesSearch = searchTerm === '' || 
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesUrgency = selectedUrgency === 'All Urgency' || pet.urgency === selectedUrgency;

    return matchesSearch && matchesUrgency;
  });

  const handleSearchChange = (search) => {
    setSearchTerm(search);
  };

  const handleUrgencyChange = (urgency) => {
    setSelectedUrgency(urgency);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Your Perfect Pet</h1>
        
        <SearchFilterBar 
          onSearchChange={handleSearchChange}
          onUrgencyChange={handleUrgencyChange}
        />

        <div className="mb-4 text-gray-600">
          Showing {filteredPets.length} of {allPets.length} pets
        </div>

        {filteredPets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.map(pet => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-2">No pets found</div>
            <div className="text-gray-400">Try adjusting your search or filter criteria</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredPetCards;