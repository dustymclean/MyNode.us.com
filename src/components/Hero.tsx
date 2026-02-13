import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-[#1A1A1B]">
      {/* Executive Rose Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#E5B1B1] blur-[150px] opacity-20"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#E5B1B1] blur-[120px] opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-[#E5B1B1]/30 bg-[#E5B1B1]/10 text-[#E5B1B1] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            NFC Integration & Performance Architecture
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.05] text-[#F8F8F8]">
            <span className="rose-gold-shine">Physical Cards.</span><br />
            Intelligent Destinations.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl font-light">
            I build NFC-enabled hardware and high-performance web environments. Whether you need a free digital VCD or a custom-engineered business ecosystem, the logic starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/vcd-builder"
              className="inline-flex justify-center items-center px-10 py-5 bg-[#E5B1B1] text-[#1A1A1B] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl"
            >
              Create Your Free VCD Card
            </Link>
            <Link 
              to="/#brief" 
              className="inline-flex justify-center items-center px-10 py-5 border border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              Commission a Custom Build
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;