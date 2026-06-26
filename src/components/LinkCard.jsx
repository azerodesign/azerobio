import React from 'react';

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
  </svg>
);

export default function LinkCard({ icon: Icon, label, href, disabled }) {
  if (disabled) {
    return (
      <div className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl opacity-50 cursor-not-allowed pointer-events-none text-white select-none">
        <div className="w-[42px] h-[42px] rounded-xl bg-white/15 flex items-center justify-center shrink-0">
          <Icon />
        </div>
        <span className="flex-1 text-center text-sm font-medium pr-[42px]">{label}</span>
        <div className="opacity-50 shrink-0">
          <ArrowRightIcon />
        </div>
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white hover:border-white/40 hover:-translate-y-0.5 transition-all duration-200 group relative overflow-hidden shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-transparent via-white/8 to-transparent animate-shimmer" />
      </div>

      <div className="w-[42px] h-[42px] rounded-xl bg-white/15 flex items-center justify-center shrink-0 relative z-10">
        <Icon />
      </div>
      <span className="flex-1 text-center text-sm font-medium pr-[42px] relative z-10">{label}</span>
      <div className="opacity-50 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all duration-200 shrink-0 relative z-10">
        <ArrowRightIcon />
      </div>
    </a>
  );
}
