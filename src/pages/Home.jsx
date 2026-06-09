import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Cloud, Brain, Mail, Phone, ArrowRight, CheckCircle, Send, Sparkles } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Github = ({ size = 20 }) => (
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

const Linkedin = ({ size = 20 }) => (
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


// Custom typewriter animation hook
function useTypewriter(words, speed = 80, delay = 1600) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const activeWord = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
      }, speed / 2);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
      }, speed);
    }

    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return currentText;
}

export default function Home({ setActivePage, theme }) {
  const words = ['IoT Developer', 'Cybersecurity Learner', 'Cloud Computing Enthusiast', 'Future AI Engineer'];
  const typedText = useTypewriter(words);

  // Skill Card Interactivity State
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '', topic: 'Inquiry' });
  const [formStatus, setFormStatus] = useState(''); // 'sending', 'sent', ''
  const [errorMsg, setErrorMsg] = useState('');

  const skillsData = [
    {
      id: 'iot',
      title: 'IoT Engineering',
      icon: <Cpu className="w-8 h-8 text-neonBlue" />,
      tagline: 'Edge nodes, firmware development, and sensing layers.',
      color: 'border-neonBlue text-neonBlue',
      shadow: 'shadow-neon-blue',
      details: [
        'Microcontrollers: Arduino, ESP32, Raspberry Pi Pico',
        'Telemetry protocols: MQTT, HTTP REST, CoAP',
        'Physical integration: Relays, digital sensors, analog inputs',
        'Energy management: Low-power hibernation cycles'
      ]
    },
    {
      id: 'cyber',
      title: 'Cyber Defense',
      icon: <Shield className="w-8 h-8 text-neonPurple" />,
      tagline: 'Network penetration, packet auditing, and system hardening.',
      color: 'border-neonPurple text-neonPurple',
      shadow: 'shadow-neon-purple',
      details: [
        'Analysis tools: Wireshark packet capture, Nmap scanning',
        'Infrastructure: Secure SSH, Firewall configurations, VPC policies',
        'Security frameworks: OWASP Top 10 mitigation strategies',
        'Linux administration: Access Control Lists (ACLs), audit logs'
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud Telemetry',
      icon: <Cloud className="w-8 h-8 text-neonCyan" />,
      tagline: 'Scalable data ingest, serverless pipelines, and databases.',
      color: 'border-neonCyan text-neonCyan',
      shadow: 'shadow-neon-cyan',
      details: [
        'Amazon Web Services: AWS IoT Core, Lambda Functions, S3 Storage',
        'Databases: DynamoDB, Firebase Realtime Store, SQL databases',
        'Data routing: JSON payloads, message queues, webhooks',
        'Hosting & CI/CD: Netlify, GitHub Pages integration, Vite configs'
      ]
    },
    {
      id: 'ai',
      title: 'AI Foundations',
      icon: <Brain className="w-8 h-8 text-neonPink" />,
      tagline: 'Machine learning fundamentals and cognitive interfaces.',
      color: 'border-neonPink text-neonPink',
      shadow: 'shadow-[0_0_15px_rgba(255,0,127,0.35)]',
      details: [
        'Predictive modeling: Linear regression, K-Means clustering',
        'AI agents: Prompt structure, text parsing, context injection',
        'Data prep: Python libraries (NumPy, Pandas, Scikit-Learn)',
        'Cognitive UX: Voice Synthesis, speech-to-text navigation'
      ]
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please complete all matrix inputs.');
      return;
    }
    setErrorMsg('');
    setFormStatus('sending');

    // Simulate cybersecure transmission handshake
    setTimeout(() => {
      setFormStatus('sent');
      setFormData({ name: '', email: '', message: '', topic: 'Inquiry' });
      setTimeout(() => setFormStatus(''), 4000);
    }, 2000);
  };

  const handleDownloadResume = () => {
    alert("Downloading Reema_Anayam_Cherakkal_Resume.pdf (Simulated). Connect with me on LinkedIn for the full official CV!");
  };

  return (
    <div className="w-full pt-28 px-4 sm:px-6 max-w-6xl mx-auto space-y-28">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-6">
        {/* Hero Copy */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-neonPurple/10 border border-neonPurple/20 text-neonPurple text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={12} className="animate-spin-slow" />
            <span>Securing & Connecting The Future</span>
          </div>

          <div className="space-y-2">
            <h1 className="font-orbitron font-extrabold text-4xl sm:text-6xl tracking-tight text-white m-0">
              Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-neonCyan to-neonPurple">Reema Anayam Cherakkal</span>
            </h1>
            <p className="text-sm font-semibold tracking-widest text-neonBlue uppercase font-orbitron">
              AI, IoT & Cybersecurity Enthusiast
            </p>
          </div>

          {/* Typing Animation Wrapper */}
          <div className="h-10 text-lg sm:text-xl font-mono text-gray-300 font-semibold flex items-center justify-center lg:justify-start">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonBlue">&gt;&nbsp;</span>
            <span className="typing-cursor">{typedText}</span>
          </div>

          <p className="text-sm text-gray-400 max-w-lg leading-relaxed mx-auto lg:mx-0">
            I build responsive physical computing nodes, secure network configurations, and deploy cognitive web integrations. My work focuses on connecting embedded sensors to AWS cloud frameworks while enforcing cyber defense layers.
          </p>

          {/* CTA & Actions */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button
              onClick={() => setActivePage('pm-vikas')}
              className="py-3 px-6 rounded-xl bg-gradient-to-tr from-neonPurple to-neonBlue text-white text-xs font-orbitron font-bold tracking-wider hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore My Journey</span>
              <ArrowRight size={14} />
            </button>
            
            <button
              onClick={handleDownloadResume}
              className="py-3 px-6 rounded-xl border border-glassBorder bg-white/5 text-xs text-gray-300 font-orbitron hover:bg-white/10 hover:text-white transition-all"
            >
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-4 pt-2">
            <a href="https://github.com/reemaaac" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neonBlue hover:scale-110 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="mailto:reema.ac04@gmail.com" className="text-gray-400 hover:text-neonPurple hover:scale-110 transition-all">
              <Mail size={20} />
            </a>
            <a href="tel:+1234567890" className="text-gray-400 hover:text-neonCyan hover:scale-110 transition-all">
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Hero Graphic - Holographic Profile Avatar */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 group">
            {/* Holographic glowing rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-neonBlue/40 animate-spin-slow scale-105" />
            <div className="absolute inset-2 rounded-full border border-double border-neonPurple/30 animate-pulse-slow" />
            
            {/* Corner cybernetic HUD overlays */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neonBlue rounded-tl-xl" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neonPurple rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-neonPurple rounded-bl-xl" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neonBlue rounded-br-xl" />

            {/* Profile Image container */}
            <div className="w-full h-full rounded-2xl overflow-hidden glass-panel border border-glassBorder p-2 relative shadow-2xl flex items-center justify-center bg-black/40">
              <img 
                src={profileImg} 
                alt="Reema Profile" 
                className="w-full h-full object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-500"
              />
              {/* Scanline overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neonBlue/5 to-transparent bg-[length:100%_4px] pointer-events-none opacity-40 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto bg-black/35 rounded-3xl p-8 border border-glassBorder relative z-10">
        <div className="text-center space-y-1">
          <div className="font-orbitron font-extrabold text-3xl sm:text-4xl text-neonBlue neon-text-blue">
            12+
          </div>
          <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold font-mono">
            Projects Built
          </div>
        </div>
        <div className="text-center space-y-1">
          <div className="font-orbitron font-extrabold text-3xl sm:text-4xl text-neonPurple neon-text-purple">
            8+
          </div>
          <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold font-mono">
            Certifications
          </div>
        </div>
        <div className="text-center space-y-1 col-span-2 md:col-span-1">
          <div className="font-orbitron font-extrabold text-3xl sm:text-4xl text-neonCyan neon-text-cyan">
            15+
          </div>
          <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold font-mono">
            Skills Mastered
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-white">
            Technical Capabilities
          </h2>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            Click on a capability cluster below to query and decode specialized sub-systems.
          </p>
        </div>

        {/* Skill Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(selectedSkill === skill.id ? null : skill.id)}
              className={`p-6 rounded-2xl glass-panel glass-panel-hover border cursor-pointer flex flex-col justify-between ${
                selectedSkill === skill.id 
                  ? `${skill.color} ${skill.shadow} bg-black/60` 
                  : 'border-glassBorder hover:border-white/20'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/5 rounded-xl border border-glassBorder">
                    {skill.icon}
                  </div>
                  <span className={`text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full border ${
                    selectedSkill === skill.id 
                      ? 'bg-white/10' 
                      : 'bg-white/5 text-gray-400 border-glassBorder'
                  }`}>
                    {selectedSkill === skill.id ? 'Decoded' : 'Click to Decode'}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-orbitron font-bold text-lg text-white">{skill.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{skill.tagline}</p>
                </div>
              </div>

              {/* Collapsible details list */}
              <AnimatePresence>
                {selectedSkill === skill.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-6 pt-4 border-t border-glassBorder/60"
                  >
                    <ul className="space-y-2">
                      {skill.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2 text-xs text-gray-300">
                          <CheckCircle size={12} className="mt-1 text-neonCyan flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-section" className="max-w-2xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-white">
            Transmit Connection
          </h2>
          <p className="text-xs text-gray-400">
            Open secure communication portal to send an encrypted transmission.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-8 border border-glassBorder relative shadow-2xl">
          {/* Form HUD border decoration */}
          <div className="absolute top-4 right-4 text-[10px] text-gray-500 font-mono">
            SEC_CHANNEL: TLS_1.3
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-mono text-gray-400">Name / Node</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Recruiter, Coordinator"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-glassBorder rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue/30 transition-all font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-mono text-gray-400">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-glassBorder rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue/30 transition-all font-mono"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-mono text-gray-400">Transmission Topic</label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full bg-white/5 border border-glassBorder rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue/30 transition-all font-mono"
              >
                <option value="Inquiry" className="bg-[#0f0e26] text-white">General Inquiry</option>
                <option value="Internship" className="bg-[#0f0e26] text-white">Internship Opportunity</option>
                <option value="Project" className="bg-[#0f0e26] text-white">Collaborative Project</option>
                <option value="Security Audit" className="bg-[#0f0e26] text-white">Security / IoT Audit</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-mono text-gray-400">Payload Message</label>
              <textarea
                required
                rows="4"
                placeholder="Enter details of transmission..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-glassBorder rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue/30 transition-all font-mono"
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-red-400 font-mono">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={formStatus === 'sending' || formStatus === 'sent'}
              className={`w-full py-3.5 rounded-xl font-orbitron font-bold text-xs tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 ${
                formStatus === 'sent'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                  : 'bg-gradient-to-tr from-neonPurple to-neonBlue text-white hover:shadow-neon-blue hover:scale-[1.01]'
              }`}
            >
              {formStatus === 'sending' ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  <span>TRANSMITTING PORTAL HANDSHAKE...</span>
                </>
              ) : formStatus === 'sent' ? (
                <>
                  <CheckCircle size={14} className="mr-2" />
                  <span>TRANSMISSION SECURED & RECEIVED.</span>
                </>
              ) : (
                <>
                  <Send size={14} />
                  <span>INITIATE TRANSMISSION</span>
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
