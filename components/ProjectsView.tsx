
import React, { useState } from 'react';
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
    name: "III. Industrial & Trades (High-Ticket)",
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
    name: "IV. Personal Productivity & Home Automation",
    items: [
      { title: "Bedside Sleep Mode", description: "A tag on your nightstand that sets your alarm, turns off the lights, and enables 'Do Not Disturb.'", problem: "Fiddling with phone settings at night.", solution: "Automation trigger via physical placement." },
      { title: "Gym Bag 'Hype' Mode", description: "A tag on your gym bag that opens your workout app and starts your 'Power' playlist on Spotify.", problem: "Setting up music/apps at the start of a workout.", solution: "Zero-effort workout initialization." },
      { title: "The Car Navigation Node", description: "A tag on your dashboard that instantly sets GPS to 'Home' and sends an ETA text to your partner.", problem: "Typing while driving.", solution: "Safe, one-tap navigation and communication." },
      { title: "Laundry Timer", description: "A tag on the washer that sets a 45-minute timer on your phone so you never forget a wet load.", problem: "Forgetting laundry.", solution: "Point-of-work reminder setting." },
      { title: "The Recipe Magnet", description: "A tag on your spice rack that pulls up your digital cookbook for that specific cuisine.", problem: "Searching recipes with messy hands.", solution: "One-tap culinary guidance." },
      { title: "Medication Tracker", description: "A tag on your pill bottle that logs the exact time you took your meds into a secure database.", problem: "Forgetting if dose was taken.", solution: "Accountability via tap-to-log." },
      { title: "Plant Care Log", description: "A tag on a planter that tells you exactly when it was last watered and what its specific sunlight needs are.", problem: "Over/under watering.", solution: "Dynamic plant-specific dashboard." },
      { title: "Smart Home 'Scene' Trigger", description: "A tag by the door that turns off every light and locks the smart deadbolt as you leave.", problem: "Checking multiple rooms/locks.", solution: "Total home shutdown in one tap." }
    ]
  },
  {
    name: "V. Hospitality, Events & Retail",
    items: [
      { title: "The Smart Menu", description: "A tag on a restaurant table that shows the menu, filters for allergies, and allows for instant ordering.", problem: "Slow service; allergen anxiety.", solution: "Interactive, filtered, instant ordering system." },
      { title: "Hotel 'Local Guide'", description: "A tag in a hotel room that provides a curated map of the best nearby coffee, bars, and sights.", problem: "Outdated paper pamphlets.", solution: "Fresh, digital, geolocated local expertise." },
      { title: "Interactive Museum Tags", description: "A tag next to a painting that plays an audio interview with the artist or a history of the piece.", problem: "Reading tiny placards.", solution: "Immersive audio/visual art exploration." },
      { title: "Event 'Digital Swag Bag'", description: "Instead of paper flyers, attendees tap a Node to download all event resources and speaker notes.", problem: "Discarded paper waste.", solution: "Permanent, digital event resource access." },
      { title: "The Tip Jar Node", description: "A tag on a musician's case or a barista's counter that opens Venmo/CashApp for frictionless tipping.", problem: "Lack of physical cash.", solution: "Digital gratitude enabled via NFC." },
      { title: "VIP Access Badge", description: "An NFC-embedded wristband that verifies entrance to restricted areas without a scanner.", problem: "Manual ticket checking.", solution: "Self-service identity verification." },
      { title: "Product Authentication", description: "A tag inside a luxury item (like a bag or boots) that proves its authenticity and logs the original purchase date.", problem: "Counterfeiting.", solution: "Cryptographic product heritage." },
      { title: "Lost & Found Tag", description: "A tag on your luggage or pet's collar that allows a finder to contact you securely through a masked My Node relay.", problem: "Exposing personal phone numbers.", solution: "Secure, anonymous communication for returns." }
    ]
  },
  {
    name: "VI. Advanced & Custom Logic (The 'Architect' Tier)",
    items: [
      { title: "The 'GhostTrace' Scan", description: "A security node that instantly runs a background or compliance check on the user scanning in.", problem: "Manual security screening.", solution: "Instant, real-time security gatekeeping." },
      { title: "Encrypted File Vault", description: "A physical 'Key' card required to unlock a hidden directory on your laptop or cloud drive.", problem: "Password-only security is vulnerable.", solution: "Hardware-based second factor authentication." },
      { title: "Sequential Workflow Gate", description: "A logic gate that won't allow a technician to scan 'Finish' until they have scanned 3 other Nodes in order.", problem: "Skipping critical process steps.", solution: "Hardware-enforced standard operating procedures." },
      { title: "Dynamic Pricing Tag", description: "A tag in a retail store that changes the price on the user's phone based on their loyalty status.", problem: "Fixed pricing doesn't reward loyalty.", solution: "Personalized, dynamic retail experiences." },
      { title: "Water Intake Tracker", description: "A tag on your water bottle that logs 16oz to your health app with every tap.", problem: "Manual logging is tedious.", solution: "One-tap health habit reinforcement." },
      { title: "Parking Spot Reminder", description: "A tag on your keychain that logs your current GPS coordinates so you can find your car in a massive lot.", problem: "Forgetting parking location.", solution: "Instant geofence logging." },
      { title: "Speed Dial Node", description: "A tag on the fridge or phone of an elderly relative that instantly calls a specific person when tapped.", problem: "Complex smartphone menus for seniors.", solution: "Simplified, physical SOS / contact trigger." },
      { title: "Resume-to-Meeting Bridge", description: "A tag on a portfolio that, once scanned, gives the user a 15-minute window to 'Instant Call' the candidate.", problem: "Delayed hiring feedback.", solution: "Zero-latency hiring connections." },
      { title: "Driving Auto-Reply", description: "A tag in your car that toggles a mode to auto-respond to texts saying you're currently behind the wheel.", problem: "Distracted driving.", solution: "Safe, automated driving presence." },
      { title: "Subscription Renewal Tag", description: "A tag on a physical product (like a filter or coffee bag) that re-orders the item with one tap.", problem: "Friction in re-ordering consumables.", solution: "Amazon Dash-style convenience on any item." },
      { title: "Attendance Proof", description: "A tag at a seminar that provides a geo-fenced 'Certificate of Attendance' only if scanned on-site.", problem: "Forged attendance records.", solution: "Proof-of-location certification." },
      { title: "Feedback Loop", description: "A tag on a new product that asks for a 'Thumbs Up/Down' and routes the user to either a review page or a support form.", problem: "Unhappy customers leaving bad reviews without support.", solution: "Intelligent sentiment routing." },
      { title: "Digital 'Dead Man's Switch'", description: "A tag that must be scanned every 24 hours or it triggers an automated wellness check to a supervisor.", problem: "Lone worker safety concerns.", solution: "Passive safety monitoring." },
      { title: "The 'My Node' Sales Pitch", description: "A card you carry that, when tapped, loads this exact list of 50 functions to show a client what you are capable of building.", problem: "Clients don't understand the depth of NFC utility.", solution: "The ultimate capability showcase in your pocket." }
    ]
  }
];

