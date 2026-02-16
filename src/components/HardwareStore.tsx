import React, { useState } from 'react';

interface Product {
  id: string;
  name: string;
  material: string;
  tier: string;
  price: string;
  features: string[];
  image: string;
}

const HardwareStore: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [dnaData, setDnaData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const products: Product[] = [
    {
      id: 'foundational-node',
      name: 'The Foundational Node',
      material: 'High-Grade Substrate',
      tier: 'Tier 1 / Basic Logic',
      price: '$89',
      features: ['NFC + QR Identity Bridge', 'Standard vCard Logic', 'Lifetime Static Hosting', 'Minimalist Profile Design'],
      image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 'executive-node',
      name: 'The Executive Node',
      material: 'High-Grade Substrate',
      tier: 'Tier 2 / Managed Infrastructure',
      price: '$149',
      features: ['Dynamic Redirect Control', 'Managed Profile CMS', 'Real-time Analytics Dashboard', 'Priority Manufacturing'],
      image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 'architect-node',
      name: 'The Architect Node',
      material: 'High-Grade Substrate',
      tier: 'Tier 3 / Engineered Ecosystem',
      price: '$249',
      features: ['Advanced System Architecture', 'Full CRM & Automation Bridge', 'Custom Workflow Engineering', 'Priority Engineering Support'],
      image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400',
    }
  ];

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setDnaData({
      finish: 'Optically Clear',
      identity_type: 'contact identity'
    });
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  const generateDnaString = () => {
    if (!selectedProduct) return '';
    const header = `--- PROJECT DNA: ${selectedProduct.name.toUpperCase()} ---`;
    const body = Object.entries(dnaData)
      .filter(([key]) => key !== 'operator_name' && key !== 'operator_email')
      .map(([key, value]) => `${key.toUpperCase().replace(/_/g, ' ')}: ${value || '[NOT SPECIFIED]'}`)
      .join('\n');
    const footer = `--- END TRANSMISSION ---`;
    return `${header}\n${body}\n${footer}`;
  };

  const handleSubmit = async () => {
    if (!dnaData.operator_name || !dnaData.operator_email || !dnaData.payment_method || !dnaData.payment_identifier) {
      alert("Incomplete Identification: Name, Email, and Payment Protocol are mandatory for transmission.");
      return;
    }

    setIsSubmitting(true);
    const compiledMessage = generateDnaString();

    const payload = {
      name: dnaData.operator_name,
      email: dnaData.operator_email,
      service: `Hardware_Order: ${selectedProduct?.name}`,
      message: compiledMessage,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('https://formspree.io/f/mqelgeag', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Transmission interrupted. Protocol error. Please retry.');
      }
    } catch (error) {
      alert('Network failure. Connection to Node Architecture lost.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsSubmitted(false);
  };

  return (
    <section id="shop" className="py-24 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-[#E5B1B1]"></span>
              <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#E5B1B1]">Consistent Form. Bespoke Logic.</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#F8F8F8] tracking-tighter italic">
              Hardware <span className="rose-gold-shine">Selection</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mt-4 italic leading-relaxed text-sm md:text-base">
              Every Node is encased in a high-grade substrate. Exterior consistency meets bespoke interior logic.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-[#1A1A1B] border border-white/5 overflow-hidden flex flex-col shadow-2xl transition-all hover:border-[#E5B1B1]/30">
              <div className="aspect-[4/3] relative overflow-hidden bg-zinc-900 border-b border-white/5">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 grayscale" />
                <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md border border-[#E5B1B1]/30 px-4 py-2 text-[#E5B1B1] font-black text-xl shadow-xl">{product.price}</div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">{product.name}</h3>
                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features.map(f => (
                    <li key={f} className="text-xs text-gray-400 flex items-center gap-3">
                      <span className="w-1 h-1 bg-[#E5B1B1] rounded-full"></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => handleOrderClick(product)} className="w-full py-5 bg-[#E5B1B1] text-black font-black uppercase tracking-widest text-xs hover:brightness-110 transition-all shadow-lg">Configure & Order</button>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <div className="w-full max-w-2xl bg-[#1A1A1B] border border-[#E5B1B1]/30 shadow-2xl max-h-[90vh] overflow-y-auto relative">
              <button onClick={closeModal} className="absolute top-6 right-6 text-gray-500 hover:text-white text-2xl font-black">&times;</button>
              <div className="p-8 md:p-12">
                {!isSubmitted ? (
                  <div className="space-y-10 animate-fadeIn">
                    <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase">Build DNA Generator</h2>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">Operator Name</label>
                          <input className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm focus:border-[#E5B1B1]/50 outline-none" placeholder="FULL_NAME" value={dnaData.operator_name || ''} onChange={(e) => setDnaData({ ...dnaData, operator_name: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">Operator Email</label>
                          <input type="email" className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm focus:border-[#E5B1B1]/50 outline-none" placeholder="EMAIL_ADDRESS" value={dnaData.operator_email || ''} onChange={(e) => setDnaData({ ...dnaData, operator_email: e.target.value })} />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">Payment Method</label>
                          <select className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm outline-none" onChange={(e) => setDnaData({ ...dnaData, payment_method: e.target.value })} value={dnaData.payment_method || ''}>
                            <option value="">SELECT_METHOD</option>
                            <option value="paypal">PayPal</option>
                            <option value="cash-app">CashApp</option>
                            <option value="venmo">Venmo</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">Payment Identifier</label>
                          <input className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm outline-none" placeholder="ID_OR_EMAIL" value={dnaData.payment_identifier || ''} onChange={(e) => setDnaData({ ...dnaData, payment_identifier: e.target.value })} />
                        </div>
                      </div>
                    </div>
                    <button onClick={handleSubmit} disabled={isSubmitting} className={`w-full py-6 bg-[#E5B1B1] text-black font-black uppercase tracking-[0.4em] text-xs hover:brightness-110 transition-all ${isSubmitting ? 'opacity-50' : ''}`}>
                      {isSubmitting ? 'Initializing Transmission...' : 'Finalize Build & Submit'}
                    </button>
                  </div>
                ) : (
                  <div className="py-20 text-center animate-fadeIn space-y-4">
                    <div className="text-7xl">📡</div>
                    <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">Handshake Complete</h2>
                    <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">Project DNA transmitted successfully.</p>
                    <button onClick={closeModal} className="mt-8 text-white text-[10px] font-black uppercase tracking-widest hover:text-[#E5B1B1]">Close Configuration</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HardwareStore;