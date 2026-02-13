
import React from 'react';

const PricingTable: React.FC = () => {
  const tiers = [
    {
      name: 'Professional',
      target: 'Personal / Contact',
      setup: '$249',
      monthly: '$15',
      features: ['1x Premium NFC Card', 'VCD Profile Hosting', 'Real-time Redirection', 'Standard Support'],
      highlight: false
    },
    {
      name: 'Operator',
      target: 'Small Business / Utility',
      setup: '$749',
      monthly: '$45',
      features: ['3x Custom Branded Cards', 'Lead Capture Logic', 'CRM/Workflow Integration', 'Priority Shipping'],
      highlight: true
    },
    {
      name: 'Architect',
      target: 'Custom / Industrial',
      setup: '$2,500+',
      monthly: '$120+',
      features: ['Full Stack Development', 'Custom Hardware Engineering', 'API / IoT Integration', 'Direct Engineer Access'],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#1A1A1B] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#F8F8F8]">Simple, Transparent Investment</h2>
          <p className="text-gray-400">Paying for industrial-grade hardware, bespoke software, and secure infrastructure.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative p-10 bg-[#0F0F0F] border ${tier.highlight ? 'border-[#E5B1B1]' : 'border-white/5'} flex flex-col shadow-2xl`}>
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E5B1B1] text-[#1A1A1B] text-[10px] font-black px-4 py-1 uppercase tracking-widest shadow-lg">
                  Most Deployed
                </div>
              )}
              <h3 className="text-2xl font-bold mb-1 text-[#F8F8F8]">{tier.name}</h3>
              <p className="text-[#E5B1B1] text-[10px] font-black uppercase tracking-widest mb-6">{tier.target}</p>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-black text-white">{tier.setup}</span>
                  <span className="text-gray-600 text-[10px] uppercase font-bold">One-Time</span>
                </div>
                <div className="text-gray-500 text-sm italic">{tier.monthly} / monthly infrastructure</div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map(f => (
                  <li key={f} className="text-sm text-gray-500 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#E5B1B1] rounded-full"></span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 font-black uppercase tracking-widest text-xs transition-all ${tier.highlight ? 'bg-[#E5B1B1] text-[#1A1A1B] hover:brightness-110' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                Render Payment: {tier.setup}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto border-t border-white/5 pt-12">
          <blockquote className="text-xl text-gray-400 font-light italic leading-relaxed mb-8">
            "You are more than welcome to go ahead and render payment now. Once payment is confirmed, I will immediately begin the engineering process for your custom Node environment."
          </blockquote>
          <div className="flex flex-col items-center gap-4">
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">Requirement lock triggers immediate hardware manufacturing.</p>
            <p className="text-xs text-[#E5B1B1] uppercase tracking-widest font-black">Hardware ships within 3-5 business days.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
