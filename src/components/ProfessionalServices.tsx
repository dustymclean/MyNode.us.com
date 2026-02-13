
import React from 'react';

const ProfessionalServices: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative p-12 bg-black border border-white/10 group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 group-hover:text-[#E5B1B1]/10 transition-colors">01</div>
            <h3 className="text-[#E5B1B1] text-xs font-bold uppercase tracking-widest mb-4">Tier 1</h3>
            <h2 className="text-3xl font-bold mb-6 text-[#F8F8F8]">The Executive Node</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Custom-branded physical NFC cards manufactured in premium materials: Matte, Metal, or Wood. Includes managed profile hosting with real-time redirect control.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5B1B1]"></span>
                Premium Hardware Selection
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5B1B1]"></span>
                Custom Profile CMS
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5B1B1]"></span>
                Real-time Destination Updates
              </li>
            </ul>
          </div>

          <div className="relative p-12 bg-black border border-[#E5B1B1]/30 group overflow-hidden">
             <div className="absolute top-0 right-0 p-8 text-8xl font-black text-[#E5B1B1]/5 group-hover:text-[#E5B1B1]/10 transition-colors">02</div>
            <h3 className="text-[#E5B1B1] text-xs font-bold uppercase tracking-widest mb-4">Tier 2</h3>
            <h2 className="text-3xl font-bold mb-6 text-[#F8F8F8]">The Engineered Node</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Full-scale custom website development. Integration with CRM, lead-capture logic, and automated workflows. Built for extreme speed and mobile-first interaction.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5B1B1]"></span>
                Zero-Bloat Engineering
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5B1B1]"></span>
                CRM & API Integrations
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5B1B1]"></span>
                Automated Lead Capture
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalServices;
