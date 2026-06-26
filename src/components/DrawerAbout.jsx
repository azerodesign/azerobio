import React from 'react';

const CloseIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
  </svg>
);

export default function DrawerAbout({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-30 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Drawer Container */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-[#0F2B6B]/80 backdrop-blur-xl border-l border-white/10 z-40 p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between text-white">
            <span className="font-semibold text-lg">About</span>
            <button 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/10 transition-colors duration-200"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Separator */}
          <div className="border-t border-white/10 mt-3 mb-4" />

          {/* Identity */}
          <div className="flex flex-col items-center text-center mt-2">
            <div className="relative mb-3 p-[2px] rounded-full bg-gradient-to-br from-[#60A5FA] via-[#A78BFA] to-[#F472B6]">
              <div className="p-[2px] rounded-full bg-[#1565C0]">
                <img
                  src="/avatar.png"
                  alt="Avatar"
                  className="w-[52px] h-[52px] rounded-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=100&q=80";
                  }}
                />
              </div>
            </div>
            <h2 className="font-semibold text-white">@azerodesign</h2>
            <p className="text-xs opacity-80 mt-0.5">Motion Designer & Graphics Designer</p>
          </div>

          {/* Description */}
          <p className="text-sm text-white/90 leading-relaxed text-center mt-4">
            Freelance Motion Designer & Graphics Designer. Spesialis animasi, branding visual, dan konten kreatif.
          </p>

          {/* Separator */}
          <div className="border-t border-white/10 mt-4 mb-4" />

          {/* Stats */}
          <div className="flex justify-around items-center text-white py-2">
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">40+</span>
              <span className="text-[10px] opacity-60 uppercase tracking-wider">Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">20+</span>
              <span className="text-[10px] opacity-60 uppercase tracking-wider">Clients</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">3+</span>
              <span className="text-[10px] opacity-60 uppercase tracking-wider">Years</span>
            </div>
          </div>
        </div>

        {/* Brand Signoff */}
        <div className="text-center text-[10px] opacity-30 text-white">
          azerodesign &copy; 2025
        </div>
      </div>
    </>
  );
}
