import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Zap, Cpu } from 'lucide-react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hello! I'm Asfand's AI Assistant. Ask me anything about his architecture skills, production projects, stack, or direct contact!"
    }
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('skill') || q.includes('stack') || q.includes('technolog')) {
      return "Asfand specializes in Backend Engineering & Systems. Primary stack: JavaScript, React.js, Node.js, Express.js, MongoDB, RESTful APIs, and Docker containerization.";
    } 
    if (q.includes('project') || q.includes('work') || q.includes('portfolio')) {
      return "Asfand builds scalable enterprise backends, real-world SaaS products, high-throughput APIs, and intelligent AI-integrated applications.";
    } 
    if (q.includes('service') || q.includes('hire') || q.includes('offer')) {
      return "Services include: Custom Backend Architecture, High-Speed API Design, Full-Stack Web App Development, Database Performance Tuning, and AI Model Integration.";
    } 
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('whatsapp')) {
      return "Reach Asfand directly via Email: theasfand@gmail.com or WhatsApp: +92 325 7732616.";
    } 
    if (q.includes('about') || q.includes('who') || q.includes('hamza')) {
      return "Asfand Shabbir is a Software Engineer focused on building scalable web apps, AI solutions, and reliable software architecture.";
    } 
    if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('aoa')) {
      return "Greetings! How can I assist you with Asfand's technical capabilities or projects?";
    }

    return "I am synced with Asfand's technical record. You can inquire about his tech stack, featured projects, services, or direct contact details.";
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const newMessages: Message[] = [...messages, { sender: 'user', text: userText }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      const botAnswer = getBotResponse(userText);
      setMessages((prev) => [...prev, { sender: 'bot', text: botAnswer }]);
    }, 350);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* 🟢 NEON GREEN CHATBOT BUTTON */}
      {!isOpen && (
        <div className="relative group">
          {/* Emerald Green Backlight Aura */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-400 opacity-85 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse" />
          
          {/* Rotating Orbital Green Ring */}
          <div className="absolute -inset-2 rounded-full border border-emerald-400/40 animate-[spin_8s_linear_infinite] pointer-events-none" />

          <button
            onClick={() => setIsOpen(true)}
            className="relative flex items-center gap-3.5 px-5 py-3.5 rounded-full bg-neutral-950 border border-emerald-500/80 text-white shadow-[0_0_25px_rgba(16,185,129,0.3)] backdrop-blur-xl group-hover:scale-105 transition-all duration-300"
            aria-label="Open AI Assistant"
          >
            {/* 🟢 GLOWING GREEN AI ICON */}
            <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-400 to-green-300 text-black shadow-lg shadow-emerald-500/60">
              
              {/* AI Spark Vector */}
              <svg 
                className="w-5 h-5 text-neutral-950 fill-current animate-pulse" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                <path d="M19 2L20.25 5.75L24 7L20.25 8.25L19 12L17.75 8.25L14 7L17.75 5.75L19 2Z" opacity="0.8" />
              </svg>

              {/* Status Ping Dot */}
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-200 border-2 border-black animate-ping" />
            </div>

            {/* Button Text */}
            <div className="flex flex-col text-left">
              <span className="text-xs font-mono font-bold tracking-wider text-emerald-300 group-hover:text-emerald-200 transition-colors flex items-center gap-1">
                AI BOT <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400 animate-bounce" />
              </span>
              <span className="text-[10px] font-mono text-neutral-300 group-hover:text-white">
                Ask Architecture
              </span>
            </div>
          </button>
        </div>
      )}

      {/* 🔮 CHATBOT WINDOW DESIGN */}
      {isOpen && (
        <div className="w-[340px] sm:w-[390px] h-[480px] rounded-2xl bg-neutral-950/95 border border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.2)] flex flex-col overflow-hidden backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="p-4 bg-neutral-900/80 border-b border-neutral-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-neutral-950" />
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-white tracking-wider flex items-center gap-1.5">
                  ASFAND_AI.SYS <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">v2.4</span>
                </h4>
                <p className="text-[10px] font-mono text-neutral-400">Synced with Portfolio Systems</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/80 border border-transparent hover:border-neutral-700 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:12px_12px] opacity-90">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400 shadow-sm">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed font-sans ${
                    msg.sender === 'user'
                      ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-100 rounded-tr-none shadow-sm'
                      : 'bg-neutral-900/90 border border-neutral-800 text-neutral-200 rounded-tl-none backdrop-blur-sm'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0 text-neutral-300">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Interface */}
          <form onSubmit={handleSend} className="p-3 bg-neutral-900/90 border-t border-neutral-800/80 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your query (skills, contact, stack)..."
              className="flex-1 bg-neutral-950 border border-neutral-800 focus:border-emerald-500/60 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-all font-mono"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-gradient-to-tr from-emerald-500 to-green-400 text-black hover:brightness-110 active:scale-95 transition-all shrink-0 shadow-md shadow-emerald-500/30"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
};