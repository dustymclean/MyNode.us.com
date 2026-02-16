
import React, { useState } from 'react';
import { VcdData, View } from '../types';

interface VcdBuilderViewProps {
  setView: (view: View) => void;
}

const VcdBuilderView: React.FC<VcdBuilderViewProps> = ({ setView }) => {
  const [data, setData] = useState<Partial<VcdData>>({
    firstName: '',
    middleName: '',
    lastName: '',
    prefix: '',
    suffix: '',
    nickname: '',
    phone: '',
    email: '',
    website: '',
    organization: '',
    title: '',
    role: '',
    mobilePhone: '',
    homePhone: '',
    faxPhone: '',
    pagerPhone: '',
    workEmail: '',
    personalEmail: '',
    linkedin: '',
    twitter: '',
    instagram: '',
    github: '',
    facebook: '',
    youtube: '',
    tiktok: '',
    whatsapp: '',
    skype: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    birthday: '',
    anniversary: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const generateVcf = () => {
    // vCard 3.0 Formatting
    const vCard = `BEGIN:VCARD
VERSION:3.0
N:${data.lastName};${data.firstName};${data.middleName};${data.prefix};${data.suffix}
FN:${data.prefix ? data.prefix + ' ' : ''}${data.firstName} ${data.lastName}${data.suffix ? ', ' + data.suffix : ''}
NICKNAME:${data.nickname}
ORG:${data.organization}
TITLE:${data.title}
ROLE:${data.role}
TEL;TYPE=WORK,VOICE:${data.phone}
TEL;TYPE=CELL,VOICE:${data.mobilePhone}
TEL;TYPE=HOME,VOICE:${data.homePhone}
TEL;TYPE=FAX,VOICE:${data.faxPhone}
TEL;TYPE=PAGER:${data.pagerPhone}
EMAIL;TYPE=WORK,INTERNET:${data.email || data.workEmail}
EMAIL;TYPE=HOME,INTERNET:${data.personalEmail}
URL:${data.website}
X-SOCIALPROFILE;TYPE=linkedin:${data.linkedin}
X-SOCIALPROFILE;TYPE=twitter:${data.twitter}
X-SOCIALPROFILE;TYPE=instagram:${data.instagram}
X-SOCIALPROFILE;TYPE=github:${data.github}
X-SOCIALPROFILE;TYPE=facebook:${data.facebook}
X-SOCIALPROFILE;TYPE=youtube:${data.youtube}
X-SOCIALPROFILE;TYPE=tiktok:${data.tiktok}
X-SOCIALPROFILE;TYPE=whatsapp:${data.whatsapp}
X-SOCIALPROFILE;TYPE=skype:${data.skype}
ADR;TYPE=WORK:;;${data.street};${data.city};${data.state};${data.zip};${data.country}
BDAY:${data.birthday}
X-ANNIVERSARY:${data.anniversary}
NOTE:${data.notes}
REV:${new Date().toISOString()}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => setView('home')}
          className="text-[#E5B1B1] text-[10px] font-black uppercase tracking-[0.4em] mb-12 flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
        >
          &larr; Return to Node Home
        </button>

        <header className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#E5B1B1]"></span>
            <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#E5B1B1]">Full Identity Encryption</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-[#F8F8F8] tracking-tighter mb-4 leading-none">
            Master <span className="text-[#E5B1B1]">VCD Builder</span>
          </h1>
          <p className="text-gray-500 max-w-3xl text-lg font-light italic leading-relaxed">
            Exhaustive identity parameterization. No template limits—input every detail imaginable to ensure a perfect professional handshake.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-16">
            {/* Identity Core */}
            <section className="bg-black border border-white/5 p-8 md:p-12 shadow-2xl space-y-8">
              <div className="border-b border-white/5 pb-4 flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">01 / Identity Core</span>
                <div className="flex-grow h-[1px] bg-white/5"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <InputGroup label="Prefix" name="prefix" placeholder="MR / DR / MS" />
                <InputGroup label="First Name" name="firstName" placeholder="GIVEN_NAME" />
                <InputGroup label="Middle Name" name="middleName" placeholder="ADDITIONAL" />
                <InputGroup label="Last Name" name="lastName" placeholder="SURNAME" />
                <InputGroup label="Suffix" name="suffix" placeholder="JR / III" />
                <InputGroup label="Nickname" name="nickname" placeholder="ALIAS" />
              </div>
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <InputGroup label="Organization" name="organization" placeholder="OPERATING_ENTITY" />
                <InputGroup label="Professional Title" name="title" placeholder="SYSTEM_ROLE" />
                <InputGroup label="Role / Department" name="role" placeholder="FUNCTIONAL_UNIT" />
              </div>
            </section>

            {/* Communication Grid */}
            <section className="bg-black border border-white/5 p-8 md:p-12 shadow-2xl space-y-8">
              <div className="border-b border-white/5 pb-4 flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">02 / Communication Grid</span>
                <div className="flex-grow h-[1px] bg-white/5"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <InputGroup label="Work Email" name="email" placeholder="PRIMARY_RELAY" />
                <InputGroup label="Personal Email" name="personalEmail" placeholder="HOME_RELAY" />
                <InputGroup label="Work Phone" name="phone" placeholder="+1..." />
                <InputGroup label="Mobile Phone" name="mobilePhone" placeholder="+1..." />
                <InputGroup label="Home Phone" name="homePhone" placeholder="+1..." />
                <InputGroup label="Fax Number" name="faxPhone" placeholder="+1..." />
                <InputGroup label="Pager" name="pagerPhone" placeholder="PROTOCOL_44" />
                <InputGroup label="Website URL" name="website" placeholder="https://..." />
              </div>
            </section>

            {/* Social & Intelligence */}
            <section className="bg-black border border-white/5 p-8 md:p-12 shadow-2xl space-y-8">
              <div className="border-b border-white/5 pb-4 flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">03 / Social Intelligence</span>
                <div className="flex-grow h-[1px] bg-white/5"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <InputGroup label="LinkedIn" name="linkedin" />
                <InputGroup label="Twitter / X" name="twitter" />
                <InputGroup label="Instagram" name="instagram" />
                <InputGroup label="GitHub" name="github" />
                <InputGroup label="YouTube" name="youtube" />
                <InputGroup label="TikTok" name="tiktok" />
                <InputGroup label="WhatsApp" name="whatsapp" />
                <InputGroup label="Skype / IM" name="skype" />
                <InputGroup label="Facebook" name="facebook" />
              </div>
            </section>

            {/* Physical & Personal */}
            <section className="bg-black border border-white/5 p-8 md:p-12 shadow-2xl space-y-8">
              <div className="border-b border-white/5 pb-4 flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">04 / Physical & Personal</span>
                <div className="flex-grow h-[1px] bg-white/5"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <InputGroup label="Street Address" name="street" />
                </div>
                <InputGroup label="City" name="city" />
                <InputGroup label="State / Province" name="state" />
                <InputGroup label="ZIP / Postal" name="zip" />
                <InputGroup label="Country" name="country" />
                <InputGroup label="Birthday" name="birthday" type="date" />
                <InputGroup label="Anniversary" name="anniversary" type="date" />
                <div className="md:col-span-2 space-y-1">
                  <label className="text-[9px] uppercase tracking-widest text-[#E5B1B1] font-black">Notes / System Logs</label>
                  <textarea 
                    name="notes" 
                    value={data.notes} 
                    onChange={handleChange} 
                    rows={6}
                    placeholder="ENTER_ADDITIONAL_IDENTITY_LOGIC..."
                    className="w-full bg-white/5 border border-white/10 focus:border-[#E5B1B1] p-4 text-white outline-none transition-all placeholder:text-gray-800 font-mono text-sm resize-none"
                  ></textarea>
                </div>
              </div>
            </section>

            <button
              onClick={generateVcf}
              className="w-full bg-[#E5B1B1] text-[#1A1A1B] font-black uppercase tracking-[0.8em] py-8 hover:brightness-110 transition-all shadow-2xl active:scale-[0.98] text-xl"
            >
              Compile Identity VCD
            </button>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-[#1A1A1B] p-8 border border-[#E5B1B1]/20 shadow-2xl">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-[#E5B1B1]">Profile_Buffer</h3>
                <div className="aspect-[3/4] bg-black border border-white/5 p-8 flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#E5B1B1]/5 to-transparent"></div>
                  <div className="w-24 h-24 rounded-full bg-[#E5B1B1]/10 border border-[#E5B1B1]/30 flex items-center justify-center text-4xl font-black text-[#E5B1B1] shadow-[0_0_30px_rgba(229,177,177,0.1)]">
                    {data.firstName?.[0] || 'I'}{data.lastName?.[0] || 'D'}
                  </div>
                  <div className="z-10">
                    <h4 className="text-2xl font-black text-white leading-tight uppercase tracking-tighter">
                      {data.prefix ? data.prefix + ' ' : ''}{data.firstName || 'IDENTITY'} {data.lastName || 'ALPHA'}
                    </h4>
                    <p className="text-[#E5B1B1] text-[10px] font-black uppercase tracking-[0.3em] mt-2">
                      {data.title || 'SYSTEM_ROLE'}
                    </p>
                    <p className="text-gray-600 text-[10px] mt-3 font-mono border-t border-white/5 pt-3 w-full">
                      {data.organization || 'OPERATING_ENTITY'}
                    </p>
                  </div>
                  <div className="pt-6 w-full space-y-3 text-left">
                    {data.phone && <div className="flex items-center gap-3 text-[10px] text-gray-400 font-mono"><span className="text-[#E5B1B1] text-xs">P:</span> {data.phone}</div>}
                    {data.email && <div className="flex items-center gap-3 text-[10px] text-gray-400 font-mono"><span className="text-[#E5B1B1] text-xs">E:</span> <span className="truncate">{data.email}</span></div>}
                    {data.website && <div className="flex items-center gap-3 text-[10px] text-gray-400 font-mono"><span className="text-[#E5B1B1] text-xs">W:</span> <span className="truncate">{data.website}</span></div>}
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Protocol_Active</span>
                   </div>
                   <span className="text-[8px] font-mono text-gray-600">v3.0_UTF8</span>
                </div>
              </div>

              <div className="bg-black p-8 border border-white/5">
                <h3 className="text-[10px] font-black uppercase tracking-widest mb-4 text-[#E5B1B1]">Infrastructure Integrity</h3>
                <p className="text-[10px] text-gray-500 leading-relaxed font-mono">
                  Identity compilation occurs locally within your hardware's runtime environment. No transmission of sensitive logic to remote MyNode servers.
                </p>
                <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                  <div className="text-[8px] text-gray-700 font-black uppercase tracking-widest">Compiler: 2026_GEN</div>
                  <div className="text-[8px] text-gray-700 font-black uppercase tracking-widest text-right">AES: STANDBY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VcdBuilderView;
