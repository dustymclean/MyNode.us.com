
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-[#1A1A1B] border border-[#E5B1B1]/20 flex items-center justify-center relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#E5B1B1]/10 to-transparent"></div>
               <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none font-mono text-[8px] p-4 leading-relaxed overflow-hidden">
                 {Array.from({length: 100}).map((_, i) => (
                   <div key={i}>ENGINEERING_SYSTEMS_THINKING_PROCESSED_{i}</div>
                 ))}
               </div>
               <span className="text-[12rem] font-black text-white/5 absolute -bottom-10 -right-10 select-none">ARCH</span>
               <div className="z-10 text-center px-6">
                 <h3 className="text-4xl font-serif text-[#E5B1B1] mb-2 italic">Dusty McLean</h3>
                 <p className="text-xs uppercase tracking-[0.4em] font-bold text-[#F8F8F8]">Technologist & Developer</p>
                 <div className="mt-4 px-3 py-1 bg-[#E5B1B1]/10 border border-[#E5B1B1]/30 rounded-full inline-block">
                   <span className="text-[8px] text-[#E5B1B1] font-black uppercase tracking-widest">USM Industrial Engineering Student</span>
                 </div>
               </div>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-[#E5B1B1]"></span>
              <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#E5B1B1]">Who Is Dusty McLean?</span>
            </div>
            <h2 className="text-4xl font-bold mb-8 text-[#F8F8F8]">Engineering Efficiency.</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                No fluff. Just the credentials that matter for your business logic. I apply systems-thinking and efficiency to web architecture.
              </p>
              <ul className="space-y-4 pt-4 border-t border-white/5">
                <li className="flex items-start gap-4">
                  <span className="text-[#E5B1B1] font-black mt-1">/</span>
                  <p><strong className="text-[#F8F8F8]">Technologist & Developer:</strong> Focused on bridging physical hardware (NFC) with digital intelligence.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#E5B1B1] font-black mt-1">/</span>
                  <p><strong className="text-[#F8F8F8]">Industrial Engineering Student (USM):</strong> Currently attending the University of Southern Mississippi, applying industrial-grade efficiency to every build.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#E5B1B1] font-black mt-1">/</span>
                  <p><strong className="text-[#F8F8F8]">Commissioned Notary Public:</strong> Bringing a high standard of professional integrity and data security to every project I touch.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
