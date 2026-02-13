
import React, { useState } from 'react';
import { View } from '../types';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-white/5 group transition-all ${isOpen ? 'bg-white/[0.02]' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 px-6 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            {index < 10 ? `0${index}` : index}
          </span>
          <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${isOpen ? 'text-[#E5B1B1]' : 'text-[#F8F8F8] group-hover:text-[#E5B1B1]'}`}>
            {question}
          </h3>
        </div>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-[#E5B1B1] border-[#E5B1B1] rotate-45' : 'group-hover:border-[#E5B1B1]/50'}`}>
          <svg className={`w-4 h-4 ${isOpen ? 'text-black' : 'text-gray-500 group-hover:text-[#E5B1B1]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-20 pb-10 text-gray-400 leading-relaxed max-w-4xl italic">
          {answer}
        </div>
      </div>
    </div>
  );
};

interface FAQViewProps {
  setView: (view: View) => void;
}

const FAQView: React.FC<FAQViewProps> = ({ setView }) => {
  const faqSections = [
    {
      title: "I / Fundamental Logic",
      items: [
        {
          question: "What exactly is NFC technology?",
          answer: "Near Field Communication (NFC) allows for wireless data transfer over short distances (usually under 4cm). In the context of MyNode, it acts as a physical 'trigger' that launches an intelligent digital destination—like your professional VCD or a custom web ecosystem—on any smartphone without the need for an external app."
        },
        {
          question: "Do recipients need an app to scan my card?",
          answer: "No. Modern smartphones have native NFC readers built into their operating systems. A single tap activates the device's default browser or contact manager, providing a frictionless experience for your clients and colleagues."
        },
        {
          question: "What is a 'VCD'?",
          answer: "VCD stands for Virtual Contact Data. It is an engineered digital file (specifically a vCard 3.0 or 4.0 file) that contains your professional identity logic. When triggered via a Node, it prompts the recipient's phone to instantly save your details to their address book."
        }
      ]
    },
    {
      title: "II / Hardware & Manufacturing",
      items: [
        {
          question: "What materials are used for the physical Nodes?",
          answer: "I utilize high-grade substrates chosen for durability and professional aesthetic. Current offerings include optically clear acrylic, signature matte white, and industrial matte black. Each is engineered to protect the internal NFC chip from interference and physical wear."
        },
        {
          question: "Can I change the destination link later?",
          answer: "For Executive and Architect tier Nodes, yes. I build a management layer that allows you to remotely update where your physical card points without needing to replace the hardware. Foundational Nodes are typically static but can be upgraded to managed logic."
        },
        {
          question: "How long does the manufacturing process take?",
          answer: "Once the Project DNA is finalized, standard manufacturing and quality assurance testing takes 3-5 business days. Shipping varies by location, but the digital logic is often deployed and accessible before the physical card even arrives."
        }
      ]
    },
    {
      title: "III / Engineering & Web Builds",
      items: [
        {
          question: "Why should I choose a custom build over a generic builder?",
          answer: "Generic builders (like Linktree or Wix) are bloated with unnecessary scripts that slow down mobile performance. My builds are zero-bloat, performance-optimized, and specifically designed to trigger actions. I build logic, not just layouts."
        },
        {
          question: "Can my Node integrate with my existing CRM?",
          answer: "Absolutely. Engineering bridges to platforms like Airtable, HubSpot, or custom SQL databases is a core capability of the 'Architect' tier. We can automate lead capture, attendance tracking, or inventory logging directly from a tap."
        },
        {
          question: "How do you handle data security?",
          answer: "As a Notary Public and an Engineering student, I prioritize data integrity. All VCD compilations occur locally within the browser runtime when using the DIY tools, and custom builds utilize encrypted API handshakes to ensure project DNA remains secure."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1B] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <button 
            onClick={() => setView('home')}
            className="text-[#E5B1B1] text-[10px] font-black uppercase tracking-[0.4em] mb-12 flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
          >
            &larr; Return to Node Home
          </button>
          
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#E5B1B1]"></span>
            <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#E5B1B1]">System Documentation</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#F8F8F8] tracking-tighter mb-6 leading-none italic">
            Frequently Asked <span className="rose-gold-shine">Logic</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl font-light leading-relaxed">
            Clarifying the intersection of physical hardware and intelligent digital destinations. If your specific query isn't addressed here, initiate a brief for custom consultation.
          </p>
        </header>

        <div className="space-y-20">
          {faqSections.map((section, sIndex) => (
            <div key={section.title} className="animate-fadeIn">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#E5B1B1] whitespace-nowrap">
                  {section.title}
                </h2>
                <div className="h-[1px] bg-white/5 w-full"></div>
              </div>
              <div className="border-t border-white/5">
                {section.items.map((item, iIndex) => (
                  <FAQItem 
                    key={item.question} 
                    question={item.question} 
                    answer={item.answer} 
                    index={iIndex + 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-black p-12 border border-[#E5B1B1]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/[0.02] pointer-events-none select-none">QUERY</div>
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4 italic">Still have a hardware or logic-based question?</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              For complex engineering requirements or custom enterprise deployments, the best path forward is a direct project intake brief.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  setView('home');
                  setTimeout(() => document.querySelector('#brief')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="bg-[#E5B1B1] text-black px-10 py-5 font-black uppercase tracking-widest text-xs hover:brightness-110 transition-all shadow-xl"
              >
                Initiate Project Brief
              </button>
              <a 
                href="mailto:admin@mynode.us.com"
                className="border border-white/10 text-white px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all flex items-center justify-center"
              >
                Direct Email Inquiry
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-20 flex justify-between items-center text-[8px] font-mono text-gray-700 uppercase tracking-widest border-t border-white/5 pt-8">
          <span>Documentation_v3.2.0</span>
          <span>Last_Update: 2026_Q1</span>
          <span>Node_System: STABLE</span>
        </footer>
      </div>
    </div>
  );
};

export default FAQView;
