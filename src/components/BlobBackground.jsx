import React from 'react';

export default function BlobBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Blob 1 */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-[#1E40AF]/30 blur-[80px] -top-10 -left-10 animate-blob-float-1" />
      
      {/* Blob 2 */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[#2563EB]/35 blur-[80px] top-[40%] -right-20 animate-blob-float-2" />
      
      {/* Blob 3 */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#60A5FA]/30 blur-[80px] -bottom-10 left-[10%] animate-blob-float-3" />
      
      {/* Blob 4 */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#93C5FD]/30 blur-[80px] top-[10%] left-[30%] animate-blob-float-4" />
    </div>
  );
}
