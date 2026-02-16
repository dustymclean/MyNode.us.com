
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#0F0F0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black tracking-tighter text-[#F8F8F8]">
            MY<span className="text-[#E5B1B1]">NODE</span>
          </div>
          <div className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.4em] text-center md:text-right leading-relaxed">
            © 2026 MyNode.us.com | Engineered by Dusty Lyn McLean <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> Technologist. Notary Public. System Builder.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
