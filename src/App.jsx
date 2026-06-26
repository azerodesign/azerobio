import React, { useState } from 'react';
import BlobBackground from './components/BlobBackground';
import LinkCard from './components/LinkCard';
import DrawerAbout from './components/DrawerAbout';

// Inline SVG Icons
const TikTokIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.73 4.05 1.08.99 2.53 1.47 3.99 1.54v3.91c-1.36-.02-2.71-.38-3.9-1.05-.73-.41-1.38-.97-1.89-1.66-.01 2.36-.02 4.71-.02 7.07 0 1.25-.26 2.5-.85 3.58-.91 1.63-2.61 2.8-4.48 3.08-1.57.24-3.21-.07-4.57-.89A6.76 6.76 0 0 1 3 13.91c-.48-1.87-.09-3.92 1.03-5.46 1.13-1.54 2.92-2.52 4.82-2.65 1.11-.08 2.23.16 3.24.66.01-.89.01-1.78.01-2.67-1.12-.3-2.28-.35-3.4-.15-2 .35-3.83 1.58-4.87 3.35-1.11 1.88-1.3 4.25-.51 6.27.79 2.03 2.57 3.65 4.7 4.19 2.11.53 4.47.04 6.18-1.27A6.87 6.87 0 0 0 18.5 11.2c0-3.72.01-7.44.02-11.16-.94-.01-1.88-.01-2.82-.01l-.22.03c-.66.86-1.57 1.48-2.61 1.74-.11-1.26.22-2.52.92-3.56.24-.36.54-.68.88-.96l-2.14-.02z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.21 1.6 5.353 1.601 5.394 0 9.786-4.386 9.79-9.774a9.71 9.71 0 0 0-2.863-6.924 9.73 9.73 0 0 0-6.93-2.867c-5.4 0-9.786 4.387-9.79 9.776-.002 2.09.547 4.133 1.588 5.933l-.991 3.616 3.698-.97c1.554.848 3.12 1.285 5.145 1.285zm7.393-9.59c-.273-.136-1.62-.8-1.872-.892-.254-.093-.44-.136-.623.136-.184.272-.713.892-.872 1.074-.16.183-.32.203-.593.067-.27-.137-1.15-.425-2.193-1.355-.808-.722-1.353-1.614-1.512-1.887-.16-.272-.017-.419.12-.556.122-.122.27-.318.407-.476.136-.16.183-.272.273-.454.09-.182.045-.34-.022-.477-.068-.136-.623-1.5-.853-2.053-.225-.54-.45-.466-.622-.475-.16-.008-.344-.01-.527-.01-.184 0-.485.07-.74.348-.253.272-.97.948-.97 2.31 0 1.36.99 2.678 1.13 2.86.137.182 1.95 2.977 4.72 4.17 1.65.7 2.937.94 3.948.777 1.13-.183 2.316-.948 2.637-1.872.32-.925.32-1.72.226-1.887-.097-.16-.34-.253-.615-.39z" />
  </svg>
);

const HamburgerIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const SocialIcons = () => (
  <div className="flex gap-3 justify-center">
    <a
      href="https://tiktok.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200"
      aria-label="TikTok"
    >
      <TikTokIcon />
    </a>
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  </div>
);

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const links = [
    {
      label: "Order / Konsultasi",
      href: "https://wa.me/",
      icon: "chat",
      disabled: false
    },
    {
      label: "Portofolio",
      href: "#",
      icon: "briefcase",
      disabled: false
    },
    {
      label: "TikTok",
      href: "https://tiktok.com/@azerodesign",
      icon: "tiktok",
      disabled: false
    },
    {
      label: "Instagram",
      href: "https://instagram.com/azerodesign",
      icon: "instagram",
      disabled: false
    },
    {
      label: "Motion Academy",
      href: "#",
      icon: "play",
      disabled: false
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0F2B6B] via-[#1565C0] to-[#42A5F5] flex items-center justify-center font-sans text-white relative overflow-hidden">
      {/* Animated Floating Blobs Background with Noise */}
      <BlobBackground />

      {/* Hamburger Trigger */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/25 transition-colors duration-200 text-white"
        aria-label="Open menu"
      >
        <HamburgerIcon />
      </button>

      {/* About Drawer */}
      <DrawerAbout isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Inner Container */}
      <div className="max-w-sm w-full mx-auto px-4 py-10 flex flex-col items-center gap-5 z-10 relative">
        
        {/* Avatar Section */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-[20px]">
            {/* Gradient Ring Wrapper */}
            <div className="p-[3px] rounded-full bg-gradient-to-br from-[#60A5FA] via-[#A78BFA] to-[#F472B6] shadow-lg">
              <div className="p-[2px] rounded-full bg-[#1565C0]">
                <img
                  src="/avatar.png"
                  alt="Avatar"
                  className="w-20 h-20 rounded-full object-cover relative z-10"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80";
                  }}
                />
              </div>
            </div>
          </div>
          <h1 className="text-xl font-semibold tracking-tight">@azerodesign</h1>
          <p className="text-sm opacity-80 mt-1">Motion Designer & Graphics Designer</p>
        </div>

        {/* Social Icons with custom gap */}
        <div className="mt-0">
          <SocialIcons />
        </div>

        {/* Links Cards */}
        <div className="w-full flex flex-col gap-3 mt-[24px]">
          {links.map((link, idx) => (
            <LinkCard
              key={idx}
              icon={link.icon}
              label={link.label}
              href={link.href}
              disabled={link.disabled}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="text-xs opacity-40 text-center mt-6 w-full flex items-center justify-center gap-1.5">
          <span>azerodesign &copy; 2025</span>
          <span>·</span>
          <span>made with React</span>
        </footer>
      </div>
    </div>
  );
}
