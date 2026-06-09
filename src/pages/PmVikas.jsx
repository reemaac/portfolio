import React, { useState } from 'react';
import { Shield, Cpu, Cloud, Award, Calendar, BookOpen, Layers, Terminal, ArrowUpRight, ChevronRight, Activity } from 'lucide-react';

export default function PmVikas() {
  const [activeRoadmapNode, setActiveRoadmapNode] = useState(0);

  const trainingModules = [
    {
      title: 'Phase 1: Basic Networking & Hardware Routing',
      duration: 'Weeks 1-4',
      skills: ['Cisco Packet Tracer', 'IP Subnetting', 'RJ45 Crimping', 'Switch & Router Configs'],
      desc: 'Mastered the foundation of network transport protocols, building secure VLAN topologies and understanding IP allocation structures.'
    },
    {
      title: 'Phase 2: Linux Administration & Security Hardening',
      duration: 'Weeks 5-8',
      skills: ['Shell Scripting', 'SSH keys configuration', 'UFW Firewall setup', 'User Access Permissions'],
      desc: 'Implemented secure headless server distributions on Linux platforms, writing shell automation scripts and hardening root assets against network intrusion.'
    },
    {
      title: 'Phase 3: Sensor Integration & Firmware Dev',
      duration: 'Weeks 9-12',
      skills: ['Arduino C++', 'ESP32 IoT Nodes', 'DHT22 / PIR / Soil Sensors', 'Relay Actuation'],
      desc: 'Designed hardware prototypes reading environment indicators and wiring safe high-voltage relay systems for household automation.'
    },
    {
      title: 'Phase 4: Cloud Telemetry & MQTT Brokers',
      duration: 'Weeks 13-16',
      skills: ['AWS IoT Core', 'MQTT Payload structure', 'Node-RED scripting', 'Database Logging'],
      desc: 'Established secure TLS handshake connections from ESP32 edge units to cloud database triggers, displaying telemetry dashboards in real-time.'
    }
  ];

  const projects = [
    {
      title: 'Automated Telemetry Weather Node',
      category: 'Cloud Telemetry',
      hardware: 'ESP32 + DHT22 Sensor + Oled Panel',
      software: 'Arduino IDE + AWS IoT Core + Lambda + DynamoDB',
      description: 'An edge weather station that reads temperature/humidity every 5 minutes and uses secure MQTT packets over TLS 1.2 to upload coordinates directly to AWS DynamoDB databases.',
      link: '#'
    },
    {
      title: 'Cybersecurity Network Traffic Sniffer',
      category: 'Network Auditing & Defense',
      hardware: 'Raspberry Pi 4 + Dual NIC Adaptors',
      software: 'Linux Bash + Wireshark Scripting + Email Webhooks',
      description: 'A hardware security watchdog. It captures real-time packets, analyzes port scanning requests via custom regex filters, and fires instantaneous email alerts when threats arise.',
      link: '#'
    },
    {
      title: 'Sensory Smart Home Automation Panel',
      category: 'Microcontrollers & Actuators',
      hardware: 'ESP32 + 4-Channel Relays + PIR + Solenoids',
      software: 'Local Webserver + Firebase Realtime DB + React HUD',
      description: 'A centralized automation board allowing users to toggle appliances, monitor intrusion telemetry via passive infrared sensors, and fail-safe the mains in case of heating anomalies.',
      link: '#'
    }
  ];

  const roadmapNodes = [
    {
      title: 'PM-VIKAS Program Completion',
      timeline: 'Completed - May 2025',
      status: 'Achieved',
      desc: 'Secured primary credentials in IoT networking, cloud configurations, and security audits under Ministry guidelines.',
      color: 'text-neonBlue border-neonBlue'
    },
    {
      title: 'AWS Certified Solutions Architect',
      timeline: 'Target - Dec 2025',
      status: 'In Progress',
      desc: 'Mastering advanced multi-tier cloud networking, auto-scaling clusters, and robust IAM governance schemes.',
      color: 'text-neonPurple border-neonPurple'
    },
    {
      title: 'IoT Security Specialization (GIAC)',
      timeline: 'Target - Mid 2026',
      status: 'Future Goal',
      desc: 'Specializing in cryptography handshakes for low-power microcontrollers and auditing firmware vectors.',
      color: 'text-neonCyan border-neonCyan'
    },
    {
      title: 'Senior Embedded Dev / Automation Engineer',
      timeline: 'Target - 2027',
      status: 'Career Vision',
      desc: 'Designing safe industrial-grade IoT controllers and autonomous cloud ingest engines for tech enterprises.',
      color: 'text-neonPink border-neonPink'
    }
  ];

  const handleDownloadCert = () => {
    alert("Simulating PDF Download: PM-VIKAS_IoT_Certification_NCVET.pdf. Authentic credentials issued by the Skill India Initiative.");
  };

  return (
    <div className="w-full pt-28 px-4 sm:px-6 max-w-6xl mx-auto space-y-28">
      {/* Page Header */}
      <section className="space-y-6 text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center space-x-2 py-1 px-3.5 rounded-full bg-neonCyan/10 border border-neonCyan/25 text-neonCyan text-xs font-semibold uppercase font-mono tracking-wider">
          <Activity size={12} className="animate-pulse" />
          <span>NCVET Accredited Training</span>
        </div>
        <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl text-white">
          PM-VIKAS IoT Assistant
        </h1>
        <p className="text-sm text-gray-400 leading-relaxed">
          An in-depth review of my training journey, certificates, hands-on projects, and tech competencies achieved under the Prime Minister's Skill Development Initiative for Internet of Things.
        </p>
      </section>

      {/* Program Timeline Modules */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white">Training Syllabus & Milestones</h2>
          <p className="text-xs text-gray-400">Chronological learning pathway and module breakdowns.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainingModules.map((mod, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass-panel border border-glassBorder flex flex-col justify-between hover:border-neonPurple/45 hover:bg-black/40 transition-all duration-300 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-neonBlue bg-neonBlue/5 px-2.5 py-0.5 rounded-full border border-neonBlue/10">
                    {mod.duration}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Module {index + 1}</span>
                </div>
                <h3 className="font-orbitron font-bold text-sm text-white group-hover:text-neonBlue transition-colors">
                  {mod.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {mod.desc}
                </p>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-glassBorder/40">
                {mod.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[9px] font-mono text-gray-300 bg-white/5 py-0.5 px-2 rounded border border-glassBorder hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Showcase Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white">Program Prototype Portfolio</h2>
          <p className="text-xs text-gray-400">Practical edge nodes constructed during lab integrations.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl border border-glassBorder overflow-hidden flex flex-col hover:shadow-2xl hover:border-neonBlue/20 transition-all duration-300"
            >
              {/* Card visual banner */}
              <div className="h-28 bg-gradient-to-br from-neonPurple/10 via-black/40 to-neonBlue/10 p-5 border-b border-glassBorder/60 flex flex-col justify-between relative">
                <div className="absolute top-4 right-4 text-[9px] uppercase tracking-wider font-mono text-neonCyan bg-neonCyan/5 py-0.5 px-2.5 rounded-full border border-neonCyan/20">
                  {project.category}
                </div>
                <div className="p-2.5 bg-white/5 rounded-xl border border-glassBorder w-fit">
                  {idx === 0 ? <Cloud size={16} className="text-neonBlue" /> : idx === 1 ? <Shield size={16} className="text-neonPurple" /> : <Cpu size={16} className="text-neonCyan" />}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="font-orbitron font-bold text-base text-white">{project.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{project.description}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-glassBorder/40">
                  <div className="text-[10px] font-mono">
                    <span className="text-gray-500 uppercase">Hardware:</span>{' '}
                    <span className="text-gray-300">{project.hardware}</span>
                  </div>
                  <div className="text-[10px] font-mono">
                    <span className="text-gray-500 uppercase">Stack:</span>{' '}
                    <span className="text-gray-300">{project.software}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Career Pathway Section */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white">Autonomous Pathway</h2>
          <p className="text-xs text-gray-400">Future tech milestones connecting credentials to career objectives.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Pathway graphical selector (left) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
            {roadmapNodes.map((node, index) => (
              <button
                key={index}
                onClick={() => setActiveRoadmapNode(index)}
                className={`w-full text-left p-4 rounded-xl glass-panel border transition-all duration-300 flex items-center justify-between ${
                  activeRoadmapNode === index
                    ? 'border-neonBlue/40 bg-neonBlue/5 text-white shadow-neon-blue'
                    : 'border-glassBorder text-gray-400 hover:text-gray-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className={`w-6 h-6 rounded-full border flex items-center justify-center font-mono text-[10px] font-bold ${
                    activeRoadmapNode === index ? 'bg-neonBlue text-[#030014] border-neonBlue' : 'border-glassBorder text-gray-500'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="font-orbitron text-xs font-bold tracking-wider">{node.title}</span>
                </div>
                <ChevronRight size={14} className={`transition-transform ${activeRoadmapNode === index ? 'rotate-90 text-neonBlue' : 'text-gray-600'}`} />
              </button>
            ))}
          </div>

          {/* Node detail display panel (right) */}
          <div className="lg:col-span-7 rounded-2xl glass-panel border border-glassBorder p-8 relative flex flex-col justify-between min-h-[260px] bg-black/45 shadow-2xl">
            {/* Visual chip tracer background graphics */}
            <div className="absolute top-6 right-6 text-[10px] font-mono text-neonCyan bg-neonCyan/5 py-0.5 px-2.5 rounded-full border border-neonCyan/20">
              STATUS: {roadmapNodes[activeRoadmapNode].status}
            </div>

            <div className="space-y-4 pt-4">
              <span className="font-mono text-xs text-neonBlue font-semibold">
                {roadmapNodes[activeRoadmapNode].timeline}
              </span>
              <h3 className="font-orbitron font-extrabold text-xl text-white">
                {roadmapNodes[activeRoadmapNode].title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {roadmapNodes[activeRoadmapNode].desc}
              </p>
            </div>

            <div className="border-t border-glassBorder/60 pt-6 flex justify-between items-center text-[10px] text-gray-500 font-mono">
              <span>SYSTEM TRACE: PATH_NODE_0{activeRoadmapNode + 1}</span>
              <span className="text-neonPurple">VERIFIED PROTOCOL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Gallery Section */}
      <section className="max-w-2xl mx-auto space-y-10 text-center">
        <div className="space-y-3">
          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white">Credentials & Accreditations</h2>
          <p className="text-xs text-gray-400">Download authorized certifications issued under Ministry guidelines.</p>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-glassBorder shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 bg-black/40">
          <div className="flex items-center space-x-4 text-left">
            <div className="p-4 bg-white/5 rounded-2xl border border-glassBorder text-neonCyan">
              <Award size={32} className="pulse-glow" />
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-sm text-white">NCVET IoT Assistant Certificate</h3>
              <p className="text-xs text-gray-400">Credential ID: PMV-IOT-2025-0941A</p>
              <p className="text-[10px] font-mono text-gray-500 mt-1">ISSUED BY: Ministry of Skill Development, India</p>
            </div>
          </div>
          <button
            onClick={handleDownloadCert}
            className="w-full sm:w-auto py-2.5 px-6 rounded-xl bg-gradient-to-r from-neonPurple to-neonBlue text-white text-xs font-orbitron font-bold tracking-wider hover:shadow-neon-blue hover:scale-105 transition-all duration-300"
          >
            Download Certificate
          </button>
        </div>
      </section>
    </div>
  );
}
