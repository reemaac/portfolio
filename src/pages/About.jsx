import React, { useState } from 'react';
import { Award, BookOpen, GraduationCap, Code, Server, Shield, Layers, Calendar, ExternalLink } from 'lucide-react';
import profileImg from '../assets/profile.png';

// Circular progress indicator component
function SkillCircle({ percentage, label, color, shadow }) {
  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center space-y-3 p-4 glass-panel rounded-2xl border border-glassBorder shadow-lg">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Background glow shadow */}
        <div className={`absolute w-12 h-12 rounded-full filter blur-[15px] opacity-25 ${shadow}`} />
        <svg height="100%" width="100%" viewBox="0 0 80 80" className="transform -rotate-90">
          <circle
            stroke="rgba(255, 255, 255, 0.05)"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke={color}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <span className="absolute font-orbitron font-bold text-sm text-white">{percentage}%</span>
      </div>
      <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 font-mono text-center">{label}</span>
    </div>
  );
}

export default function About() {
  const [activeCategory, setActiveCategory] = useState('languages');

  const timelineData = [
    {
      year: '2023 - Present',
      title: 'Bachelor of Technology (Computer Science Engineering)',
      institution: 'Technical University',
      description: 'Specializing in internet protocols, machine learning pipelines, and network defense architectures. Maintaining a CGPA of 8.9/10.',
      type: 'graduation'
    },
    {
      year: '2025',
      title: 'PM-VIKAS IoT Assistant Training Programme',
      institution: 'Ministry of Skill Development & NCVET',
      description: 'Underwent professional training on node integration, industrial telemetry, AWS cloud interfaces, Linux server administration, and cyber security audits.',
      type: 'training'
    },
    {
      year: '2021 - 2023',
      title: 'Higher Secondary Education (Science & Computers)',
      institution: 'National Public School',
      description: 'Completed physics, mathematics, and computer sciences with score of 94% overall.',
      type: 'school'
    }
  ];

  const techStack = {
    languages: ['Python', 'JavaScript', 'C++', 'HTML5', 'CSS3', 'Bash Shell', 'SQL'],
    hardware: ['Arduino IDE', 'ESP32 NodeMCU', 'Raspberry Pi', 'Sensors (DHT22, Ultrasonic, PIR)', 'Relays & Actuators'],
    protocols: ['MQTT', 'HTTP REST API', 'CoAP', 'TCP/IP', 'SSH', 'DNS/DHCP'],
    security: ['Wireshark packet analysis', 'Nmap asset discovery', 'Kali Linux tools', 'Linux firewall config (UFW)', 'OWASP Mitigation']
  };

  const certifications = [
    {
      title: 'PM-VIKAS NCVET IoT Assistant Certification',
      issuer: 'Ministry of Skill Development & NCVET',
      date: 'May 2025',
      grade: 'Distinction',
      icon: <Award className="text-neonCyan w-6 h-6" />
    },
    {
      title: 'Cisco Introduction to Networks (CCNA v7)',
      issuer: 'Cisco Networking Academy',
      date: 'Dec 2024',
      grade: 'Authorized badge',
      icon: <Layers className="text-neonBlue w-6 h-6" />
    },
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services Academy',
      date: 'Feb 2025',
      grade: '88% Score',
      icon: <Server className="text-neonPurple w-6 h-6" />
    },
    {
      title: 'Linux Operating System & Security Essentials',
      issuer: 'Red Hat Academy / NDG Linux',
      date: 'Oct 2024',
      grade: 'Verified',
      icon: <Shield className="text-neonPink w-6 h-6" />
    }
  ];

  return (
    <div className="w-full pt-28 px-4 sm:px-6 max-w-6xl mx-auto space-y-28">
      {/* Profile Biography Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 pt-6">
        <div className="w-56 h-56 md:w-64 md:h-64 flex-shrink-0 relative">
          <div className="absolute inset-0 rounded-2xl border border-neonPurple animate-pulse-slow" />
          <div className="absolute top-2 left-2 w-full h-full rounded-2xl bg-gradient-to-tr from-neonPurple to-neonBlue -z-10 opacity-30 blur-[6px]" />
          <div className="w-full h-full rounded-2xl overflow-hidden glass-panel border border-glassBorder p-2 relative bg-black/40">
            <img src={profileImg} alt="About Me" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>

        <div className="flex-grow space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-white">About Me</h2>
            <div className="h-[2px] w-20 bg-gradient-to-r from-neonPurple to-neonBlue mx-auto md:mx-0 rounded-full shadow-neon-blue" />
          </div>
          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
            I am a third-year Computer Science Engineering student obsessed with linking the physical and digital worlds securely. My focus lies at the intersection of microcontrollers, IoT data transmission layers, and defense hardening.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Driven by curiosity, I enjoy experimenting with low-power sensor arrays, studying network anomalies via packet sniffers, and building automated pipelines on cloud architecture. My career objective is to work as an Embedded IoT and Cyber Defense Engineer, engineering secure cyber-physical solutions.
          </p>
        </div>
      </section>

      {/* Skills visualized as Circles */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white">Technical Metrics</h3>
          <p className="text-xs text-gray-400">Core discipline expertise mapped via system checks.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkillCircle percentage={90} label="IoT Nodes & Hardware" color="#00f0ff" shadow="bg-neonBlue" />
          <SkillCircle percentage={85} label="Cybersecurity Hardening" color="#ad00ff" shadow="bg-neonPurple" />
          <SkillCircle percentage={80} label="AWS Cloud & Telemetry" color="#00ffd1" shadow="bg-neonCyan" />
          <SkillCircle percentage={85} label="Python & Software" color="#ff007f" shadow="bg-neonPink" />
        </div>
      </section>

      {/* Interactive Technology Stack Badge Section */}
      <section className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white">Technical Arsenal</h3>
          <p className="text-xs text-gray-400">Decoded software components, libraries, and frameworks.</p>
        </div>

        <div className="glass-panel rounded-3xl p-8 border border-glassBorder max-w-4xl mx-auto space-y-8">
          {/* Tabs header */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-glassBorder/60 pb-6">
            {Object.keys(techStack).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-2 px-4 rounded-xl text-xs font-orbitron font-semibold tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-neonPurple/20 to-neonBlue/20 text-neonBlue border border-neonBlue/40 shadow-neon-blue'
                    : 'text-gray-400 hover:text-white border border-transparent'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Badges container */}
          <div className="flex flex-wrap justify-center gap-3 min-h-[80px] items-center">
            {techStack[activeCategory].map((tech) => (
              <div
                key={tech}
                className="py-2.5 px-4 rounded-xl bg-white/5 border border-glassBorder/80 text-xs font-mono font-semibold text-gray-200 shadow-sm flex items-center space-x-2 hover:border-neonBlue/40 hover:text-white hover:scale-105 transition-all duration-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-neonCyan pulse-glow" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Timeline Section */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white">Education Matrix</h3>
          <p className="text-xs text-gray-400">Chronological learning pathway and credentials.</p>
        </div>

        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l border-glassBorder/60 space-y-12">
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Animated node dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#030014] border border-glassBorder flex items-center justify-center group-hover:border-neonBlue group-hover:shadow-neon-blue transition-all duration-300">
                {item.type === 'graduation' ? (
                  <GraduationCap size={12} className="text-neonPurple" />
                ) : item.type === 'training' ? (
                  <BookOpen size={12} className="text-neonCyan" />
                ) : (
                  <Calendar size={12} className="text-neonBlue" />
                )}
              </div>

              {/* Box container */}
              <div className="glass-panel p-6 rounded-2xl border border-glassBorder group-hover:border-glassBorder/80 group-hover:bg-[#07061a] transition-all duration-300 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-mono text-xs text-neonBlue font-semibold">{item.year}</span>
                  <span className="text-[10px] text-neonPurple font-semibold font-mono tracking-wider uppercase bg-neonPurple/5 py-0.5 px-2.5 rounded-full border border-neonPurple/10 w-fit">
                    {item.institution}
                  </span>
                </div>
                <h4 className="font-orbitron font-bold text-base text-white group-hover:text-neonBlue transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white">Certifications</h3>
          <p className="text-xs text-gray-400">Verified credentials issued by accredited regulatory bodies.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass-panel glass-panel-hover border border-glassBorder flex items-start space-x-4"
            >
              <div className="p-3 bg-white/5 rounded-xl border border-glassBorder flex-shrink-0">
                {cert.icon}
              </div>
              <div className="space-y-1.5">
                <h4 className="font-orbitron font-bold text-sm text-white leading-snug">
                  {cert.title}
                </h4>
                <p className="text-xs text-gray-400">{cert.issuer}</p>
                <div className="flex items-center space-x-4 pt-1 text-[10px] font-mono text-gray-500">
                  <span>DATE: {cert.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                  <span className="text-neonCyan">GRADE: {cert.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
