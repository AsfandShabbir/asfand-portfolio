import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const email = "theasfand616@gmail.com";
  const phone = "+92 325 7732616";

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-black text-neutral-100 relative overflow-hidden border-t border-neutral-800/80 min-h-[85vh] flex items-center">
      
      {/* Grid + Dots Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px)] bg-[size:4rem] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">
              {t.contact?.eyebrow || "GET IN TOUCH"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            {t.contact?.title || "Let's Work Together"}
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            {t.contact?.body || "Have a project in mind or need technical advisory? Reach out directly via email or WhatsApp."}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          
          {/* Email Card */}
          <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-200 backdrop-blur-sm flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700/50 text-emerald-400">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={() => handleCopy(email, 'email')}
                className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white px-3 py-1.5 rounded-md bg-neutral-800/60 hover:bg-neutral-800 border border-neutral-700/50 transition-colors"
              >
                {copiedType === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${email}`}
                className="text-base font-medium text-white hover:text-emerald-400 transition-colors block font-mono break-all"
              >
                {email}
              </a>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-all duration-200 backdrop-blur-sm flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-lg bg-neutral-800/80 border border-neutral-700/50 text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <a
                href="https://wa.me/923257732616"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-xs text-neutral-950 font-medium px-3 py-1.5 rounded-md bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                <span>Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                WhatsApp / Direct
              </span>
              <a
                href="https://wa.me/923257732616"
                target="_blank"
                rel="noreferrer noopener"
                className="text-base font-medium text-white hover:text-emerald-400 transition-colors block font-mono"
              >
                {phone}
              </a>
            </div>
          </div>

        </div>

        {/* Status Indicator */}
        <div className="mt-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects & consultation
          </span>
        </div>

      </div>
    </section>
  );
};