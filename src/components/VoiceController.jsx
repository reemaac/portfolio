import React, { useEffect, useRef } from 'react';

export default function VoiceController({ voiceActive, setVoiceActive, setActivePage, toggleTheme, openChat, addBotMessage }) {
  const recognitionRef = useRef(null);

  // Verbal speech response utility
  const speakFeedback = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any current speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.05;
      utterance.pitch = 1.0;
      utterance.volume = 0.8;
      
      // Select a futuristic sounding female voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(voice => 
        voice.name.includes('Google US English') || 
        voice.name.includes('Zira') || 
        voice.name.includes('Female')
      );
      if (preferredVoice) utterance.voice = preferredVoice;

      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    // Check Speech Recognition support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      if (voiceActive) {
        alert("Speech Recognition is not supported in this browser. Please try Google Chrome or Microsoft Edge.");
        setVoiceActive(false);
      }
      return;
    }

    if (!voiceActive) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      return;
    }

    // Initialize Recognition
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      speakFeedback("Voice command system online. Say navigate to Home, navigate to About, or navigate to PM-VIKAS.");
      addBotMessage("🎙️ Voice command system initialized. Try speaking commands like:\n• 'Go to Home'\n• 'Go to About'\n• 'Go to PM-VIKAS'\n• 'Toggle Theme'\n• 'Open Chat'");
    };

    recognition.onresult = (event) => {
      const latestResultIdx = event.results.length - 1;
      const transcript = event.results[latestResultIdx][0].transcript.toLowerCase().trim();
      console.log('Voice Command Received:', transcript);

      // Match commands
      if (transcript.includes('home') || transcript.includes('main') || transcript.includes('dashboard')) {
        speakFeedback("Navigating to Home");
        setActivePage('home');
      } 
      else if (transcript.includes('about') || transcript.includes('bio') || transcript.includes('education') || transcript.includes('skills')) {
        speakFeedback("Navigating to About");
        setActivePage('about');
      } 
      else if (transcript.includes('vikas') || transcript.includes('p m vikas') || transcript.includes('pm vikas') || transcript.includes('iot assistant')) {
        speakFeedback("Navigating to PM-VIKAS page");
        setActivePage('pm-vikas');
      } 
      else if (transcript.includes('theme') || transcript.includes('toggle mode') || transcript.includes('light mode') || transcript.includes('dark mode')) {
        speakFeedback("Toggling styling theme");
        toggleTheme();
      } 
      else if (transcript.includes('chat') || transcript.includes('bot') || transcript.includes('assistant') || transcript.includes('open chat')) {
        speakFeedback("Opening neural chatbot");
        openChat();
      } 
      else if (transcript.includes('hello') || transcript.includes('hi')) {
        speakFeedback("Greetings! How can I assist you with this portfolio today?");
        openChat();
        addBotMessage("👋 Hello there! Voice system detected your greeting. How can I help you navigate or explore this portfolio?");
      }
      else {
        // Unknown command feedback
        console.log('Unrecognized voice command:', transcript);
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      if (event.error === 'not-allowed') {
        alert("Microphone permission denied. Please allow microphone access to use voice commands.");
        setVoiceActive(false);
      }
    };

    recognition.onend = () => {
      // Auto-restart if voiceActive is still true
      if (voiceActive) {
        try {
          recognition.start();
        } catch (e) {
          console.log("Failed to restart speech recognition:", e);
        }
      }
    };

    try {
      recognition.start();
    } catch (e) {
      console.log("Failed to start speech recognition:", e);
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.onend = null; // Prevent restart loops on unmount
        recognitionRef.current.stop();
      }
    };
  }, [voiceActive]);

  // Make sure voices load properly in chrome
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  return null; // Invisible coordinator component
}
