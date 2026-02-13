import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { NfcCategory, NfcWay } from '../types';

const nfcData: NfcCategory[] = [
  {
    name: "I. The Core Essentials",
    items: [
      { title: "The Digital Identity Node", description: "A professional contact card that syncs your vCard, LinkedIn, and portfolio directly to a phone’s address book.", problem: "Lost physical business cards; friction in contact saving.", solution: "One tap saves everything to the user's phone contacts instantly." },
      { title: "The Life-Saving Medical Node", description: "An ID card or bracelet that surfaces allergies, blood type, and emergency contacts for first responders.", problem: "Critical info unavailable during emergencies.", solution: "Medical-grade NFC tags provide instant access to life-saving data for responders." },
      { title: "The 'Live' Grocery Node", description: "A magnet on the fridge that instantly opens a shared, real-time grocery list you curated on your desktop.", problem: "Forgetting items at the store; disjointed household lists.", solution: "Physical trigger links fridge to desktop-curated cloud lists." },
      { title: "The Instant Storefront", description: "A tag at a physical location (pop-up shop/booth) that opens your e-commerce store and applies a local-only discount code.", problem: "Friction in converting physical foot traffic to online sales.", solution: "Direct link to checkout with pre-applied geolocation discounts." },
      { title: "The Portfolio Showcase", description: "Tapping your card opens a high-speed PWA gallery of your best engineering and web dev work.", problem: "Carrying tablets/laptops to show work.", solution: "Your best work always on your person, ready for one-tap presentation." }
    ]
  },
  {
    name: "II. Professional & Business Operations",
    items: [
      { title: "Google Review Trigger", description: "A 'Tap to Review' puck for checkout counters that skips the search and goes straight to your 5-star form.", problem: "Low review rates due to 'search friction'.", solution: "Instant link to review page increases feedback volume by 300%." },
      { title: "Appointment Scheduler", description: "A tag on your desk or laptop that opens your Calendly/Booking page for instant meeting setup.", problem: "Email tag back-and-forth for scheduling.", solution: "One-tap availability check and booking." },
      { title: "The WiFi Bridge", description: "A guest-access Node that connects users to your secure WiFi without you ever revealing the password.", problem: "Typing complex guest passwords.", solution: "Encrypted handshake connects guests instantly upon tap." },
      { title: "Real Estate 'Open House' Sign-in", description: "A Node at the front door that replaces the paper sign-in sheet, pushing lead data directly to your CRM.", problem: "Illegible handwriting; slow data entry.", solution: "Clean, digital entry with instant CRM sync." },
      { title: "Notary Secure-Link", description: "A tag on a physical document folder that opens an encrypted, time-stamped digital version for verification.", problem: "Document forgery; lack of digital audit trail.", solution: "Physical-to-digital authentication bridge." },
      { title: "Virtual Tour Guide", description: "A tag on a 'For Sale' sign that launches an immersive 3D walkthrough of the property.", problem: "Static signs provide little info.", solution: "Immediate visual immersion for drive-by leads." },
      { title: "The Resume Node", description: "A tag on a physical resume or business card that plays a video introduction of you explaining your credentials.", problem: "Resumes are two-dimensional.", solution: "Humanize your application with instant video intro." }
    ]
  },
  {
    name: "III. Industrial & Trades",
    items: [
      { title: "HVAC Service Log", description: "A tag on a unit that reveals the entire maintenance history and lets the tech log the new service with one tap.", problem: "Paper logs get lost or unreadable.", solution: "Indestructible digital log attached directly to assets." },
      { title: "Fire Safety Audit", description: "An anti-metal tag on fire extinguishers that proves a human was physically present for the monthly inspection.", problem: "Pencil-whipping safety logs.", solution: "Cryptographic proof of presence for compliance." },
      { title: "Heavy Machinery 'Pre-Flight'", description: "A tag on a tractor or crane that forces the operator to complete a safety checklist before it logs them as 'On Duty.'", problem: "Skipping safety checks.", solution: "Logic-gated operation start." },
      { title: "Tool Library Tracker", description: "A tag on expensive power tools to check them in/out to specific employees or job sites.", problem: "Tool theft and misplacement.", solution: "Real-time custody tracking per tool." },
      { title: "Material SDS Access", description: "Instant access to Safety Data Sheets for chemicals or hazardous materials, mounted directly on the container.", problem: "Searching for binders in emergencies.", solution: "OSHA compliance via one-tap instant info." },
      { title: "Construction Site Progress", description: "A tag at a specific station on a build site where the foreman can upload a photo for the client to see daily progress.", problem: "Client anxiety over progress.", solution: "Transparency via physical-point updates." },
      { title: "Inventory 'Look-Inside'", description: "A tag on a sealed crate that shows a searchable list and photos of every item inside without opening it.", problem: "Unsealing crates to check contents.", solution: "Augmented reality inventory view." },
      { title: "Emergency Shut-off Guide", description: "A bright red tag near main valves/breakers that opens an instant video on how to safely shut down the system.", problem: "Panic during failures.", solution: "Calm, visual guidance at the point of action." }
    ]
  },
  {
    name: "IV. Notary & Legal Architecture (Security-First)",
    items: [
      { title: "Secure RON Protocol Handshake", description: "Encrypted physical NFC key that acts as a mandatory second-factor authentication (2FA) for starting Remote Online Notarization sessions.", problem: "Account takeover and phishing of Notary credentials.", solution: "Hardware-gated session initialization ensures only the physical holder of the commissioned Notary Node can sign." },
      { title: "Deed-to-Digital Integrity Bridge", description: "Tamper-evident NFC tag integrated into original property deeds, linking to a cryptographically hashed digital twin for instant clerk verification.", problem: "Deed fraud.", solution: "Permanent physical-to-digital anchoring with immutable audit trails." }
    ]
  }
];

