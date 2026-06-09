import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Mic, MicOff } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, theme, toggleTheme, voiceActive, toggleVoice }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'pm-vikas', label: 'PM-VIKAS' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 glass-panel rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl transition-all duration-300">
      <div 
        onClick={() => handleNavClick('home')} 
        className="flex items-center space-x-2 cursor-pointer group select-none"
      >
        <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neonPurple to-neonBlue flex items-center justify-center font-orbitron font-bold text-white text-lg shadow-neon-blue group-hover:scale-110 transition-transform duration-300">
          Ω
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`font-orbitron text-sm tracking-widest relative py-1 transition-all duration-300 hover:text-neonBlue ${
              activePage === item.id 
                ? 'text-neonBlue neon-text-blue font-semibold' 
                : 'text-gray-400'
            }`}
          >
            {item.label}
            {activePage === item.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neonBlue to-neonPurple rounded-full shadow-neon-blue" />
            )}
          </button>
        ))}
      </div>

      {/* Controls: Voice, Theme, and Menu */}
      <div className="flex items-center space-x-4">
        {/* Voice Command Button */}
        <button
          onClick={toggleVoice}
          title={voiceActive ? "Voice Commands: Active (Say 'go to about')" : "Enable Voice Assistant"}
          className={`p-2 rounded-lg transition-all duration-300 relative ${
            voiceActive 
              ? 'bg-red-500/20 text-red-400 border border-red-500/50 shadow-[0_0_12px_rgba(239,68,68,0.4)] animate-pulse' 
              : 'text-gray-400 hover:text-neonBlue hover:bg-white/5 border border-transparent'
          }`}
        >
          {voiceActive ? <Mic size={18} /> : <MicOff size={18} />}
          {voiceActive && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
          )}
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-gray-400 hover:text-neonBlue hover:bg-white/5 border border-transparent transition-all duration-300"
          title="Toggle Theme Mode"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-neonBlue hover:bg-white/5 rounded-lg transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full glass-panel rounded-2xl p-6 flex flex-col space-y-4 shadow-2xl border-t border-glassBorder md:hidden animate-fade-in-down">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-orbitron text-left py-2 px-4 rounded-lg tracking-widest text-sm transition-all ${
                activePage === item.id 
                  ? 'bg-gradient-to-r from-neonBlue/15 to-neonPurple/15 text-neonBlue border-l-2 border-neonBlue' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
