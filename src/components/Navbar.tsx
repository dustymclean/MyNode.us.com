import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'Capability', href: '/#capability' },
    { name: 'Projects', href: '/projects' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/#about' },
    { name: 'Initiate Brief', href: '/#brief' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1B]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-4">
            <Link to="/" className="text-2xl font-black tracking-tighter text-[#F8F8F8]">
              MY<span className="text-[#E5B1B1]">NODE</span>
            </Link>
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 border border-white/5 bg-black/20 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Sys_Active_2026</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8 text-sm font-medium">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.href} 
                  className={({ isActive }) => 
                    `transition-colors uppercase tracking-widest text-[10px] font-black ${
                      isActive && !link.href.includes('#') ? 'text-[#E5B1B1]' : 'text-gray-400 hover:text-[#E5B1B1]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="pl-8 border-l border-white/5 text-[10px] font-mono text-gray-600 hidden xl:block">
              {time}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#E5B1B1]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} /> : <path d="M4 6h16M4 12h16m-7 6h7" strokeWidth={2} />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1A1A1B] border-b border-white/5 p-6 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsOpen(false)}
              className="block w-full text-left text-gray-400 uppercase tracking-widest text-xs font-black"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;