const NfcItem: React.FC<{ item: NfcWay }> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`border ${expanded ? 'border-[#E5B1B1] bg-[#E5B1B1]/5' : 'border-white/5 bg-black/40'} p-6 transition-all duration-300 cursor-pointer group`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex justify-between items-start">
        <h4 className={`text-lg font-bold transition-colors ${expanded ? 'text-[#F8F8F8]' : 'text-gray-400 group-hover:text-[#E5B1B1]'}`}>
          {item.title}
        </h4>
        <span className="text-[#E5B1B1] text-xl transform transition-transform duration-300" style={{ transform: expanded ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
      </div>
      <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.description}</p>
      
      {expanded && (
        <div className="mt-6 pt-6 border-t border-[#E5B1B1]/20 animate-fadeIn">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] uppercase tracking-widest text-[#E5B1B1] font-black block mb-2">The Problem</label>
              <p className="text-xs text-gray-500 italic">{item.problem || "Inefficient legacy processes."}</p>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-[#F8F8F8] font-black block mb-2">My Node Solution</label>
              <p className="text-xs text-gray-400">{item.solution || "Custom-engineered NFC bridge."}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectsView: React.FC = () => {
  return (
    <div id="projects" className="min-h-screen bg-[#1A1A1B] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-[#F8F8F8]">
            Capability Index
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            I build logic-driven environments. Below is a deep-dive into 50 ways my NFC Nodes solve real-world problems. This turns your site into an educational hub that proves engineering depth.
          </p>
        </header>

        <div className="space-y-20">
          {nfcData.map((category) => (
            <section key={category.name}>
              <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-[#E5B1B1] mb-10 border-b border-[#E5B1B1]/20 pb-4">
                {category.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <NfcItem key={item.title} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-24 p-12 bg-[#0F0F0F] border border-[#E5B1B1]/30 text-center shadow-2xl">
          <h2 className="text-3xl font-bold text-[#F8F8F8] mb-6">Found a Use Case for Your Business?</h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            These are just starting points. Every Node I build is custom-engineered for your specific requirements.
          </p>
          <a href="/#brief" className="inline-flex justify-center items-center px-10 py-5 bg-[#E5B1B1] text-[#1A1A1B] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
            Initialize Custom Build
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;
