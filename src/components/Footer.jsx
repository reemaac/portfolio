import React from 'react';
import { Mail, Phone, Download, Terminal } from 'lucide-react';

const Github = ({ size = 16 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 16 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer({ setActivePage }) {
  const handleDownloadResume = () => {
    // Generate a dummy resume content or point to a valid placeholder
    const resumeUrl = '#'; 
    alert("Downloading Reema_Anayam_Cherakkal_Resume.pdf (Simulated). Connect with me on LinkedIn for the full official CV!");
  };

  return (
    <footer className="w-full mt-20 border-t border-glassBorder bg-black/40 backdrop-blur-md relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-neonPurple to-neonBlue flex items-center justify-center font-orbitron font-bold text-white text-sm shadow-neon-blue">
                Ω
              </span>
              <span className="font-orbitron font-bold tracking-wider text-white">
                PORTFOLIO
              </span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Designed as a professional, cognitive-inspired hub showcasing IoT integrations, security practices, cloud telemetry, and future Artificial Intelligence aspirations.
            </p>
            <div className="flex items-center space-x-2 text-[10px] text-neonCyan font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonCyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neonCyan"></span>
              </span>
              <span>PORTFOLIO_NODE: ONLINE (v1.0.4)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-xs font-bold tracking-wider text-white uppercase mb-4">
              Sitemap
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => setActivePage('home')} className="hover:text-neonBlue transition-colors font-mono">
                  &gt; ~/home
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('about')} className="hover:text-neonBlue transition-colors font-mono">
                  &gt; ~/about
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('pm-vikas')} className="hover:text-neonBlue transition-colors font-mono">
                  &gt; ~/pm-vikas
                </button>
              </li>
            </ul>
          </div>

          {/* Action Links */}
          <div className="space-y-4">
            <h4 className="font-orbitron text-xs font-bold tracking-wider text-white uppercase">
              Assets
            </h4>
            <button
              onClick={handleDownloadResume}
              className="w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-xl border border-neonBlue/40 bg-neonBlue/5 text-neonBlue text-xs font-semibold hover:bg-neonBlue/15 hover:shadow-neon-blue transition-all duration-300"
            >
              <Download size={14} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-glassBorder/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-500 font-mono">
            &copy; {new Date().getFullYear()} REEMA_PORTFOLIO. ALL PROTOCOLS RESERVED.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/reemaaac" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-glassBorder text-gray-400 hover:text-white hover:border-white/20 transition-all"
            >
              <Github size={16} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-glassBorder text-gray-400 hover:text-neonBlue hover:border-neonBlue/20 transition-all"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="mailto:reema.ac04@gmail.com"
              className="p-2 rounded-lg bg-white/5 border border-glassBorder text-gray-400 hover:text-neonPurple hover:border-neonPurple/20 transition-all"
            >
              <Mail size={16} />
            </a>
            <a 
              href="tel:+1234567890"
              className="p-2 rounded-lg bg-white/5 border border-glassBorder text-gray-400 hover:text-neonCyan hover:border-neonCyan/20 transition-all"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
