import React from 'react';

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
  </svg>
);

// Inline SVGs for LinkCard
const ChatIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.73 4.05 1.08.99 2.53 1.47 3.99 1.54v3.91c-1.36-.02-2.71-.38-3.9-1.05-.73-.41-1.38-.97-1.89-1.66-.01 2.36-.02 4.71-.02 7.07 0 1.25-.26 2.5-.85 3.58-.91 1.63-2.61 2.8-4.48 3.08-1.57.24-3.21-.07-4.57-.89A6.76 6.76 0 0 1 3 13.91c-.48-1.87-.09-3.92 1.03-5.46 1.13-1.54 2.92-2.52 4.82-2.65 1.11-.08 2.23.16 3.24.66.01-.89.01-1.78.01-2.67-1.12-.3-2.28-.35-3.4-.15-2 .35-3.83 1.58-4.87 3.35-1.11 1.88-1.3 4.25-.51 6.27.79 2.03 2.57 3.65 4.7 4.19 2.11.53 4.47.04 6.18-1.27A6.87 6.87 0 0 0 18.5 11.2c0-3.72.01-7.44.02-11.16-.94-.01-1.88-.01-2.82-.01l-.22.03c-.66.86-1.57 1.48-2.61 1.74-.11-1.26.22-2.52.92-3.56.24-.36.54-.68.88-.96l-2.14-.02z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);

const iconMap = {
  chat: ChatIcon,
  briefcase: BriefcaseIcon,
  tiktok: TikTokIcon,
  instagram: InstagramIcon,
  play: PlayIcon
};

export default function LinkCard({ icon, label, href, disabled }) {
  const Icon = iconMap[icon] || PlayIcon;

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