const NfcItem: React.FC<{ item: NfcWay }> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`border ${expanded ? 'border-[#E5B1B1] bg-[#E5B1B1]/5' : 'border-white/5 bg-black/40'} p-6 transition-all duration-300 cursor-pointer group`} onClick={() => setExpanded(!expanded)}>
      <div className="flex justify-between items-start">
        <h4 className={`text-lg font-bold transition-colors ${expanded ? 'text-[#F8F8F8]' : 'text-gray-400 group-hover:text-[#E5B1B1]'}`}>{item.title}</h4>
        <span className="text-[#E5B1B1] text-xl" style={{ transform: expanded ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
      </div>
      <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.description}</p>
      {expanded && (
        <div className="mt-6 pt-6 border-t border-[#E5B1B1]/20 animate-fadeIn">
          <p className="text-xs text-gray-500 italic mb-2">Problem: {item.problem}</p>
          <p className="text-xs text-gray-400">Solution: {item.solution}</p>
        </div>
      )}
    </div>
  );
};

const ProjectsView: React.FC = () => {
  return (
    <div id="projects" className="min-h-screen bg-[#1A1A1B] pt-32 pb-24">
      <Helmet>
        <title>NFC Capability Index | Industrial Use Cases | MyNode</title>
        <meta name="description" content="Explore engineered NFC use cases across 25+ industries. Discover the industrial logic behind MyNode deployments." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <nav className="flex flex-wrap gap-4 mb-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">
            <Link to="/" className="hover:text-[#E5B1B1] transition-colors">MYNODE</Link>
            <span>/</span>
            <span className="text-[#E5B1B1]">PROJECTS</span>
            <span>/</span>
            <Link to="/faq" className="hover:text-[#E5B1B1] transition-colors">FAQ</Link>
            <span>/</span>
            <Link to="/#brief" className="hover:text-[#E5B1B1] transition-colors">INITIATE BRIEF</Link>
          </nav>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-[#F8F8F8]">Capability <span className="rose-gold-shine">Index</span></h1>
          <p className="text-xl text-gray-400 max-w-4xl leading-relaxed">I build logic-driven environments. Explore the exhaustive capability list below.</p>
        </header>
        <div className="space-y-24">
          {nfcData.map((category) => (
            <section key={category.name}>
              <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-[#E5B1B1] mb-10 border-b border-[#E5B1B1]/20 pb-4">{category.name}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => <NfcItem key={item.title} item={item} />)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;