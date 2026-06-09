import React, { useEffect, useState } from 'react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('BOOTING COGNITIVE ENGINE...');

  const statuses = [
    { threshold: 15, text: 'BOOTING COGNITIVE ENGINE...' },
    { threshold: 35, text: 'ESTABLISHING NEURAL MATRIX...' },
    { threshold: 55, text: 'LOADING IoT PORT PROTOCOLS...' },
    { threshold: 75, text: 'DECRYPTING CYBERSECURITY LAYER...' },
    { threshold: 90, text: 'SYNAPSE LINK COMPLETED.' },
    { threshold: 100, text: 'WELCOME TO NEXUS_AI.' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        
        // Update status text based on progress
        const currentStatus = statuses.find(s => next <= s.threshold);
        if (currentStatus) {
          setStatus(currentStatus.text);
        }
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#030014] flex flex-col items-center justify-center p-4">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-neonPurple/10 filter blur-[80px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-neonBlue/10 filter blur-[80px] animate-pulse-slow" />

      {/* SVG Neural Net Animation */}
      <div className="relative w-44 h-44 mb-8">
        <svg viewBox="0 0 100 100" className="w-full h-full text-neonBlue">
          {/* Animated Connecting Lines */}
          <line x1="20" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" className="opacity-40" strokeDasharray="5" strokeDashoffset="10">
            <animate attributeName="strokeDashoffset" values="10;0" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="80" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" className="opacity-40" strokeDasharray="5" strokeDashoffset="10">
            <animate attributeName="strokeDashoffset" values="0;10" dur="2.5s" repeatCount="indefinite" />
          </line>
          <line x1="50" y1="80" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" className="opacity-40" strokeDasharray="5" strokeDashoffset="10">
            <animate attributeName="strokeDashoffset" values="10;0" dur="1.5s" repeatCount="indefinite" />
          </line>
          <line x1="20" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />
          <line x1="20" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />
          <line x1="80" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />

          {/* Glowing Nodes */}
          <circle cx="20" cy="20" r="4" fill="#ad00ff" className="animate-pulse shadow-neon-purple" />
          <circle cx="80" cy="20" r="4" fill="#00ffd1" className="animate-pulse" />
          <circle cx="50" cy="80" r="4" fill="#00f0ff" className="animate-pulse" />
          
          {/* Center Processing Core */}
          <circle cx="50" cy="50" r="7" fill="none" stroke="#00f0ff" strokeWidth="1.5">
            <animate attributeName="r" values="5;9;5" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="50" r="3" fill="#00f0ff" />
        </svg>
      </div>

      {/* Terminal Loading Stats */}
      <div className="w-full max-w-sm font-mono text-center">
        <h2 className="font-orbitron font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple tracking-widest mb-2">
          NEXUS_AI PORTFOLIO
        </h2>
        
        {/* Status Text */}
        <div className="text-xs text-neonBlue/80 h-5 mb-4 font-semibold tracking-wider transition-all duration-300">
          {status}
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-white/5 border border-glassBorder rounded-full overflow-hidden mb-2">
          <div 
            className="h-full bg-gradient-to-r from-neonPurple via-neonBlue to-neonCyan transition-all duration-100 ease-out shadow-neon-blue"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="text-xs text-gray-500 flex justify-between">
          <span>SYS_STATUS: ACTIVE</span>
          <span className="text-neonPurple font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
