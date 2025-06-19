import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#352C1A] text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Paw Rescue</h2>
        <div className="flex justify-center items-center flex-col">
  <p className="text-[#edd4a2] mb-4 flex items-center gap-2">
    Every animal deserves a loving home.
    <img src="./assets/heart.svg" alt="Favorite" className="w-5 h-5 inline text-white fill-white " />
    Help us make a difference.
  </p>
</div>

        <p className="text-sm text-[#edd4a2] flex items-center justify-center gap-2">
          Built with ️ our furry friends <img src="./assets/paw.png" alt="Favorite" className="w-5 h-5 inline text-white fill-white " />
        </p>
        
        {/* Optional: Add social links or additional info */}
        <div className="mt-6 pt-4 border-t border-[#edd4a2]">
          
          <p className="mt-3 text-xs text-[#edd4a2]">
            © 2025 Paw Rescue. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;