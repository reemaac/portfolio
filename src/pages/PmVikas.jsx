import React, { useState } from 'react';
import { Shield, Cpu, Cloud, Award, Calendar, BookOpen, Layers, Terminal, ArrowUpRight, ChevronRight, Activity, Search } from 'lucide-react';
import { journalDays } from './journalData';

function DayCard({ day }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className={`day-card glass-panel border border-glassBorder accent-${day.accent} ${isOpen ? 'open' : ''} bg-black/25`}>
      <button
        className="day-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="day-number">Day {day.n}</span>
        <div className="day-meta">
          <div className="day-title">{day.title}</div>
          <div className="day-subtitle">{day.subtitle}</div>
          <div className="day-tags">
            {day.tags.map((tag) => (
              <span key={tag} className={`day-tag ${day.accent}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="day-toggle" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className="day-body">
        <div className="day-content space-y-4">
          {day.blocks.map((block, idx) => {
            if (block.exercises) {
              return (
                <div key={idx} className="exercise-box">
                  <ol>
                    {block.exercises.map((ex, exIdx) => (
                      <li key={exIdx}>{ex}</li>
                    ))}
                  </ol>
                </div>
              );
            }
            if (block.scribble) {
              return (
                <p key={idx} className="scribble">
                  {block.scribble}
                </p>
              );
            }
            if (block.idea) {
              return (
                <div key={idx} className="idea-card">
                  <h4>{block.idea.title}</h4>
                  {block.idea.body}
                </div>
              );
            }
            if (block.callout) {
              return (
                <div key={idx} className={`callout ${block.callout.kind || ''}`}>
                  <div className="callout-label">{block.callout.label}</div>
                  <div className="callout-text">{block.callout.text}</div>
                </div>
              );
            }
            return (
              <div key={idx} className="topic-block">
                {block.label && <div className="topic-label">{block.label}</div>}
                <div className="topic-body">{block.body}</div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default function PmVikas() {
  const [activeRoadmapNode, setActiveRoadmapNode] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  // Get all unique tags across all days
  const allTags = ['All', ...new Set(journalDays.flatMap(day => day.tags))];

  // Filter days based on search query and selected tag
  const filteredDays = journalDays.filter(day => {
    const matchesSearch = 
      day.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      day.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      day.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesTag = selectedTag === 'All' || day.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });



  const roadmapNodes = [
    {
      title: 'PM-VIKAS Program Completion',
      timeline: 'Completed - June 30, 2025',
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
    }
  ];

  const handleDownloadCert = () => {
    alert("Simulating PDF Download: PM-VIKAS_IoT_Certification.pdf. Authentic credentials issued by the Skill India Initiative.");
  };

  return (
    <div className="w-full pt-28 px-4 sm:px-6 max-w-6xl mx-auto space-y-28">
      {/* Page Header */}
      <section className="space-y-6 text-center max-w-3xl mx-auto pt-6">
        <div className="inline-flex items-center space-x-2 py-1 px-3.5 rounded-full bg-neonCyan/10 border border-neonCyan/25 text-neonCyan text-xs font-semibold uppercase font-mono tracking-wider">
          <Activity size={12} className="animate-pulse" />
          <span>Under the Ministry of Education</span>
        </div>
        <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl text-white">
          PM-VIKAS IoT Assistant
        </h1>
        <p className="text-sm text-gray-400 leading-relaxed">
          An in-depth review of my training journey, certificates, hands-on projects, and tech competencies achieved under the Prime Minister's Skill Development Initiative for Internet of Things.
        </p>
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

      {/* Daily Class Journal Section */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="font-orbitron font-bold text-xl sm:text-2xl text-white">Daily Class Journal</h2>
          <p className="text-xs text-gray-400">Interactive session-by-session ledger of my learning pathway at IIIT Kottayam.</p>
        </div>

        {/* Search & Tag Filter HUD */}
        <div className="glass-panel p-6 rounded-2xl border border-glassBorder space-y-6 max-w-4xl mx-auto bg-black/30">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search input */}
            <div className="relative w-full md:flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search class topics, formulas, tools, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-glassBorder rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-neonBlue transition-colors font-mono"
              />
            </div>
            
            {/* Quick Tag filter dropdown */}
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <span className="text-[10px] font-mono text-gray-500 uppercase whitespace-nowrap">Filter Tag:</span>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="flex-1 md:w-48 bg-black/40 border border-glassBorder rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-neonBlue font-mono cursor-pointer"
              >
                {allTags.map(tag => (
                  <option key={tag} value={tag} className="bg-darkBg">
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Suggested Tags pills */}
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-[9px] font-mono text-gray-500 uppercase mr-1">Quick Select:</span>
            {['All', 'Network Theory', 'Arduino', 'Tinkercad', 'Logic Gates', 'Cisco Packet Tracer', 'Microprocessors'].map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`text-[9px] font-mono py-1 px-2.5 rounded-full border transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-neonBlue/15 border-neonBlue text-neonBlue shadow-neon-blue/20'
                    : 'bg-white/5 border-glassBorder text-gray-400 hover:text-white hover:border-gray-500'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline rail with DayCards */}
        <div className="max-w-4xl mx-auto timeline-rail space-y-6">
          {filteredDays.length > 0 ? (
            filteredDays.map((day) => (
              <DayCard key={day.n} day={day} />
            ))
          ) : (
            <div className="text-center py-12 glass-panel border border-glassBorder rounded-2xl bg-black/20">
              <p className="text-sm text-gray-500 font-mono">NO SESSIONS FOUND MATCHING THE ACTIVE SEARCH FILTERS</p>
            </div>
          )}
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
              <h3 className="font-orbitron font-bold text-sm text-white">IoT Assistant Certificate</h3>
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
