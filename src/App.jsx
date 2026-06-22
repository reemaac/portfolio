import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ThreeCanvas from './components/ThreeCanvas';
import Chatbot from './components/Chatbot';
import VoiceController from './components/VoiceController';
import Home from './pages/Home';
import About from './pages/About';
import PmVikas from './pages/PmVikas';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [theme, setTheme] = useState('dark');
  const [voiceActive, setVoiceActive] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  
  // Chatbot state shared between Voice and Chat UI
  const [messages, setMessages] = useState([
    { 
      text: "👋 Initialize connection. I am your portfolio assistant. Ask me about training modules, my embedded IoT prototypes, or security tools!", 
      sender: 'bot', 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }
  ]);

  // Voice Command addition helper
  const addBotMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        text,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  // Sync theme with body class
  useEffect(() => {
    const body = document.body;
    if (theme === 'light') {
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
    }
  }, [theme]);

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleVoice = () => {
    setVoiceActive((prev) => !prev);
  };

  const openChat = () => {
    setChatbotOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Loading sequence */}
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* 3D background grid and neural connections */}
          <div className="fixed inset-0 grid-overlay -z-20 pointer-events-none" />
          <ThreeCanvas theme={theme} />
          
          {/* Voice Command Engine */}
          <VoiceController 
            voiceActive={voiceActive} 
            setVoiceActive={setVoiceActive}
            setActivePage={setActivePage} 
            toggleTheme={toggleTheme} 
            openChat={openChat}
            addBotMessage={addBotMessage}
          />

          {/* Floating Navigation Header */}
          <Navbar 
            activePage={activePage} 
            setActivePage={setActivePage} 
            theme={theme}
            toggleTheme={toggleTheme} 
            voiceActive={voiceActive}
            toggleVoice={toggleVoice}
          />

          {/* Page Routing Container */}
          <main className="flex-1 w-full pb-20 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {activePage === 'home' && <Home setActivePage={setActivePage} theme={theme} />}
                {activePage === 'about' && <About />}
                {activePage === 'pm-vikas' && <PmVikas />}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Autonomous Chatbot Agent */}
          <Chatbot 
            theme={theme} 
            isOpen={chatbotOpen} 
            setIsOpen={setChatbotOpen} 
            messages={messages}
            setMessages={setMessages}
          />

          {/* Footer Component */}
          <Footer setActivePage={setActivePage} />
        </>
      )}
    </div>
  );
}
