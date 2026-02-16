
import React from 'react';
import { PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const projects: PortfolioItem[] = [
    {
      title: 'North MS Notary',
      url: 'https://northmsnotary.com',
      description: 'Professional service & compliance architecture.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Van Norman Movers',
      url: 'https://vannormanmovers.com',
      description: 'Utility-focused logistics & lead generation.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1-1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      title: 'CamNoble',
      url: 'https://dustymclean.github.io/CamNoble/#/',
      description: 'Modern, high-aesthetic UI & design flexibility.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#0F0F0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#F8F8F8]">Proof of Build</h2>
          <p className="text-gray-400">Engineering reliability across digital environments.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer" className="group p-10 bg-[#1A1A1B] border border-white/5 hover:border-[#E5B1B1]/50 transition-all shadow-lg">
              <div className="text-[#E5B1B1] mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 flex items-center justify-between text-[#F8F8F8]">
                {project.title}
                <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#E5B1B1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
