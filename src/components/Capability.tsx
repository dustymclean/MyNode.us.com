
import React from 'react';

const Capability: React.FC = () => {
  const cases = [
    { title: 'Professional Networking', desc: 'A digital business card that syncs your contact info directly to a phone’s address book instantly.', icon: '📇' },
    { title: 'Emergency Medical IDs', desc: 'A card that provides life-saving medical data and emergency contacts to first responders.', icon: '🏥' },
    { title: 'Retail & Storefronts', desc: 'A "Smart Sign" for your shop that handles payments, reviews, or social follows effortlessly.', icon: '🛍️' },
    { title: 'Personal Utility', desc: 'Activate grocery lists, personal dashboards, or home automation with a single tap.', icon: '⚡' },
    { title: 'Asset Tracking', desc: 'Tag your equipment to pull up its entire service history and manual in the field.', icon: '📦' },
  ];

  return (
    <section id="capability" className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#F8F8F8]">What is a My Node ID?</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              It’s more than a card; it’s a device. I build both the physical card and the robust webpage it connects to.
            </p>
            <p className="text-gray-500 leading-relaxed italic border-l-2 border-[#E5B1B1] pl-6 py-2">
              "Because I build the entire stack, your Node can do almost anything. If you can imagine a workflow, I can build the Node to trigger it."
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div key={c.title} className="p-8 bg-[#1A1A1B] border border-white/5 hover:border-[#E5B1B1]/40 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block opacity-80 group-hover:opacity-100">{c.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[#F8F8F8]">{c.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{c.desc}</p>
            </div>
          ))}
          <div className="p-8 border border-dashed border-[#E5B1B1]/20 bg-[#E5B1B1]/5 flex flex-col justify-center items-center text-center">
            <h3 className="text-[#E5B1B1] font-black uppercase tracking-widest text-xs mb-2">Custom Deployment</h3>
            <p className="text-gray-500 text-[10px] italic">Engineered for your specific industry logic.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capability;
