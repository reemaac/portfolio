import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

export default function Chatbot({ theme, isOpen, setIsOpen, messages, setMessages }) {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const responses = [
    {
      keywords: ['hi', 'hello', 'hey', 'greetings'],
      answer: "Greetings! I am your portfolio assistant. Ask me about technical skills, the PM-VIKAS program, or how to contact Reema!"
    },
    {
      keywords: ['pm-vikas', 'vikas', 'program', 'training', 'pmvikas'],
      answer: "The PM-VIKAS IoT Assistant Program was a comprehensive training journey focusing on IoT nodes, Cloud Integration, Cyber Defense, Linux commands, and Cisco Networking. You can find detailed timelines and projects on the PM-VIKAS page!"
    },
    {
      keywords: ['project', 'projects', 'portfolio', 'work'],
      answer: "Some key projects featured here include:\n1. Phishing URL Detection - Machine learning-driven analysis to identify malicious domains.\n2. IoT Assistant Node - Cloud telemetry integration under PM-VIKAS.\n3. Network Packet Auditor - Real-time network traffic sniffer capturing raw packet streams.\nCheck out the Home and PM-VIKAS pages to explore details!"
    },
    {
      keywords: ['skills', 'skills?', 'languages', 'tech', 'stack', 'technologies'],
      answer: "My multi-disciplinary tech stack includes:\n• IoT: Arduino, ESP32, Sensors, Actuators\n• Cloud: AWS Cloud essentials, IoT Core\n• Security: Penetration testing, firewall configs, Linux security hardening\n• Development: React.js, Python, JavaScript, CSS\nNavigate to the 'About' page to see these visualized in detailed graphs!"
    },
    {
      keywords: ['contact', 'email', 'phone', 'reach', 'linkedin', 'github'],
      answer: "You can reach out through the Contact form at the bottom of the home page, or connect directly via:\n• Email: reema.ac04@gmail.com\n• LinkedIn: linkedin.com/in/reema-shafi-820094282\n• GitHub: github.com/reemaac"
    },
    {
      keywords: ['resume', 'cv', 'download'],
      answer: "You can download my full professional Resume by clicking the 'Download Resume' button in the Hero or Footer section. It details academic scoring, IoT projects, and certifications!"
    },
    {
      keywords: ['who are you', 'what are you', 'assistant', 'name'],
      answer: "I am your portfolio assistant, an autonomous interface built to answer recruiter queries, highlight project milestones, and provide support across this portfolio."
    }
  ];


  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { text: userMsg, sender: 'user', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setInput('');
    setIsTyping(true);

    // AI simulation delay
    setTimeout(() => {
      let botResponse = "I'm processing that request. Try asking about 'skills', 'PM-VIKAS training', 'projects', or 'contact'.";
      
      const query = userMsg.toLowerCase();
      for (const res of responses) {
        if (res.keywords.some(keyword => query.includes(keyword))) {
          botResponse = res.answer;
          break;
        }
      }

      setMessages((prev) => [
        ...prev, 
        { 
          text: botResponse, 
          sender: 'bot', 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Chat Bubble Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-neonPurple to-neonBlue text-white flex items-center justify-center shadow-[0_0_20px_rgba(157,78,221,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] transition-all duration-300"
        >
          <MessageSquare size={24} className="animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonCyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-neonCyan text-[9px] text-[#030014] font-bold flex items-center justify-center">1</span>
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[480px] rounded-2xl glass-panel border border-glassBorder shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-neonPurple/20 to-neonBlue/20 border-b border-glassBorder flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-neonPurple/20 border border-neonPurple/40 flex items-center justify-center text-neonBlue">
                <Bot size={18} className="animate-pulse-slow" />
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-xs tracking-wider text-white">PORTFOLIO CORE</h3>
                <span className="text-[10px] text-neonCyan flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-neonCyan inline-block mr-1.5 animate-ping" />
                  Cognitive Node Online
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages list */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-black/10">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex items-start space-x-2 ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs border ${
                  msg.sender === 'bot' 
                    ? 'bg-neonPurple/10 border-neonPurple/30 text-neonBlue' 
                    : 'bg-neonBlue/10 border-neonBlue/30 text-neonPurple'
                }`}>
                  {msg.sender === 'bot' ? <Bot size={14} /> : <User size={14} />}
                </div>
                <div className={`max-w-[75%] rounded-xl p-3 text-xs leading-relaxed ${
                  msg.sender === 'bot'
                    ? 'bg-[#0f0e26]/90 text-gray-200 border border-neonPurple/10 rounded-tl-none'
                    : 'bg-neonBlue/10 text-white border border-neonBlue/20 rounded-tr-none'
                }`}>
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span className="block text-[8px] text-gray-500 text-right mt-1.5">{msg.time}</span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start space-x-2">
                <div className="w-7 h-7 rounded-full bg-neonPurple/10 border border-neonPurple/30 text-neonBlue flex items-center justify-center">
                  <Bot size={14} />
                </div>
                <div className="bg-[#0f0e26]/90 border border-neonPurple/10 rounded-xl rounded-tl-none p-3 text-xs flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-neonBlue rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-neonPurple rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-neonCyan rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 border-t border-glassBorder flex items-center space-x-2 bg-black/20">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about projects, skills..."
              className="flex-1 bg-white/5 border border-glassBorder rounded-xl py-2 px-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue/30 transition-all font-mono"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-gradient-to-tr from-neonPurple to-neonBlue text-white hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] hover:scale-105 transition-all duration-300"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
