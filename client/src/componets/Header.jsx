import React from 'react';

const PawRescueHeader = () => {
  return (
    <div className="relative">
      {/* Image background with text overlay */}
      <div className="relative h-80 overflow-hidden rounded-lg shadow-md">
        <img 
          src="/assets/aa.jpg"
          alt="Paw Rescue Header" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center gap-3">
  <img 
    src="/assets/heart.png"
    alt="Heart Icon"
    className="w-10 h-10 md:w-14 md:h-14"
  />
  Paw Rescue
</h1>

          <p className="text-xl md:text-2xl text-white opacity-90">
            Connecting stray animals with loving ones
          </p>
          <div className="mt-4">
          <img 
          src="/assets/paw.png"
          alt="Paw Rescue Header" 
          className="w-16 h-16 md:w-20 md:h-20 mt-4 animate-bounce color:white" 
        />
        </div>
        </div>
      </div>
    </div>
  );
};

export default PawRescueHeader;