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
    // Initialize with industrial defaults
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
      const response = await fetch('https://formspree.io/f/xvzbgoal', {
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
              Every Node is encased in a high-grade substrate, available in optically clear, signature white, or matte black, chosen for its durability and minimalist profile. While the exterior maintains a consistent professional aesthetic, the true distinction lies in the backend engineering and the unique digital logic integrated into your specific deployment.
            </p>
            <p className="text-[10px] font-mono text-[#E5B1B1] mt-2 uppercase tracking-widest">
              *The size and type of your tag depends on your specific application requirements.
            </p>
          </div>
          <div className="hidden md:block text-[10px] font-mono text-gray-700 uppercase tracking-widest text-right">
            Material_Base: HIGH_GRADE_SUBSTRATE <br />
            Engineering_Protocol: V3.2_STABLE
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-[#1A1A1B] border border-white/5 overflow-hidden flex flex-col shadow-2xl transition-all hover:border-[#E5B1B1]/30">
              <div className="aspect-[4/3] relative overflow-hidden bg-zinc-900 border-b border-white/5">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 grayscale"
                />
                <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md border border-[#E5B1B1]/30 px-4 py-2 text-[#E5B1B1] font-black text-xl shadow-xl">
                  {product.price}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#E5B1B1] bg-black/60 px-2 py-1 backdrop-blur-sm">
                    {product.tier}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-6">
                  <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-500 mb-1 block">Component Material: {product.material}</span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{product.name}</h3>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features.map(f => (
                    <li key={f} className="text-xs text-gray-400 flex items-center gap-3">
                      <span className="w-1 h-1 bg-[#E5B1B1] rounded-full flex-shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleOrderClick(product)}
                  className="w-full py-5 bg-[#E5B1B1] text-black font-black uppercase tracking-widest text-xs hover:brightness-110 transition-all active:scale-[0.98] shadow-lg"
                >
                  Configure & Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Configurator */}
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <div className="w-full max-w-2xl bg-[#1A1A1B] border border-[#E5B1B1]/30 shadow-2xl max-h-[90vh] overflow-y-auto relative">
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 text-gray-500 hover:text-white text-2xl font-black"
              >
                &times;
              </button>
              
              <div className="p-8 md:p-12">
                {!isSubmitted ? (
                  <div className="space-y-10 animate-fadeIn">
                    <div className="mb-10">
                       <div className="flex items-center gap-2 mb-2">
                         <span className="w-3 h-3 bg-[#E5B1B1] rounded-full animate-pulse"></span>
                         <span className="text-[10px] uppercase font-black tracking-[0.4em] text-[#E5B1B1]">Configuring: {selectedProduct.name}</span>
                       </div>
                       <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Build <span className="rose-gold-shine">DNA</span> Generator</h2>
                    </div>

                    <div className="bg-black/40 p-6 border border-white/5 rounded-sm">
                      <p className="text-sm text-gray-400 italic leading-relaxed">
                        Complete the following logic template and identification. Upon finalization, your build parameters will be transmitted directly to the engineering queue.
                      </p>
                    </div>

                    {/* Operator ID */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-black tracking-[0.4em] text-gray-500">01 / Endpoint Identification</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">Operator Name</label>
                          <input 
                            className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm focus:border-[#E5B1B1]/50 outline-none"
                            placeholder="FULL_NAME"
                            value={dnaData.operator_name || ''}
                            onChange={(e) => setDnaData({ ...dnaData, operator_name: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">Operator Email</label>
                          <input 
                            type="email"
                            className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm focus:border-[#E5B1B1]/50 outline-none"
                            placeholder="EMAIL_ADDRESS"
                            value={dnaData.operator_email || ''}
                            onChange={(e) => setDnaData({ ...dnaData, operator_email: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Payment Protocol */}
                    <div className="space-y-6 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-black tracking-[0.4em] text-gray-500">02 / Payment Protocol</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">Method</label>
                          <select 
                            className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm focus:border-[#E5B1B1]/50 outline-none appearance-none cursor-pointer"
                            onChange={(e) => setDnaData({ ...dnaData, payment_method: e.target.value, payment_identifier: '' })}
                            value={dnaData.payment_method || ''}
                          >
                            <option value="" disabled className="bg-zinc-900 text-gray-600">SELECT_METHOD</option>
                            <option value="paypal" className="bg-zinc-900">PayPal</option>
                            <option value="cash-app" className="bg-zinc-900">Cash-App</option>
                            <option value="venmo" className="bg-zinc-900">Venmo</option>
                            <option value="invoice" className="bg-zinc-900">Invoice</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-[#E5B1B1] font-black">
                            {dnaData.payment_method === 'paypal' || dnaData.payment_method === 'invoice' ? 'Email Address' : 'Username / Handle'}
                          </label>
                          <input 
                            className="w-full bg-black/50 border border-white/10 p-4 text-white font-mono text-sm focus:border-[#E5B1B1]/50 outline-none"
                            placeholder={
                              dnaData.payment_method === 'paypal' ? 'PAYPAL_EMAIL' :
                              dnaData.payment_method === 'cash-app' ? 'CASHAPP_USER' :
                              dnaData.payment_method === 'venmo' ? 'VENMO_USER' :
                              dnaData.payment_method === 'invoice' ? 'INVOICE_EMAIL' : 'INPUT_ID'
                            }
                            value={dnaData.payment_identifier || ''}
                            disabled={!dnaData.payment_method}
                            onChange={(e) => setDnaData({ ...dnaData, payment_identifier: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Template */}
                    <div className="space-y-8 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-black tracking-[0.4em] text-gray-500">03 / Logic Configuration</span>
                      </div>
                      <div className="font-serif italic text-lg text-gray-300 leading-[2.5]">
                        {selectedProduct.id === 'foundational-node' && (
                          <div>
                            My primary destination for this Node is 
                            <input 
                              className="bg-transparent border-b border-[#E5B1B1]/50 outline-none text-[#E5B1B1] px-2 mx-1 placeholder:text-gray-700 min-w-[150px]" 
                              placeholder="URL_OR_ACTION"
                              onChange={(e) => setDnaData({ ...dnaData, target: e.target.value })}
                            />. 
                            I prefer the substrate finish in 
                            <select 
                              className="bg-transparent border-b border-[#E5B1B1]/50 outline-none text-[#E5B1B1] px-2 mx-1 cursor-pointer italic"
                              onChange={(e) => setDnaData({ ...dnaData, finish: e.target.value })}
                              value={dnaData.finish || 'Optically Clear'}
                            >
                              <option value="Optically Clear" className="bg-zinc-900">Optically Clear</option>
                              <option value="Matte Black" className="bg-zinc-900">Matte Black</option>
                              <option value="Signature White" className="bg-zinc-900">Signature White</option>
                            </select>. 
                            The primary 
                            <select 
                              className="bg-transparent border-b border-[#E5B1B1]/50 outline-none text-[#E5B1B1] px-2 mx-1 cursor-pointer italic"
                              onChange={(e) => setDnaData({ ...dnaData, identity_type: e.target.value })}
                              value={dnaData.identity_type || 'contact identity'}
                            >
                              <option value="contact identity" className="bg-zinc-900">contact identity</option>
                              <option value="action" className="bg-zinc-900">action</option>
                            </select>
                            encoded should be 
                            <input 
                              className="bg-transparent border-b border-[#E5B1B1]/50 outline-none text-[#E5B1B1] px-2 mx-1 placeholder:text-gray-700 min-w-[200px]" 
                              placeholder={dnaData.identity_type === 'action' ? 'DESCRIBE_ACTION' : 'NAME/EMAIL'}
                              onChange={(e) => setDnaData({ ...dnaData, identity: e.target.value })}
                            />.
                          </div>
                        )}

                        {selectedProduct.id === 'executive-node' && (
                          <div>
                            This Executive deployment requires dynamic redirect control for 
                            <input 
                              className="bg-transparent border-b border-[#E5B1B1]/50 outline-none text-[#E5B1B1] px-2 mx-1 placeholder:text-gray-700 min-w-[200px]" 
                              placeholder="SPECIFIC_USE_CASE"
                              onChange={(e) => setDnaData({ ...dnaData, use_case: e.target.value })}
                            />. 
                            I anticipate a scan frequency of 
                            <input 
                              className="bg-transparent border-b border-[#E5B1B1]/50 outline-none text-[#E5B1B1] px-2 mx-1 placeholder:text-gray-700 min-w-[100px]" 
                              placeholder="ESTIMATED_TAPS"
                              onChange={(e) => setDnaData({ ...dnaData, traffic: e.target.value })}
                            /> per month. 
                            The profile aesthetic must align with 
                            <input 
                              className="bg-transparent border-b border-[#E5B1B1]/50 outline-none text-[#E5B1B1] px-2 mx-1 placeholder:text-gray-700 min-w-[150px]" 
                              placeholder="BRAND_COLOR/THEME"
                              onChange={(e) => setDnaData({ ...dnaData, brand: e.target.value })}
                            /> guidelines.
                          </div>
                        )}

                        {selectedProduct.id === 'architect-node' && (
                          <div>
                            My industrial ecosystem requires a bridge to 
                            <input 
                              className="bg-transparent border-b border-[#E5B1B1]/50 outline-none text-[#E5B1B1] px-2 mx-1 placeholder:text-gray-700 min-w-[150px]" 
                              placeholder="CRM_OR_DATABASE"
                              onChange={(e) => setDnaData({ ...dnaData, bridge: e.target.value })}
                            />. 
                            The specific custom workflow involves 
                            <input 
                              className="bg-transparent border-b border-[#E5B1B1]/50 outline-none text-[#E5B1B1] px-2 mx-1 placeholder:text-gray-700 min-w-[250px]" 
                              placeholder="DESCRIBE_ACTION"
                              onChange={(e) => setDnaData({ ...dnaData, workflow: e.target.value })}
                            />. 
                            The most critical engineering quirk for this build is 
                            <input 
                              className="bg-transparent border-b border-[#E5B1B1]/50 outline-none text-[#E5B1B1] px-2 mx-1 placeholder:text-gray-700 min-w-[200px]" 
                              placeholder="SPECIFIC_CHALLENGE"
                              onChange={(e) => setDnaData({ ...dnaData, quirk: e.target.value })}
                            />.
                          </div>
                        )}
                      </div>
                    </div>

                    <button 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`w-full py-6 bg-[#E5B1B1] text-black font-black uppercase tracking-[0.4em] text-xs hover:brightness-110 transition-all shadow-xl flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                          Initializing Transmission...
                        </>
                      ) : (
                        'Finalize Build & Submit Transmission'
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="py-20 text-center animate-fadeIn space-y-10">
                    <div className="text-7xl">📡</div>
                    <div className="space-y-4">
                      <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">Handshake <span className="rose-gold-shine">Complete</span></h2>
                      <p className="text-gray-400 font-mono text-xs uppercase tracking-widest max-w-sm mx-auto leading-relaxed">
                        Project DNA has been successfully transmitted and logged in the engineering queue. 
                      </p>
                    </div>
                    
                    <div className="bg-black/40 border border-[#E5B1B1]/30 p-8 max-w-md mx-auto">
                       <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 mb-6">
                         <span>STATUS: ARCHITECT_NOTIFIED</span>
                         <span>DNA_HASH: VALID</span>
                       </div>
                       <p className="text-[#E5B1B1] text-xs italic mb-6">
                         "Build logic for {selectedProduct.name} is now entering architecture phase. I will reach out to the provided endpoint ({dnaData.operator_email}) to finalize deployment details."
                       </p>
                       <div className="h-[1px] bg-white/5 w-full mb-6"></div>
                       <button 
                        onClick={closeModal}
                        className="text-white text-[10px] font-black uppercase tracking-widest hover:text-[#E5B1B1] transition-colors"
                       >
                        Return to Hardware Selection
                       </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-16 text-center border-t border-white/5 pt-12">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em] mb-4">
            Custom Enterprise Logic & Industrial Requirements are handled via the Brief system.
          </p>
          <div className="flex justify-center items-center gap-8 opacity-30 grayscale contrast-125">
             <span className="text-xs font-black text-white">NFC_FORUM_TYPE_2</span>
             <span className="text-xs font-black text-white">ISO_14443A_COMPLIANT</span>
             <span className="text-xs font-black text-white">AES_ENCRYPTION_READY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareStore;