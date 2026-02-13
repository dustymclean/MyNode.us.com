import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { VcdData } from '../types';

const VcdBuilderView: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Partial<VcdData>>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    website: '',
    organization: '',
    title: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const generateVcf = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
N:${data.lastName};${data.firstName};;;
FN:${data.firstName} ${data.lastName}
ORG:${data.organization}
TITLE:${data.title}
TEL;TYPE=WORK,VOICE:${data.phone}
EMAIL;TYPE=WORK,INTERNET:${data.email}
URL:${data.website}
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${data.firstName || 'contact'}_${data.lastName || 'identity'}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const InputGroup = ({ label, name, type = "text", placeholder = "" }: { label: string, name: string, type?: string, placeholder?: string }) => (
    <div className="space-y-1">
      <label className="text-[9px] uppercase tracking-widest text-[#E5B1B1] font-black">{label}</label>
      <input 
        name={name} 
        type={type}
        value={(data as any)[name] || ''} 
        onChange={handleChange} 
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 focus:border-[#E5B1B1] p-4 text-white outline-none transition-all placeholder:text-gray-800 font-mono text-sm" 
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0F0F0F] pt-32 pb-24">
      <Helmet>
        <title>Master VCD Builder | Digital Identity Logic | MyNode</title>
        <meta name="description" content="Generate a professional digital identity card with full parameterization. No template limits for a perfect professional handshake." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/')} className="text-[#E5B1B1] text-[10px] font-black uppercase tracking-[0.4em] mb-12 flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
          &larr; Return to Node Home
        </button>
        <header className="mb-16">
          <h1 className="text-5xl md:text-8xl font-black text-[#F8F8F8] tracking-tighter mb-4 leading-none">Master <span className="text-[#E5B1B1]">VCD Builder</span></h1>
          <p className="text-gray-500 max-w-3xl text-lg font-light italic leading-relaxed">Exhaustive identity parameterization for professional handshakes.</p>
        </header>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-16">
            <section className="bg-black border border-white/5 p-8 md:p-12 shadow-2xl space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup label="First Name" name="firstName" placeholder="GIVEN_NAME" />
                <InputGroup label="Last Name" name="lastName" placeholder="SURNAME" />
                <InputGroup label="Work Email" name="email" placeholder="PRIMARY_RELAY" />
                <InputGroup label="Work Phone" name="phone" placeholder="+1..." />
                <InputGroup label="Organization" name="organization" placeholder="OPERATING_ENTITY" />
                <InputGroup label="Professional Title" name="title" placeholder="SYSTEM_ROLE" />
                <div className="md:col-span-2">
                  <InputGroup label="Website URL" name="website" placeholder="https://..." />
                </div>
              </div>
            </section>
            <button onClick={generateVcf} className="w-full bg-[#E5B1B1] text-[#1A1A1B] font-black uppercase tracking-[0.8em] py-8 hover:brightness-110 transition-all shadow-2xl text-xl">Compile Identity VCD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VcdBuilderView;