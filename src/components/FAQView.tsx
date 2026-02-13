import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-white/5 group transition-all ${isOpen ? 'bg-white/[0.02]' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-8 px-6 flex items-center justify-between text-left group">
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{index < 10 ? `0${index}` : index}</span>
          <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${isOpen ? 'text-[#E5B1B1]' : 'text-[#F8F8F8] group-hover:text-[#E5B1B1]'}`}>{question}</h3>
        </div>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-[#E5B1B1] border-[#E5B1B1] rotate-45' : ''}`}>
          <svg className={`w-4 h-4 ${isOpen ? 'text-black' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-20 pb-10 text-gray-400 italic">{answer}</div>
      </div>
    </div>
  );
};

const FAQView: React.FC = () => {
  const navigate = useNavigate();
  const faqSections = [
    {
      title: "I / Fundamental Logic",
      items: [
        { question: "What exactly is NFC technology?", answer: "Near Field Communication (NFC) allows for wireless data transfer over short distances. It acts as a physical trigger for digital destinations." },
        { question: "Do recipients need an app to scan my card?", answer: "No. Modern smartphones have native NFC readers built-in." }
      ]
    },
    {
      title: "II / Engineering & Web Builds",
      items: [
        { question: "Why should I choose a custom build over a generic builder?", answer: "Generic builders are bloated. My builds are zero-bloat and performance-optimized." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1A1B] pt-32 pb-24">
      <Helmet>
        <title>Frequently Asked Logic | FAQ | MyNode</title>
        <meta name="description" content="Find answers to common questions about NFC technology, industrial identities, and custom engineering builds." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <button onClick={() => navigate('/')} className="text-[#E5B1B1] text-[10px] font-black uppercase tracking-[0.4em] mb-12 flex items-center gap-2 hover:translate-x-[-4px] transition-transform">&larr; Return to Node Home</button>
          <h1 className="text-5xl md:text-8xl font-black text-[#F8F8F8] tracking-tighter mb-6 leading-none italic">Frequently Asked <span className="rose-gold-shine">Logic</span></h1>
          <p className="text-xl text-gray-400 max-w-3xl font-light">Clarifying the intersection of hardware and intelligence.</p>
        </header>
        <div className="space-y-20">
          {faqSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[#E5B1B1] mb-8">{section.title}</h2>
              {section.items.map((item, iIndex) => <FAQItem key={item.question} question={item.question} answer={item.answer} index={iIndex + 1} />)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQView;