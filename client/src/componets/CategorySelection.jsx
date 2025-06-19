import React, { useState } from 'react';

const CategoryFilter = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 'other', icon: '/assets/paw1.png', label: 'All' },
    { id: 'cats', icon: '/assets/cat.png', label: 'Cats' },
    { id: 'dogs', icon: '/assets/dog.png', label: 'Dogs' },
    { id: 'birds', icon: '/assets/bird.png', label: 'Birds' },
    { id: 'fishes', icon: '/assets/fish.png', label: 'Fishes' }
    
  ];

  const handleCategoryClick = (categoryId) => {
    const newCategory = selectedCategory === categoryId ? null : categoryId;
    setSelectedCategory(newCategory);
    onCategoryChange && onCategoryChange(newCategory);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex gap-2 flex-wrap justify-center">
  {categories.map((category) => (
    <div key={category.id} className="flex flex-col items-center">
      <button
        onClick={() => handleCategoryClick(category.id)}
        className={`w-20 h-20 m-2 rounded-lg flex items-center justify-center transition-colors ${
          selectedCategory === category.id
            ? 'bg-orange-200 border-2 border-orange-400'
            : 'bg-orange-100 hover:bg-orange-200'
        }`}
        title={category.label}
      >
        <img
          src={category.icon}
          alt={category.label}
          className="w-14 h-14 object-contain"
        />
      </button>
      <p className="mt-1 text-sm text-gray-700">{category.label}</p>
    </div>
  ))}
</div>

    </div>
  );
};

export default CategoryFilter;
