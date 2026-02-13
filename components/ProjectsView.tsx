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
      { title: "Secure RON Protocol Handshake", description: "Encrypted physical NFC key that acts as a mandatory second-factor authentication (2FA) for starting high-value Remote Online Notarization sessions.", problem: "Account takeover and phishing of Notary credentials.", solution: "Hardware-gated session initialization ensures only the physical holder of the commissioned Notary Node can sign." },
      { title: "Deed-to-Digital Integrity Bridge", description: "Tamper-evident NFC tag integrated into original property deeds, linking to a cryptographically hashed digital twin for instant clerk verification.", problem: "Deed fraud and unauthorized modification of physical property records.", solution: "Permanent physical-to-digital anchoring with immutable audit trails for county registrars." },
      { title: "Automated Notary Journaling (ANJ)", description: "A physical Node at the signing table that prepopulates the Notary's digital journal with verified date, time, and GPS coordinates upon a single tap.", problem: "Manual entry errors and compliance gaps during complex multi-signer sessions.", solution: "Engineered efficiency that logs session meta-data with 100% cryptographic accuracy." },
      { title: "Identity Escrow Relay", description: "A secure digital container for sensitive signer ID data, accessible only via a localized physical NFC handshake between the signer and the Notary.", problem: "PII exposure and data leak risks during the transmission of identity documents.", solution: "Privacy-first localized data relay that minimizes the digital footprint of identity verification." },
      { title: "Chain of Custody Evidence Node", description: "Ruggedized NFC tags applied to legal evidence containers, logging every physical 'Hand-to-Hand' transfer with a verified timestamp.", problem: "Compromised evidence chains and contested integrity in high-stakes litigation.", solution: "Indestructible digital custody record attached directly to the physical asset for court submission." },
      { title: "International Apostille Verifier", description: "NFC-embedded gold foil seals for international documents, allowing foreign officials to instantly verify the Secretary of State's authentication via public ledger.", problem: "High friction and fraud risk in international document recognition and apostille processing.", solution: "Instant, global verification of digital-seal authenticity via one-tap NFC interrogation." },
      { title: "Privileged Access Node (ACP)", description: "Secure access hardware for law firm file rooms that logs every entry and identifies the specific attorney via their firm-issued secure NFC ID.", problem: "Unauthorized access to sensitive 'Attorney-Client Privilege' physical case files.", solution: "Gated physical access with a real-time digital audit log of all document interactions." },
      { title: "Estate Access 'Last-Read' Logic", description: "A stealth Node placed inside a Will or Trust folder that triggers a silent automated notification to the law firm when the folder is physically opened.", problem: "Unauthorized viewing of estate plans or tampering with original testamentary documents.", solution: "Passive security monitoring that provides the law firm with immediate awareness of folder access." },
      { title: "Certified Copy Authenticator", description: "A tag placed on a certified copy that, when scanned, displays the original document hash to prove no modifications were made post-certification.", problem: "Altered 'Certified Copies' used in fraudulent financial or legal transactions.", solution: "Real-time hash verification providing paper-to-digital content assurance." },
      { title: "Commission Badge Identity Logic", description: "An NFC-embedded professional badge that pulls up the Secretary of State's live database showing the Notary's current commission status and bonding.", problem: "Signers doubting the authority of a mobile Notary or independent contractor.", solution: "Instant, third-party verified proof of active legal authority at the point of signing." },
      { title: "Proof-of-Service Geo-Node", description: "A tag tapped by a process server upon delivery of subpoenas, generating a signed cryptographic proof-of-presence at the exact target location.", problem: "Contested delivery of legal papers and 'sewer service' allegations.", solution: "Immutable, timestamped proof of physical presence at the intended service address." },
      { title: "Escrow Funding Trigger Node", description: "A physical card present at closing that, once scanned by the Notary after the final signature, triggers the automated release of escrow funds via API.", problem: "Delays in funding due to manual scan-and-email workflows and administrative lag.", solution: "Logic-gated funding that accelerates the closing process to near-instant speeds." }
    ]
  },
  {
    name: "01. Hemp & Cannabis",
    items: [
      { title: "Seed-to-Sale Tracking", description: "Secure physical tags on individual plants linking to USDA license data.", problem: "Regulatory non-compliance; manual logging errors in crop tracking.", solution: "Tamper-evident NFC anchors to immutable USDA licensing databases." },
      { title: "Digital COA Verification", description: "Customer taps a product to view lab results, potency, and terpene profiles.", problem: "Customer distrust; difficult access to lab verification.", solution: "Instant transparency at the point of sale." },
      { title: "Inventory Batch Handshake", description: "Staff tap crates to verify harvest dates and batch IDs against the central manifest.", problem: "Inventory shrinkage; batch misidentification.", solution: "Hardware-verified manifesting." },
      { title: "Dispensary Loyalty Bridge", description: "A 'Tap-to-Join' puck at checkout that enrolls customers in a reward program instantly.", problem: "Slow enrollment processes; low customer retention.", solution: "Zero-friction reward enrollment." },
      { title: "Medical Worker Verification", description: "Security personnel tap a worker's badge to verify their MS medical cannabis worker's permit.", problem: "Unauthorized access; permit expiration oversight.", solution: "Real-time verification of legal worker status." },
      { title: "B2B Wholesale Node", description: "Wholesale buyers tap a sample to view bulk pricing and current inventory levels.", problem: "Outdated pricing sheets; buyer lag.", solution: "Live pricing synced to physical samples." },
      { title: "Safe Consumption Guide", description: "Product tags that launch video tutorials on proper dosing and device maintenance.", problem: "Consumer misuse; liability issues.", solution: "Education-at-the-point-of-contact." },
      { title: "Secure Delivery Logs", description: "Drivers tap a Node at the delivery point to timestamp and geofence the hand-off.", problem: "Contested delivery times; lack of transparency.", solution: "Geofenced, timestamped proof-of-delivery." },
      { title: "Facility Maintenance Logs", description: "Staff tap Nodes in grow rooms to log environmental checks and cleaning.", problem: "Inconsistent sanitation; audit risks.", solution: "Unforgeable compliance logs." },
      { title: "Glassware Authentication", description: "High-end artistic pieces embedded with NFC to prove authenticity and artist history.", problem: "Counterfeit glass; lack of provenance.", solution: "Cryptographic proof of original manufacturing." },
      { title: "Terpene Visualization", description: "A tap-point on product packaging that renders a 3D radar chart of the terpene profile.", problem: "Complex data is hard to interpret.", solution: "Interactive visual efficacy profiles." },
      { title: "Clone Lineage Archive", description: "NFC tags on clones that link directly to the mother plant's records.", problem: "Genetic drift; unknown parentage.", solution: "Full-lifecycle genetic tracking." },
      { title: "Nutrient Feeding Log", description: "Tapping a reservoir to log the exact nutrient mix, EC, and pH levels.", problem: "Human error in dosing; lost feed records.", solution: "Point-of-contact cultivation logs." },
      { title: "Light Spectrum Toggle", description: "Tags on LED controllers that allow staff to switch between vegetation and bloom spectra.", problem: "Accidental setting changes; physical wear.", solution: "Logical control gating via secure mobile handshake." },
      { title: "Discreet Consumer Log", description: "A physical Node in a private notebook for tracking personal strain efficacy.", problem: "Loss of medical history; lack of privacy.", solution: "Privacy-first localized logging." }
    ]
  },
  {
    name: "02. Logistics & Moving",
    items: [
      { title: "Crate 'Look-Inside'", description: "A tag on a sealed crate showing a searchable list and photos of every item inside.", problem: "Unsealing crates to verify inventory.", solution: "Augmented inventory view without breaking seals." },
      { title: "Live Inventory Manifest", description: "Real-time logistics tracking for high-value items, synced directly to a CRM.", problem: "Disjointed tracking; manual lag.", solution: "Instant CRM updates from the point of handling." },
      { title: "Tap-to-Estimate", description: "A 'Project Estimator' puck for movers to initiate a quote on-site.", problem: "Slow quoting processes; paper-based errors.", solution: "One-tap digital quoting reducing intake time." },
      { title: "Equipment Custody Log", description: "Workers tap a moving truck or lift to check it in or out to a specific job site.", problem: "Asset misplacement; lack of accountability.", solution: "Mandatory hardware check-in/out." },
      { title: "Driver Navigation Bridge", description: "A Node on the dashboard that sets GPS to the next warehouse or delivery stop.", problem: "Manual address entry while driving.", solution: "Hands-free navigation via physical trigger." },
      { title: "Lead Generation Sign-in", description: "A 'Proof of Build' Node on moving trucks for prospective clients to scan.", problem: "Static truck branding fails to capture warm leads.", solution: "Interactive branding that converts drive-by interest." },
      { title: "Damage Claim Photo-Link", description: "A Node where movers tap to upload 'before' photos of furniture to protect the firm.", problem: "Frivolous damage claims.", solution: "Point-of-staging photo logging." },
      { title: "Warehouse Station Audit", description: "Supervisors tap station Nodes to confirm safety and organization audits are complete.", problem: "Incomplete safety checks.", solution: "Proof-of-presence audit trails." },
      { title: "Secure Pallet Handshake", description: "Verifying the transfer of goods between shipping carriers via a cryptographic tap.", problem: "Carrier fraud; liability gaps.", solution: "Encrypted proof-of-transfer." },
      { title: "Digital Bill of Lading", description: "A physical card carried by the driver that, when scanned, renders the full manifest.", problem: "Lost paper manifests; unreadable documents.", solution: "Indestructible digital manifest." },
      { title: "Staging Area Checkpoint", description: "A Node at the loading dock that movers tap to confirm a pallet has been successfully staged.", problem: "Loading errors; pallets left behind.", solution: "Hardware-enforced loading protocol." },
      { title: "Fragile Item 'G-Force' Log", description: "A tag on high-value items that reveals if internal impact sensors were triggered.", problem: "Hidden damage in transit.", solution: "Digital impact history via physical scan." },
      { title: "Route Optimization Bridge", description: "A dashboard Node that pushes fuel-efficient routes directly to the driver's nav app.", problem: "High fuel costs; inefficient planning.", solution: "Instant deployment of optimized routes." },
      { title: "Warehouse 'Slotting' Assistant", description: "Tapping a shelf to see which items are scheduled for that slot.", problem: "Inventory mis-shelving.", solution: "Visual shelf logic guidance." },
      { title: "Customs Documentation Node", description: "A card carried by the driver that renders all international customs forms.", problem: "Delays at border crossings.", solution: "Centralized digital compliance node." }
    ]
  },
  {
    name: "03. Healthcare",
    items: [
      { title: "Life-Saving Medical ID", description: "A bracelet surfacing allergies, blood type, and contacts for first responders.", problem: "Unconscious patients; delayed care.", solution: "Critical data availability in the first 60 seconds." },
      { title: "Patient Intake Node", description: "A tap-point in the waiting room that initiates a secure digital check-in.", problem: "Paperwork bloat; slow wait times.", solution: "Secure, zero-contact intake." },
      { title: "Medication Tracker", description: "A tag on a pill bottle that logs the exact time a dose was taken.", problem: "Medication non-adherence; dose doubling.", solution: "Automated adherence logging." },
      { title: "Hospital Bed Logs", description: "Nurses tap a Node on the bed frame to log vitals and interaction timestamps.", problem: "Lapses in monitoring; inaccurate charting.", solution: "Point-of-care verification." },
      { title: "Medical Equipment History", description: "Tags on ventilators revealing the entire maintenance history.", problem: "Equipment failure; non-compliance.", solution: "Asset-level maintenance records." },
      { title: "Personal Health Dashboard", description: "A bedside Node that sets a phone to 'Quiet Mode' and opens their recovery plan.", problem: "Hospital noise; patient confusion.", solution: "Patient-centered automation." },
      { title: "Specimen Chain-of-Custody", description: "NFC tags on lab samples to ensure they are tracked from collection to analysis.", problem: "Lost lab samples; misidentification.", solution: "Immutable tracking from patient to lab." },
      { title: "Staff SOS Trigger", description: "A discreet Node in staff areas that sends a location-based alert to security.", problem: "Violence against healthcare workers.", solution: "Discreet, instant alerting system." },
      { title: "Doctor 'Follow-Up' Card", description: "A physician’s Executive Node that saves contact and schedules the next appointment.", problem: "Low follow-up attendance.", solution: "One-tap appointment setting." },
      { title: "Pharmacy 'Re-order' Magnet", description: "A tag on a medication box that re-orders a prescription with a single tap.", problem: "Running out of critical meds.", solution: "Zero-friction re-ordering." },
      { title: "Interaction Checker", description: "A tag on a medication box that checks for contraindications with current meds.", problem: "Dangerous drug interactions.", solution: "Self-service safety check." },
      { title: "Telehealth Portal Trigger", description: "A bedside Node that instantly launches a scheduled video consultation.", problem: "Technical friction for seniors.", solution: "One-tap connection to expertise." },
      { title: "Wheelchair Maintenance Tag", description: "A Node on hardware that tracks repair history and alerts staff to inspections.", problem: "Device failure; patient injury.", solution: "Proactive fleet maintenance." },
      { title: "PT Rep Tracker", description: "A tag on therapy equipment that logs sets and reps into a patient portal.", problem: "Inaccurate self-reporting.", solution: "Data-driven therapy tracking." },
      { title: "Sanitization Proof-of-Work", description: "A Node that housekeeping must tap to certify the room has been sterilized.", problem: "Hospital-acquired infections.", solution: "Cryptographic proof of readiness." }
    ]
  },
  {
    name: "04. Construction",
    items: [
      { title: "Machinery 'Pre-Flight'", description: "A tag on a crane that forces a safety checklist before operation.", problem: "Bypassing protocols; injury.", solution: "Hardware-gated operation start." },
      { title: "Site Progress Station", description: "Foremen tap a station Node to upload a photo for the client.", problem: "Stakeholder anxiety; lack of real-time updates.", solution: "Transparent progress reporting." },
      { title: "Material SDS Access", description: "Instant access to Safety Data Sheets for hazardous materials mounted on the container.", problem: "Searching for binders in emergencies.", solution: "OSHA-compliant instant access." },
      { title: "Tool Library Tracker", description: "Checking expensive power tools in/out to specific employees via an NFC tap.", problem: "Tool theft; site productivity loss.", solution: "Real-time custody tracking." },
      { title: "Safety Certification Badge", description: "Tapping a worker's badge to verify required OSHA training for the site.", problem: "Uncertified labor; insurance liability.", solution: "Gate-level certification verification." },
      { title: "Blueprint Digital Bridge", description: "Tags on physical site maps that open the most recent CAD revisions.", problem: "Building from outdated plans.", solution: "Ensuring 'Single Source of Truth' in the field." },
      { title: "Structural Inspection Proof", description: "Inspectors tap a Node at a foundation point to certify the inspection.", problem: "Pencil-whipping inspections.", solution: "Proof-of-presence for sign-offs." },
      { title: "Emergency Shut-off Guide", description: "A red tag near breakers that opens a video on safe system shutdown.", problem: "Panic during failures.", solution: "Visual guidance at the point of action." },
      { title: "Subcontractor Sign-in", description: "A central Node at the site entrance to log the entry/exit of all contractors.", problem: "Inaccurate payroll; unknown personnel on-site.", solution: "Digital muster roll with CRM integration." },
      { title: "Asset Maintenance Alerts", description: "A tag on generators that notifies the technician when service is due.", problem: "Equipment downtime; ignored intervals.", solution: "Predictive asset maintenance." },
      { title: "Concrete Cure-Time Log", description: "A tag embedded in a pour that links to timestamp and humidity data.", problem: "Building on green concrete.", solution: "Digital record of pour-to-cure lifecycle." },
      { title: "Site Induction Badge", description: "A tag on a visitor's vest that proves they have watched the safety video.", problem: "Uninformed visitors; liability exposure.", solution: "Verified safety induction." },
      { title: "Blue-Stake Utility Map", description: "A Node at the dig site that opens a geofenced map of underground lines.", problem: "Utility strikes; site shutdowns.", solution: "Localized utility visualizers." },
      { title: "Wastage Tracker", description: "Tapping a bin to log the volume of scrap material for future estimating.", problem: "Inaccurate bidding; excessive waste.", solution: "Data-driven waste analysis." },
      { title: "Crane Load-Limit Guide", description: "A tag in the cab that reveals specific load-chart and safety parameters.", problem: "Crane tipping; overloading math errors.", solution: "Configuration-specific safety limits." }
    ]
  },
  {
    name: "05. Real Estate",
    items: [
      { title: "Open House Sign-in", description: "A Node at the front door that pushes lead data directly to a CRM.", problem: "Illegible sheets; lost follow-ups.", solution: "Clean, digital lead capture." },
      { title: "Virtual Tour Guide", description: "A tag on a 'For Sale' sign that launches an immersive 3D walkthrough.", problem: "Drive-by leads lose interest.", solution: "Immediate visual conversion." },
      { title: "Agent Executive Node", description: "A digital business card that syncs the agent’s contact and listings.", problem: "Lost physical cards.", solution: "One-tap contact save and portal access." },
      { title: "Maintenance Request Bridge", description: "A Node in a rental unit that allows tenants to submit tickets instantly.", problem: "Tenant frustration; lost repair logs.", solution: "Streamlined property management." },
      { title: "Tenant Welcome Portal", description: "A tag in a new apartment providing Wi-Fi info and trash schedules.", problem: "Information overload; repetitive calls.", solution: "Self-service information hub." },
      { title: "Smart Lock Key Card", description: "A physical Node that acts as a secure second-factor key for entry.", problem: "Stolen keys; weak app security.", solution: "Encrypted hardware token for access." },
      { title: "Neighborhood Insight Hub", description: "A Node at a property showing nearby schools and amenities.", problem: "Buyer uncertainty; tedious research.", solution: "Localized value propositions." },
      { title: "Saved Search Magnet", description: "A magnet given to clients that opens their custom MLS search portal.", problem: "Clients use third-party portals.", solution: "Direct agent-controlled portal." },
      { title: "Closing Gift Utility", description: "A branded Node linking to local home service providers.", problem: "Generic gifts are forgotten.", solution: "Useful, branded utility." },
      { title: "Commercial Leasing Brief", description: "A tag on a storefront window that opens the full leasing packet.", problem: "Empty storefronts lack detail.", solution: "24/7 digital leasing office." },
      { title: "Neighborhood Noise Log", description: "A Node at a property that shows decibel readings from different times.", problem: "Post-sale complaints; lack of transparency.", solution: "Evidence-based environmental data." },
      { title: "Home Scene Preview", description: "A tag that allows buyers to trigger lighting and music scenes.", problem: "Static houses feel cold.", solution: "Experiential marketing interactivity." },
      { title: "HOA Document Bridge", description: "A Node in the clubhouse that opens the full library of HOA bylaws.", problem: "Bylaw confusion; high query volume.", solution: "Instant compliance and governing access." },
      { title: "School District Insight", description: "A tag in the kitchen that provides nearby school ratings.", problem: "Top buyer concern is schools.", solution: "Point-of-interest data rendering." },
      { title: "Property Tax History", description: "A discreet Node on the electrical panel revealing assessments.", problem: "Incomplete financial disclosure.", solution: "Radical transparency for transactions." }
    ]
  },
  {
    name: "06. HVAC & Trades (Industry)",
    items: [
      { title: "Unit Service Log", description: "An indestructible digital log attached directly to the HVAC unit.", problem: "Lost paper manuals; unknown maintenance history.", solution: "Asset-level intelligence for technicians." },
      { title: "Filter Change Reminder", description: "A tag on the furnace that sets a calendar reminder.", problem: "Clogged filters; equipment failure.", solution: "Recurring service triggers." },
      { title: "Plumbing Valve Guide", description: "A tag on shut-off valves showing a video for shutdown.", problem: "Panic-induced flooding.", solution: "Emergency preparedness at the point of action." },
      { title: "HVAC 'Digital Toolbox'", description: "A physical card to unlock proprietary manuals on-site.", problem: "Unsecured manuals; knowledge gaps.", solution: "Gated technical expertise." },
      { title: "Electrical Panel Directory", description: "Tags on circuits that open a digital directory of every outlet.", problem: "Mislabeled panels; trial-and-error work.", solution: "Precise digital mapping of circuitry." },
      { title: "Warranty Status Trigger", description: "A Node on equipment that verifies the remaining warranty.", problem: "Confusion over coverage.", solution: "Instant verification of asset protection." },
      { title: "Direct-to-Support Tap", description: "A sticker on a unit allowing one-tap emergency service calls.", problem: "Searching for invoices during failures.", solution: "Zero-latency support connection." },
      { title: "Parts Re-order Dashboard", description: "A Node in the tech’s van that inventories common parts.", problem: "Stock-outs in the field.", solution: "Localized inventory management." },
      { title: "Trade Certification Badge", description: "A tap-point on a shirt that proves legal licensing status.", problem: "Homeowner distrust.", solution: "Instant verification of credentials." },
      { title: "Project Completion Proof", description: "A tap-point where the tech logs final tests and sign-off.", problem: "Billing disputes; incomplete projects.", solution: "Digital proof-of-work sign-off." },
      { title: "Ductwork Leak-Test Proof", description: "A tag on a main trunk line that logs latest pressure results.", problem: "Inefficient airflow complaints.", solution: "Performance verification records." },
      { title: "Refrigerant Charge Log", description: "A Node on the compressor tracking amount and type added.", problem: "EPA compliance risks.", solution: "Detailed chemical logs for compliance." },
      { title: "Thermostat Logic Preset", description: "A card the tech taps against a smart thermostat for settings.", problem: "Tedious manual configuration.", solution: "Hardware-accelerated deployment." },
      { title: "Trade-to-Trade Handover", description: "A Node allowing an electrician to 'sign off' for the HVAC tech.", problem: "Scheduling delays; miscommunication.", solution: "Asynchronous project sequencing." },
      { title: "Emergency Parts Locator", description: "A tag on obsolete units searching regional legacy parts.", problem: "Repairing old systems is a search nightmare.", solution: "Supply-chain intelligence linked to IDs." }
    ]
  },
  {
    name: "07. Fire Safety",
    items: [
      { title: "Proof of Presence Audit", description: "Proving a human was physically present for the inspection.", problem: "Pencil-whipping safety logs.", solution: "Cryptographic proof of compliance." },
      { title: "Fire Alarm Test Logs", description: "Tags on alarm panels to log weekly test results.", problem: "Inconsistent testing; unreadable books.", solution: "Digitally-auditable life safety records." },
      { title: "Sprinkler System Status", description: "A Node on the riser revealing flow-test results.", problem: "System failures during fires.", solution: "Real-time status awareness." },
      { title: "Exit Route Verification", description: "Tags at fire exits that prove inspectors checked obstacles.", problem: "Blocked fire exits.", solution: "Hardware-enforced inspection path." },
      { title: "Hydrant Maintenance Record", description: "Anti-metal tags on hydrants showing last flush data.", problem: "Seized hydrants during emergencies.", solution: "Fire-department ready data." },
      { title: "First Responder Brief", description: "A Node providing floor plan and hazard locations.", problem: "Responders entering buildings blind.", solution: "Instant intelligence for tactical entry." },
      { title: "Smoke Detector Inventory", description: "A Node in each room to track age and battery status.", problem: "Forgotten battery changes.", solution: "Managed fleet of life-safety sensors." },
      { title: "Fire Suit Inspection", description: "Tags on PPE gear that track exposures and cleaning.", problem: "Degraded gear leading to injury.", solution: "Safety-first lifecycle management." },
      { title: "Emergency Lighting Log", description: "Monthly check-ins on backup battery lights.", problem: "Lights failing during outages.", solution: "Compliance-ready fixture logs." },
      { title: "Hazmat Incident Guide", description: "A tag on chemical storage providing spill protocols.", problem: "Delayed response to spills.", solution: "Life-saving protocols at point of storage." },
      { title: "Exit Sign Battery Audit", description: "A Node on backup lighting that logs last discharge.", problem: "NFPA code non-compliance.", solution: "Automated tracking for markers." },
      { title: "Fire Wall Integrity Log", description: "Tags on fire-rated partitions proving seal inspection.", problem: "Compromised fire barriers.", solution: "Proof-of-integrity sign-offs." },
      { title: "Evacuation 'Safe Zone' Count", description: "A Node at an assembly point that attendees tap.", problem: "Inaccurate headcounts in emergencies.", solution: "Digital muster protocol." },
      { title: "Flame-Retardant Spray Log", description: "A tag on curtains proving when last treated.", problem: "Rapid fire spread.", solution: "Managed treatment logs for textiles." },
      { title: "Smoke Damper Logic Check", description: "A Node proving success during last test.", problem: "Damper failure; smoke inhalation.", solution: "Mechanical-to-digital verification." }
    ]
  },
  {
    name: "08. Retail & Pop-ups",
    items: [
      { title: "Instant Storefront", description: "A tag at a pop-up shop that opens the e-store.", problem: "Friction in conversion.", solution: "Zero-latency checkout for leads." },
      { title: "Tap to Review Puck", description: "A checkout counter device going to a Google form.", problem: "Customers forget to review.", solution: "Capturing delight at purchase." },
      { title: "Interactive Shelf Talker", description: "A tag next to a product showing a video of it in use.", problem: "Confused customers.", solution: "Interactive sales assistant on shelf." },
      { title: "Dynamic Pricing Tag", description: "A retail tag that changes the price based on loyalty.", problem: "Static pricing doesn't reward fans.", solution: "Personalized experiences via logic." },
      { title: "Product Authenticity Bridge", description: "A tag inside luxury items proving purchase date.", problem: "Counterfeit resale.", solution: "Cryptographic proof of heritage." },
      { title: "In-Store Wayfinding", description: "Nodes throughout a large store showing current map location.", problem: "Customer frustration in aisles.", solution: "Localized mapping without indoor GPS." },
      { title: "Gift Registry Tap", description: "A Node next to products allowing registry adding.", problem: "Slow registry building.", solution: "One-tap registry management." },
      { title: "Retail Sentiment Routing", description: "A 'Thumbs Up/Down' Node at the exit to route feedback.", problem: "Negative reviews posted before resolution.", solution: "Intelligent reputation management." },
      { title: "Smart Clothing Rack", description: "A tag on a rack showing all available sizes.", problem: "Leaving when they don't see size.", solution: "Full inventory visibility at discovery." },
      { title: "Mobile Checkout Trigger", description: "A Node that launches a 'Self-Checkout' PWA.", problem: "Long checkout lines.", solution: "Frictionless self-service checkout." },
      { title: "Waitlist Replacer", description: "A customer taps a Node to join a digital waitlist.", problem: "Noisy pagers; missed spots.", solution: "Frictionless waitlist management." },
      { title: "Try-On Mirror Trigger", description: "A tag that shows item in different colors on smart mirror.", problem: "Limited stock in fitting rooms.", solution: "Augmented fitting room experience." },
      { title: "Bulk-Buy Calculator", description: "A Node on a wholesale shelf calculating price.", problem: "Confusion over volume discounts.", solution: "Real-time pricing logic." },
      { title: "Gift-Wrap Video Message", description: "A tag allowing the customer to upload a video message.", problem: "Generic gift cards.", solution: "Multimedia gifting experiences." },
      { title: "Out-of-Stock 'Ship-to-Home'", description: "A tag allowing online purchase for delivery.", problem: "Empty shelves equal lost revenue.", solution: "Capturing sales before they leave." }
    ]
  },
  {
    name: "09. Manufacturing",
    items: [
      { title: "Machine Calibration Log", description: "Tags on industrial equipment that track calibration.", problem: "Out-of-calibration machinery.", solution: "Proof-of-readiness for assets." },
      { title: "Tool Custody Tracking", description: "Verifying which employee has a high-value tool.", problem: "Tool loss; theft.", solution: "Real-time custody management." },
      { title: "Safety Lock-out/Tag-out", description: "A Node scanned by a supervisor to digitally 'unlock'.", problem: "Unauthorized operation deaths.", solution: "Hardware-enforced safety logic." },
      { title: "Material Batch Tracking", description: "NFC tags on raw material bins linking to composition.", problem: "Contaminated batches.", solution: "Full-lifecycle material traceability." },
      { title: "WIP Tracking", description: "A tag that follows a part through the assembly line.", problem: "Production bottlenecks.", solution: "Real-time visibility into the floor." },
      { title: "Operator Training Proof", description: "A Node on a machine that will only start if operator is trained.", problem: "Unskilled labor injury.", solution: "Logic-gated operation tied to HR." },
      { title: "Maintenance Help Node", description: "A tag on a machine that sends an 'Assistance Needed' alert.", problem: "Extended downtime.", solution: "One-tap request for reduced MTTR." },
      { title: "QC Sign-off Point", description: "A tap-point where inspector certifies tolerances.", problem: "Skipped QC steps.", solution: "Cryptographic quality certification." },
      { title: "Pallet Destination Control", description: "Managed redirects telling forklift driver where to go.", problem: "Misplaced inventory.", solution: "Dynamic material routing." },
      { title: "Industrial Asset Dashboard", description: "A central Node showing real-time uptime.", problem: "Lack of facility visibility.", solution: "Consolidated asset intelligence." },
      { title: "CNC Tool Offset Log", description: "A Node logging specific offsets used for a run.", problem: "Setup errors between shifts.", solution: "Digital memory for machine configs." },
      { title: "Pallet 'Pick-Path' Logic", description: "A tag on a forklift showing most efficient sequence.", problem: "Inefficient warehouse picking.", solution: "Hardware fulfillment logic." },
      { title: "Raw Material Purity Cert", description: "A Node on a chemical drum providing full lab analysis.", problem: "Chemical mix errors.", solution: "Instant compliance data at mixing." },
      { title: "Machine-Hour Meter Bridge", description: "Tapping a machine to view total run-time.", problem: "Asset failure due to usage.", solution: "Data-driven preventative maintenance." },
      { title: "Quality Rejection Log", description: "A red Node that logs the reason for a part's rejection.", problem: "Unknown root causes for defects.", solution: "Instant defect logging for correction." }
    ]
  },
  {
    name: "10. Hospitality",
    items: [
      { title: "The Smart Menu", description: "A restaurant table tag showing menu and ordering.", problem: "Staff shortages; slow service.", solution: "Self-service ordering reducing labor." },
      { title: "Hotel 'Local Guide'", description: "A room tag providing map of nearby sights.", problem: "Outdated paper maps.", solution: "Branded digital concierge." },
      { title: "Frictionless Wi-Fi Access", description: "An encrypted handshake that connects guests instantly.", problem: "Typing complex passwords.", solution: "Zero-friction guest connectivity." },
      { title: "Digital Room Key Card", description: "A physical card that grants secure access to locks.", problem: "Demagnetized keys.", solution: "Reliable, multi-factor hardware keys." },
      { title: "The Tip Jar Node", description: "A barista counter tag for frictionless tipping.", problem: "No cash for tips.", solution: "Digital gratitude enabled via NFC." },
      { title: "Room Service Order Point", description: "A bedside tag that opens menu and kitchen order.", problem: "Phone queue wait times.", solution: "Direct digital ordering for revenue." },
      { title: "Housekeeping Request", description: "A tag in the bathroom notifying if towels are needed.", problem: "Chasing down staff carts.", solution: "On-demand service triggers." },
      { title: "Poolside Drink Order", description: "A Node on the umbrella that geofences the order.", problem: "Waiters searching pool decks.", solution: "Localized ordering for luxury service." },
      { title: "Loyalty Check-in", description: "A tag at the hotel bar applying loyalty discounts.", problem: "Guests forgetting to ask.", solution: "Automated loyalty at point of sale." },
      { title: "Concierge Brief", description: "A tag to download current schedules and weather.", problem: "Information overload.", solution: "Pocket-ready event schedules." },
      { title: "Mini-Bar 'Auto-Bill'", description: "A Node inside mini-bar logging consumed items.", problem: "Theft; billing disputes.", solution: "Automated consumption logging." },
      { title: "Beach Towel Checkout", description: "A Node that allows guests to 'rent' a towel.", problem: "Unreturned towels.", solution: "Accountability for hospitality assets." },
      { title: "Valet 'Ready My Car'", description: "A bedside Node notifying valet to bring the car.", problem: "Long wait times in lobby.", solution: "Advanced car-ready notifications." },
      { title: "Housekeeping DND Toggle", description: "A tag by the door updating status to 'DND'.", problem: "Paper signs falling off.", solution: "Digital room status awareness." },
      { title: "Pillow Menu Selector", description: "A Node allowing guests to choose pillow types.", problem: "Generic sleep; uncomfortable guests.", solution: "Hyper-personalized guest comfort." }
    ]
  },
  {
    name: "11. Event Management",
    items: [
      { title: "Event 'Digital Swag Bag'", description: "Attendees tap a Node to download all event resources.", problem: "Discarded paper waste; printing costs.", solution: "Eco-friendly, permanent resource access." },
      { title: "VIP Access Badge", description: "An NFC-embedded wristband for area entrance.", problem: "Manual ticket checking.", solution: "Self-service identity verification." },
      { title: "Attendance Proof", description: "A geo-fenced Certificate of Attendance.", problem: "Forged records for professional credits.", solution: "Immutable proof of physical presence." },
      { title: "Speaker Executive Node", description: "A tag on the podium saving contact and slides.", problem: "Post-talk rush; lost networking.", solution: "Zero-friction knowledge transfer." },
      { title: "Interactive Floor Plan", description: "Nodes showing booth locations on a map.", problem: "Lost attendees; low booth traffic.", solution: "Localized wayfinding for trade shows." },
      { title: "Exhibitor Lead Capture", description: "A tag at a booth that attendees scan for contact.", problem: "Business card scanning lag.", solution: "Instant mutual follow-up for leads." },
      { title: "Session Feedback Loop", description: "A Node for instant session rating.", problem: "Low survey response rates.", solution: "Capturing feedback while fresh." },
      { title: "Photo Booth Link", description: "A tag for guests to download photos instantly.", problem: "Delayed delivery; low social share.", solution: "Instant social-ready event media." },
      { title: "Live Q&A Trigger", description: "A Node on the seat back opening Slido/Poll link.", problem: "Disruptive microphone passing.", solution: "Synchronized digital engagement." },
      { title: "Networking Matchmaker", description: "A Node attendees scan to see shared interests.", problem: "Difficult cold networking.", solution: "Data-driven networking introductions." },
      { title: "Session Q&A Queue", description: "A Node allowing attendees to submit questions.", problem: "Dominated Q&A sessions.", solution: "Moderated digital question queues." },
      { title: "Business Card Wall", description: "A station where attendees tap to 'leave' their info.", problem: "Messy physical card boards.", solution: "Clean digital participant directory." },
      { title: "Catering Allergen Filter", description: "A Node at the buffet showing filtered menu.", problem: "Emergency allergic reactions.", solution: "Inclusive, safe event catering." },
      { title: "Slide-Deck Grab", description: "A tag for attendees to download slides at the end.", problem: "Attendees photographing every slide.", solution: "Ensuring audience focus on talk." },
      { title: "Event Scavenger Hunt", description: "Nodes throughout a venue attendees must tap.", problem: "Low engagement with certain areas.", solution: "Gamification of attendee movement." }
    ]
  },
  {
    name: "12. Fine Arts & Museums",
    items: [
      { title: "Interactive Museum Tags", description: "A tag next to a painting playing an audio interview.", problem: "Reading tiny placards; disconnected.", solution: "Multimedia immersion at observation." },
      { title: "Artwork Authenticity", description: "Tags on sculptures proving heritage and ownership.", problem: "Art forgery; manual heritage logs.", solution: "Cryptographic proof of artwork identity." },
      { title: "Museum Donation Node", description: "A discreet tap-point for digital donations.", problem: "Reduced cash donations.", solution: "Frictionless philanthropy for culture." },
      { title: "Art Gallery Price Link", description: "A tag showing price and 'Buy Now' logic.", problem: "Collectors hesitant to ask.", solution: "Transparent acquisition logic." },
      { title: "Artist Portfolio Showcase", description: "A card carried by artist opening high-speed gallery.", problem: "Bulky portfolios.", solution: "Professional presentation of body of work." },
      { title: "Guided Tour Audio", description: "A Node that launches synchronized audio tour.", problem: "Unhygienic hardware guide rental.", solution: "Bring-your-own-device audio tours." },
      { title: "Meet the Artist Video", description: "A tag playing a video intro of the artist.", problem: "Artists feel distant from audience.", solution: "Humanizing art via direct connection." },
      { title: "AR Story Trigger", description: "A Node launching AR filter showing artwork history.", problem: "Static exhibits fail to show process.", solution: "Augmented reality storytelling." },
      { title: "Exhibition Catalog Download", description: "A tag allowing guests to download digital catalogs.", problem: "Expensive, heavy physical catalogs.", solution: "Permanent digital exhibition memory." },
      { title: "Gift Shop Link", description: "A tag linking to prints or merchandise in shop.", problem: "Visitors forget to visit gift shop.", solution: "Bridging exhibit to retail revenue." },
      { title: "Purchase 'Hold' Node", description: "A discreet Node for collectors to put a 24-hr hold.", problem: "Indecisive collectors losing items.", solution: "Self-service acquisition interest." },
      { title: "Restoration Timeline", description: "A tag showing time-lapse of restoration.", problem: "Conservation work is hidden.", solution: "Transparency into scientific preservation." },
      { title: "Residency Map", description: "A Node showing profiles of artists-in-residence.", problem: "Public doesn't know who is working.", solution: "Connecting public to living creation." },
      { title: "Member 'Fast-Track'", description: "A Node allowing members to skip line with tap.", problem: "Long lines reducing satisfaction.", solution: "Priority access logic for supporters." },
      { title: "Audio Description", description: "Nodes launching audio for visually impaired.", problem: "Museums often inaccessible.", solution: "Dignified accessibility for all patrons." }
    ]
  },
  {
    name: "13. Luxury Goods",
    items: [
      { title: "Product Heritage Log", description: "A tag inside bag proving original manufacture.", problem: "Counterfeit resale.", solution: "Immutable proof of manufacture." },
      { title: "VIP Maintenance Card", description: "A card granting access to exclusive services.", problem: "Difficult tracking of care history.", solution: "Managed lifecycle support for assets." },
      { title: "Limited Edition Proof", description: "A tag proving one of a specific numbered set.", problem: "Fake 'limited' runs.", solution: "Verifiable scarcity for elite items." },
      { title: "Resale Value Verifier", description: "A digital log proving professional appraisal.", problem: "Resale market uncertainty.", solution: "Trust-based resale ecosystem." },
      { title: "Brand Storytelling Node", description: "A tag showing craftsman’s signature and history.", problem: "Value lost in mass production.", solution: "Connecting owner to specific maker." },
      { title: "Personalized Styling", description: "A tag offering curated styling advice.", problem: "Post-purchase customer disconnect.", solution: "Ongoing luxury service relationship." },
      { title: "Ownership Transfer", description: "A cryptographic handshake for digital title.", problem: "Stolen goods sold as legitimate.", solution: "Secure digital chain of custody." },
      { title: "Counterfeit 'Heartbeat'", description: "A Node verifying chip ID against server.", problem: "Advanced counterfeit chips.", solution: "Real-time server-side validation." },
      { title: "Concierge Access Node", description: "A card granting 24/7 access to concierge.", problem: "Generic service.", solution: "Direct high-touch support for VIPs." },
      { title: "Bespoke Fitting Log", description: "A tag in suit storing measurements.", problem: "Re-ordering requires new fitting.", solution: "Perfect fit continuity across brand." },
      { title: "Exclusive Collection Invite", description: "A tag inside box granting invite to secret collections.", problem: "Generic marketing emails.", solution: "Reward-based engagement for loyalists." },
      { title: "Craftsman Interview", description: "A tag playing video of specific artisan.", problem: "Luxury becoming anonymous.", solution: "Resurrecting the 'human element'." },
      { title: "Owner's Club Registry", description: "A Node for owners to register in database.", problem: "Lack of brand community.", solution: "Verified community for enthusiasts." },
      { title: "Provenance Log", description: "A digital record tracking chain of ownership.", problem: "Unknown history of vintage items.", solution: "Documented history of care/ownership." },
      { title: "Item 'Stolen' Flag", description: "A feature allowing owner to mark chip as stolen.", problem: "Theft recovery impossible.", solution: "Digital rendering of 'unsellable' status." }
    ]
  },
  {
    name: "14. Animal Care",
    items: [
      { title: "Secure Lost & Found Tag", description: "A collar tag allowing masked owner contact.", problem: "Exposing personal numbers.", solution: "Privacy-first recovery via relay." },
      { title: "Medication History Badge", description: "A tag surfacing allergies and meds for vet.", problem: "Communication errors at the vet.", solution: "Critical health data at point of care." },
      { title: "Grooming Preference Log", description: "A tag logging specific cut and shampoo used.", problem: "Inconsistent grooming results.", solution: "Standardized care logs for animals." },
      { title: "Plant Care Log (Agri)", description: "A tag on planter showing water/sunlight needs.", problem: "Dead plants due to over/under care.", solution: "Smart agriculture logic." },
      { title: "Livestock Tracking", description: "Tags on cattle logging health and vaccinations.", problem: "Disease spread; manual errors.", solution: "Full-herd compliance monitoring." },
      { title: "Dog Park Sign-in", description: "A Node at gate verifying rabies records.", problem: "Unvaccinated dogs in public parks.", solution: "Community safety verification at entry." },
      { title: "Pet Sitter Home Base", description: "A Node on fridge providing instructions.", problem: "Misplaced paper instructions.", solution: "Centralized digital authority for pet care." },
      { title: "Service Animal Verification", description: "A tag on vest providing certification.", problem: "Fraudulent service animals.", solution: "Instant verified proof of legal status." },
      { title: "Pet Nutrition Tracker", description: "A tag on food bin logging exact amount.", problem: "Pet obesity; double-feeding.", solution: "Accountability for pet dietary health." },
      { title: "Breeding History Log", description: "A digital record of lineage and health.", problem: "Fraudulent pedigree papers.", solution: "Transparent genetic heritage tracking." },
      { title: "Equine Training Diary", description: "A tag on stall logging training intensity.", problem: "Inconsistent training; lost data.", solution: "Data-driven athletic management." },
      { title: "Aquarium Test Log", description: "A Node on tank logging pH and temperature.", problem: "Life loss due to poor quality history.", solution: "Precision environmental monitoring." },
      { title: "Walker Safety Check", description: "A tag on leash notifying when pet returned.", problem: "Owner anxiety over walker activity.", solution: "Real-time visibility into third-party care." },
      { title: "Foster Health Brief", description: "A tag providing history for caretakers.", problem: "Foster parents lack records.", solution: "Seamless data handover for rescue pets." },
      { title: "Migration Tracker", description: "Tags on enclosures providing natural info.", problem: "Low engagement.", solution: "Interactive wildlife education triggers." }
    ]
  },
  {
    name: "15. Enterprise Security",
    items: [
      { title: "GhostTrace Scan", description: "A security node running background checks.", problem: "Manual screening slow and error-prone.", solution: "Real-time gatekeeping for sensitive zones." },
      { title: "Encrypted File Key", description: "A physical card to unlock a hidden directory.", problem: "Password-only vulnerability.", solution: "Hardware-enforced encryption for data." },
      { title: "Sequential Workflow Gate", description: "A logic gate enforcing 3 other scans.", problem: "Skipped safety steps; accidents.", solution: "Hardware-enforced SOP compliance." },
      { title: "Identity Auth Badge", description: "A card proving commissioned Notary status.", problem: "Impersonation in professional roles.", solution: "Instant third-party verified identity." },
      { title: "Data Center Entry 2FA", description: "Node requiring both tap and biometric scan.", problem: "Stolen badges; server access risks.", solution: "True multi-factor physical access control." },
      { title: "Temporary Visitor Badge", description: "An NFC card that expires after set time.", problem: "Visitors overstaying access.", solution: "Time-gated access with auto-expiration." },
      { title: "Encrypted API Handshake", description: "Custom builds ensure project DNA is secure.", problem: "Insecure IoT transmission.", solution: "Architect-tier security for hardware." },
      { title: "Hardware-Based MFA", description: "A physical Node for cloud logins.", problem: "SMS-based 2FA is vulnerable.", solution: "Physical hardware token for cloud safety." },
      { title: "Patrol Checkpoint", description: "Nodes proofing guard patrol completion.", problem: "Guards sleeping; missed rounds.", solution: "Cryptographic proof of monitoring." },
      { title: "Emergency Lockdown", description: "A discreet Node initiating facility lockdown.", problem: "Slow response to threats.", solution: "Instant tactical response for safety." },
      { title: "Compliance Gate", description: "Node cross-referencing visitor ID databases.", problem: "Manual compliance checking gaps.", solution: "Real-time visitor vetting at perimeter." },
      { title: "Server Rack Biometrics", description: "Tag requiring tap and face-scan to unlock.", problem: "Physical theft from server rooms.", solution: "Gated physical access with biometrics." },
      { title: "Encrypted Document Key", description: "Physical card required to decrypt local files.", problem: "Stolen laptop data exposure.", solution: "Localized hardware decryption for privacy." },
      { title: "Patrol Proof-of-Presence", description: "Nodes guards must tap to prove patrol.", problem: "Faked logs; unmonitored zones.", solution: "Audit-ready proof of physical activity." },
      { title: "Temporary API Card", description: "Node granting time-gated access to API.", problem: "Permanent API keys are a liability.", solution: "Disposable hardware-linked access." }
    ]
  },
  {
    name: "16. Facility Management",
    items: [
      { title: "Emergency Shut-off", description: "A red tag near valves opening video shutdown.", problem: "Panic during failures.", solution: "Emergency preparedness at point of action." },
      { title: "Facility Cleaning Log", description: "Staff tap a Node to log service time.", problem: "Janitorial accountability issues.", solution: "Transparent auditable cleaning logs." },
      { title: "HVAC Filter Log", description: "A tag on unit tracking change history.", problem: "Clogged filters; equipment failure.", solution: "Managed fleet maintenance for air assets." },
      { title: "Pest Checkpoint", description: "Tags on traps logging inspection date.", problem: "Incomplete pest audits.", solution: "Compliance-ready logs for management." },
      { title: "Roof Inspection Proof", description: "A Node on roof hatch proving presence.", problem: "Uninspected roofs; missed leaks.", solution: "Proof-of-work for dangerous maintenance." },
      { title: "Utility Meter Reading", description: "A tag allowing the reader to input digits.", problem: "Transcription errors; slow billing.", solution: "Direct-to-database utility logging." },
      { title: "Parking Spot Reminder", description: "A tag on keychain logging GPS.", problem: "Forgetting parking location.", solution: "One-tap geofence logging." },
      { title: "Amenity Booking", description: "A Node at gym allowing reservations.", problem: "Overcrowded facilities.", solution: "Frictionless scheduling for shared assets." },
      { title: "Facility 'Fix-it' Node", description: "A tag on broken equipment for reporting.", problem: "Broken fixtures left unreported.", solution: "Crowdsourced maintenance for repairs." },
      { title: "Waste Management Log", description: "A tag on dumpster logging exact pickup.", problem: "Missed pickups; unknown efficiency.", solution: "Accountability for removal services." },
      { title: "Elevator Service Proof", description: "A tag logging technician's safety check.", problem: "Elevator failures; liability.", solution: "Public-facing proof of transport safety." },
      { title: "Roof Leak Tracker", description: "Nodes at vulnerability points to log status.", problem: "Repetitive leaks in same area.", solution: "Geographical maintenance history." },
      { title: "Pest Trap Logic", description: "A tag logging catch data.", problem: "Manual pest reporting is slow.", solution: "Digital management for high-compliance." },
      { title: "Waste Diversion Monitor", description: "Tapping bin to log volume diverted.", problem: "Unknown recycling rates.", solution: "Data-driven sustainability tracking." },
      { title: "Parking Lighting Audit", description: "A Node on each pole for bulb changes.", problem: "Dark lots; safety hazards.", solution: "Managed lighting infrastructure safety." }
    ]
  },
  {
    name: "17. Personal Productivity",
    items: [
      { title: "Bedside Sleep Mode", description: "A tag on nightstand setting alarm and DND.", problem: "Fiddling with phone settings.", solution: "One-tap transition to sleep mode." },
      { title: "Laundry Timer", description: "A tag on washer setting 45-minute timer.", problem: "Forgetting wet laundry.", solution: "Physical-to-digital habit reinforcement." },
      { title: "The Recipe Magnet", description: "A tag on spice rack pulling up cookbooks.", problem: "Searching with messy hands.", solution: "Point-of-need culinary intelligence." },
      { title: "Water Tracker", description: "A tag on bottle logging 16oz per tap.", problem: "Dehydration; tedious logging.", solution: "Gamified hydration habit reinforcement." },
      { title: "Grocery List Trigger", description: "A magnet on fridge opening shared lists.", problem: "Forgetting items; disjointed lists.", solution: "Syncing physical kitchen to digital cart." },
      { title: "WFH Focus Node", description: "A tag on desk setting phone to DND.", problem: "Distractions while working from home.", solution: "Industrial-grade focus initialization." },
      { title: "Bill Pay Reminder", description: "A tag on mail organizer opening bank.", problem: "Late fees; lost paper bills.", solution: "Contextual reminders at mail intake." },
      { title: "Pet Feeding Tracker", description: "A tag logging when dog was last fed.", problem: "Pet obesity; double-feeding.", solution: "Total accountability for pet wellness." },
      { title: "Medication Log Magnet", description: "A tag confirming dose, synced to dashboard.", problem: "Forgotten doses; family worry.", solution: "Peace of mind via physical habit tracking." },
      { title: "Smart Home Trigger", description: "A tag by door locking deadbolt and lights.", problem: "Checking multiple rooms.", solution: "Total home security in single tap." },
      { title: "Brain-Dump Node", description: "A tag opening a blank voice memo.", problem: "Late-night ideas forgotten.", solution: "Instant capture of creative flow." },
      { title: "Cooking Prep Timer", description: "A tag on kitchen scale opening timers.", problem: "Complex recipe timing errors.", solution: "Precision culinary timing from physical trigger." },
      { title: "Out-the-Door Checklist", description: "A Node by the exit reading a list.", problem: "Leaving without keys/wallet.", solution: "Passive security for daily operations." },
      { title: "Water-Me Reminder", description: "A tag on a planter setting notification.", problem: "Dead plants; inconsistent care.", solution: "Digital lifecycle management for flora." },
      { title: "Journaling Prompt", description: "A Node on a notebook opening new prompt.", problem: "Writer's block; inconsistent ritual.", solution: "Low-friction creative initialization." }
    ]
  },
  {
    name: "18. Fitness",
    items: [
      { title: "Gym Bag 'Hype' Mode", description: "A tag on bag opening workout app.", problem: "Momentum loss at start.", solution: "Zero-friction workout initialization." },
      { title: "Machine Setup Guide", description: "A tag on machine showing form video.", problem: "Injuries from improper form.", solution: "Personal trainer intelligence on every piece." },
      { title: "Personal Training Log", description: "A tag on trainer’s clipboard logging reps.", problem: "Inaccurate tracking.", solution: "Data-driven performance management." },
      { title: "Workout 'Start' Node", description: "A tag logging user as 'Active'.", problem: "Low attendance; low engagement.", solution: "Gamified gym presence via hardware." },
      { title: "Hydration Tracker", description: "A tag on bottle logging water to app.", problem: "Manual logging is tedious.", solution: "One-tap habit for athletes." },
      { title: "Yoga Flow Trigger", description: "A tag on yoga mat starting meditation.", problem: "Technical friction during mindfulness.", solution: "Frictionless transition to flow state." },
      { title: "Supplements Re-order", description: "A tag on protein tub for one-tap re-order.", problem: "Running out; lost nutrition.", solution: "Automated replenishment for athletes." },
      { title: "Locker Assignment", description: "A Node telling member which locker available.", problem: "Locker room confusion.", solution: "Optimized facility flow for members." },
      { title: "Recovery 'Rest' Node", description: "A tag on foam roller opening videos.", problem: "Skipped recovery; injury risk.", solution: "Ensuring proper post-workout care." },
      { title: "Race Day Brief", description: "A tag on runner’s bib with course map.", problem: "Lost runners; unknown water stations.", solution: "Critical race intelligence on person." },
      { title: "Boxing Round Timer", description: "A tag on heavy bag starting round timer.", problem: "Unstructured training.", solution: "Industrial-grade timing for athletes." },
      { title: "Swimming Lap Counter", description: "A waterproof Node logging laps.", problem: "Losing count during long swims.", solution: "Precision athletic logging in water." },
      { title: "Personal Best Trophy", description: "A tag allowing users to log PB.", problem: "PRs are forgotten.", solution: "Instant social-proof for achievements." },
      { title: "Yoga Playlist Sync", description: "A tag on mat starting music/lighting.", problem: "Atmosphere setup is slow.", solution: "Total environment control via mat tap." },
      { title: "Supplement Stack Log", description: "A tag logging daily intake of vitamins.", problem: "Forgotten supplements.", solution: "Proof-of-intake for nutritional compliance." }
    ]
  },
  {
    name: "19. Automotive",
    items: [
      { title: "Car Navigation Node", description: "A tag on dashboard setting GPS to 'Home'.", problem: "Typing addresses while driving.", solution: "Hands-free navigation initialization." },
      { title: "Driving Auto-Reply", description: "A tag in car toggling auto-respond for texts.", problem: "Distracted driving; social pressure.", solution: "Safety-first communication management." },
      { title: "Service History Log", description: "A tag in glovebox storing repair history.", problem: "Lost records.", solution: "Asset-level maintenance logs." },
      { title: "Emergency Roadside Brief", description: "A tag on windshield providing insurance.", problem: "Panic during breakdowns.", solution: "Emergency preparedness in driver sight." },
      { title: "Parking Meter Timer", description: "A tag on dash setting a timer.", problem: "Parking tickets.", solution: "Localized reminders for urban operations." },
      { title: "Vehicle ID Verification", description: "A tag in door jamb proving VIN.", problem: "Vehicle identity fraud.", solution: "Instant physical-to-digital identity proof." },
      { title: "Valet 'Safe Mode'", description: "A physical card limiting car speed.", problem: "Valet joyriding.", solution: "Hardware-enforced security for 3rd party use." },
      { title: "EV Charging Portal", description: "A tag on charger opening payment.", problem: "Complex app-switching.", solution: "Zero-friction energy replenishment." },
      { title: "Driver Profile Link", description: "A tag adjusting seats to driver.", problem: "Shared vehicle discomfort.", solution: "Personalized environments via identity logic." },
      { title: "Fuel Consumption Log", description: "A tag on fuel door logging price.", problem: "Inaccurate tracking.", solution: "Data-driven efficiency at refueling." },
      { title: "Trailer Connection", description: "A tag on hitch with safety guide.", problem: "Improper connection.", solution: "Mandatory safety verification for towing." },
      { title: "Tire Pressure History", description: "A Node in door jamb logging date.", problem: "Blowouts.", solution: "Managed maintenance for critical components." },
      { title: "Classic Car Showcase", description: "A Node on dashboard opening history.", problem: "Static placards.", solution: "Interactive non-contact storytelling." },
      { title: "Car-Wash Loyalty", description: "A tag on windshield deducting balance.", problem: "Lost loyalty cards.", solution: "Seamless hardware-verified service usage." },
      { title: "OBD-II Decoder", description: "A tag providing fault solutions.", problem: "Confusing engine lights.", solution: "Self-service diagnostic intelligence at source." }
    ]
  },
  {
    name: "20. Elder Care",
    items: [
      { title: "Speed Dial Node", description: "A tag on fridge calling a specific person.", problem: "Complex menus.", solution: "Simplified, physical SOS / contact trigger." },
      { title: "Medication Reminder", description: "A tag on fridge showing meds taken.", problem: "Elderly non-compliance.", solution: "Zero-effort health monitoring for seniors." },
      { title: "Daily Wellness Check", description: "A tag senior taps to notify family.", problem: "Family anxiety; isolated seniors.", solution: "Passive, dignified wellness monitoring." },
      { title: "Doctor Visit Brief", description: "A card surfacing full medical history.", problem: "Seniors forgetting history.", solution: "Empowering seniors with portable health data." },
      { title: "Simplified Smart Home", description: "A tag on lamp that turns it on/off.", problem: "Struggle with apps.", solution: "Restoring independence through physical control." },
      { title: "Meal Delivery Menu", description: "A tag opening menu for delivery.", problem: "Lost paper menus.", solution: "Streamlined nutrition access for seniors." },
      { title: "Emergency SOS Button", description: "A bright Node on walker sending alert.", problem: "Falls when away from phones.", solution: "Safety-first wearable/hardware SOS protocol." },
      { title: "Cognitive Trigger", description: "A tag on book opening brain-training game.", problem: "Cognitive decline.", solution: "Interactive cognitive health rituals." },
      { title: "Home Care Attendance", description: "A tag for health aides to log arrival.", problem: "Inaccurate billing.", solution: "Accountability for professional care services." },
      { title: "Audio Instruction Guide", description: "A tag playing audio for appliance use.", problem: "Confusion over remote buttons.", solution: "Dignified vocal guidance for daily tasks." },
      { title: "I'm Okay Magnet", description: "A tag senior taps to send 'all-good'.", problem: "Family worry.", solution: "Simple daily affirmation protocol." },
      { title: "Hearing Aid Log", description: "A tag tracking battery life.", problem: "Hearing loss during critical events.", solution: "Managed hearing assistance communication." },
      { title: "Audio-Book Launcher", description: "A tag on book cover starting audio.", problem: "Low vision.", solution: "Restoring literary access via audio triggers." },
      { title: "Emergency Bracelet", description: "A wearable Node calling contacts.", problem: "Unidentified seniors in emergencies.", solution: "Wearable life-safety identity for high-risk." },
      { title: "Fall-Detection Reset", description: "A Node senior taps to cancel alarms.", problem: "Unnecessary ambulance dispatches.", solution: "Giving seniors control over automated safety." }
    ]
  },
  {
    name: "21. Human Resources",
    items: [
      { title: "Resume-to-Meeting", description: "A tag on portfolio giving 15-min call window.", problem: "Delayed hiring feedback.", solution: "Zero-latency hiring connections for talent." },
      { title: "The Resume Node", description: "A tag on physical resume playing video intro.", problem: "Resumes are flat.", solution: "Humanizing hiring at point of review." },
      { title: "Employee Onboarding", description: "Card given to new hires with login/maps.", problem: "New hire confusion.", solution: "Industrial-grade onboarding for retention." },
      { title: "Corporate Culture Brief", description: "Node in breakroom showing company goals.", problem: "Disconnected employees.", solution: "Ongoing cultural reinforcement via touchpoints." },
      { title: "Benefit Enrollment", description: "Tag on HR poster opening insurance signup.", problem: "Missing deadlines.", solution: "Frictionless benefit access for wellness." },
      { title: "Employee Sentiment Tap", description: "Mood Meter where staff can tap sentiment.", problem: "Undiagnosed toxicity.", solution: "Real-time employee engagement monitoring." },
      { title: "Desk Assignment Log", description: "A tag on hot-desk allowing spot claiming.", problem: "Office chaos.", solution: "Optimized office resource management." },
      { title: "Safety Training Proof", description: "Tag on badge proving certification.", problem: "Uncertified staff operating machinery.", solution: "Compliance verification at machine level." },
      { title: "Internal Referral Bridge", description: "Node for employees to quickly submit friends.", problem: "Friction in referral programs.", solution: "Incentivized internal recruiting via NFC." },
      { title: "Company Store Discount", description: "Tag on badge applying staff discount.", problem: "Forgetting discount codes.", solution: "Seamless employee benefits at point of sale." },
      { title: "New Hire Welcome Card", description: "Card giving schedule and desk location.", problem: "First-day anxiety.", solution: "Professional, structured first-day protocols." },
      { title: "Internal Job Interest", description: "Tag on poster to discreetly follow opening.", problem: "Fear of retribution.", solution: "Privacy-first career pathing for employees." },
      { title: "Manager Feedback Puck", description: "Node for anonymous feedback or kudos.", problem: "Fear of direct feedback.", solution: "Bridging communication between staff/leadership." },
      { title: "Benefit Digital-Twin", description: "Card rendering all insurance/401k info.", problem: "Lost benefit cards.", solution: "Employee's professional identity in one card." },
      { title: "Safety 'Near-Miss' Log", description: "Node for workers to instantly report a hazard.", problem: "Unreported hazards.", solution: "Active safety culture through reporting." }
    ]
  },
  {
    name: "22. Education",
    items: [
      { title: "STEM Lab Brief", description: "A Node detailing current research project.", problem: "Invisible research.", solution: "Educational transparency at site of research." },
      { title: "Homeschool Planning Log", description: "Tag in homeschool room to log hours.", problem: "Difficult compliance logging.", solution: "Simplified tracking for independent learners." },
      { title: "Interactive Textbook", description: "Tags in book opening math video tutorials.", problem: "Students getting stuck.", solution: "Augmenting physical study with intelligence." },
      { title: "Student Attendance", description: "Tag at door logging student as 'Present'.", problem: "Manual roll-call wasting 10 mins.", solution: "Automated attendance for instruction time." },
      { title: "Library Check-out", description: "Tag in book allowing smartphone checkout.", problem: "Long library lines.", solution: "Self-service management for modern campus." },
      { title: "Lab Equipment Guide", description: "Tag on microscope showing 'How-to' video.", problem: "Expensive equipment broken.", solution: "Just-in-time instruction for lab safety." },
      { title: "Tutoring Appointment", description: "Node on teacher desk opening Calendly.", problem: "Office hour confusion.", solution: "Simplified academic support access." },
      { title: "School Cafeteria Menu", description: "Tag on table showing menu and allergens.", problem: "Allergic reactions in school.", solution: "Informed, safe dining for student health." },
      { title: "Bus Route Tracker", description: "Tag at exit telling when bus arriving.", problem: "Students waiting in rain.", solution: "Real-time logistics for transportation." },
      { title: "Digital Diploma Bridge", description: "Tag on diploma opening secure digital copy.", problem: "Lost diplomas.", solution: "Immutable proof of graduation on person." },
      { title: "Experiment Tracker", description: "Tag logging results of multiple trials.", problem: "Lost lab data.", solution: "Data integrity for future STEM pros." },
      { title: "Ask a Tutor Node", description: "Tag on library table sending help notification.", problem: "Students too shy.", solution: "Point-of-need academic intervention." },
      { title: "Group Chat Node", description: "Tag on folder opening project Discord.", problem: "Disconnected teams.", solution: "Centralized communication for learning." },
      { title: "Homework Submit Point", description: "Node students tap to turn in work.", problem: "Missing homework.", solution: "Digital timestamped proof of submission." },
      { title: "STEM Lab Guide (USM)", description: "Node providing walkthrough of USM equipment.", problem: "Intimidating hardware.", solution: "Student-centered lab environment onboarding." }
    ]
  },
  {
    name: "23. Customer Experience",
    items: [
      { title: "Feedback Loop Node", description: "Routes happy customers to reviews and unhappy to support.", problem: "Public negative reviews.", solution: "Intelligent sentiment routing for brand." },
      { title: "Loyalty Reward Tap", description: "Puck at checkout enrolling customers instantly.", problem: "Complex signup.", solution: "Zero-friction retention marketing." },
      { title: "VIP 'Secret' Menu", description: "Discreet Node only for loyal customers.", problem: "Brand boredom.", solution: "Exclusivity as a brand retention tool." },
      { title: "Customer Support Bridge", description: "Tag on product initiating live chat.", problem: "Frustrated customers.", solution: "Real-time resolution at point of usage." },
      { title: "Warranty Registration", description: "Tag pre-filling name and ID into form.", problem: "Low registration.", solution: "Capturing 1st-party data via convenience." },
      { title: "In-Store Expert Request", description: "Tag in aisle sending alert to associate.", problem: "Customer can't find staff.", solution: "Enhanced floor coverage via hardware." },
      { title: "Personalized Greeting", description: "Tag at entrance greeting loyal customer by name.", problem: "Retail feels cold.", solution: "Boutique-level personalization at scale." },
      { title: "Brand Storytelling", description: "Tag showing 'Behind-the-Scenes' of product.", problem: "Lost brand value.", solution: "Building emotional brand equity via origin." },
      { title: "Customer Wishlist Tag", description: "Tag adding items to digital wishlist.", problem: "Customers forget items.", solution: "Bridging browsing to digital revenue." },
      { title: "Event Invitation Tap", description: "Physical card given to customer for invite-only.", problem: "Lost invites.", solution: "High-perceived-value physical invites." },
      { title: "Interactive Wayfinder", description: "Node highlighting fastest route to item.", problem: "Frustration in complex retail.", solution: "Point-to-point store navigation." },
      { title: "Unboxing Tutorial", description: "Tag on box playing assembly video guide.", problem: "Returns due to difficult assembly.", solution: "Ensuring customer success from minute one." },
      { title: "Retail Mood Tracker", description: "Node where customers tap emoji for sentiment.", problem: "No visibility into store vibe.", solution: "Data-driven facility management based on mood." },
      { title: "VIP 'Backstage' Access", description: "Physical card granting exclusive brand content.", problem: "Generic marketing.", solution: "Rewarding superfans with digital experience." },
      { title: "Subscription Skip", description: "Tag allowing customer to delay shipment.", problem: "Churn due to backlog.", solution: "Reducing churn through consumer control." }
    ]
  },
  {
    name: "24. Agriculture",
    items: [
      { title: "Plant Care Log", description: "Tag on planter telling when last watered.", problem: "Yield loss.", solution: "Precision care history for high-value ag." },
      { title: "Livestock Vaccination", description: "Tags on cattle logging health history.", problem: "Disease risk.", solution: "Digital integrity for health/resale value." },
      { title: "Irrigation Control", description: "Tag on valve allowing remote turn-on.", problem: "Driving to remote fields.", solution: "IoT bridge at the physical valve point." },
      { title: "Crop Yield Verification", description: "Tag at grain bin logging moisture.", problem: "Inaccurate reporting.", solution: "Digital manifest for farm-to-table trace." },
      { title: "Soil Health Dashboard", description: "Tag in field providing test results.", problem: "Over-fertilization.", solution: "Precision nutrient management." },
      { title: "Farm Equipment Logs", description: "Indestructible tags revealing oil change history.", problem: "Tractor failure downtime.", solution: "Fleet maintenance logs in harsh environments." },
      { title: "Pesticide Application", description: "Tag at entrance logging chemical applied.", problem: "Accidental drift.", solution: "Compliance-first safety signage." },
      { title: "Greenhouse Climate", description: "Tag on vent showing temperature history.", problem: "Overheating; crop death.", solution: "Visualized environmental history at vent." },
      { title: "B2B Farmer’s Market", description: "Tag at booth showing weekly stock.", problem: "Chefs unable to plan menus.", solution: "Live wholesale availability for partners." },
      { title: "Grain Bin Moisture", description: "Tag on bin tracking humidity and temp.", problem: "Grain rot financial losses.", solution: "Protecting harvest value via monitoring." },
      { title: "Fence-Line Inspection", description: "Nodes at points proving safety check.", problem: "Escaped livestock.", solution: "Verified perimeter maintenance for acreage." },
      { title: "Greenhouse Vent Trigger", description: "Tag allowing farmer to open/close via dashboard.", problem: "Labor-intensive manual venting.", solution: "Remote climate control via hardware." },
      { title: "Soil Nutrient History", description: "Node storing 5 years of test results.", problem: "Poor rotation planning.", solution: "Generational data for sustainability." },
      { title: "Tractor Implement How-to", description: "Tag on harvester attachment opening video.", problem: "Incorrect calibration.", solution: "Technical guidance for farm machinery." },
      { title: "My Node Agri-Pitch", description: "Card carried by farmer showing technical logic.", problem: "Agri-tech seen as too complex.", solution: "Demonstrating farm intelligence to buyers." }
    ]
  },
  {
    name: "XXV. Advanced Logic (The 'Architect' Tier)",
    items: [
      { title: "The 'GhostTrace' Scan", description: "A security node running background checks.", problem: "Manual screening; security gaps.", solution: "Instant, real-time security gatekeeping." },
      { title: "Encrypted File Vault", description: "A physical 'Key' card required to unlock a hidden directory.", problem: "Password-only vulnerability.", solution: "Hardware-based second factor authentication." },
      { title: "Sequential Workflow Gate", description: "A logic gate enforcing scanned order.", problem: "Skipping critical process steps.", solution: "Hardware-enforced SOPs." },
      { title: "Dynamic Pricing Tag", description: "Tag changing price based on loyalty status.", problem: "Fixed pricing doesn't reward fans.", solution: "Personalized, dynamic retail experiences." },
      { title: "Water Intake Tracker", description: "Tag logging 16oz to health app.", problem: "Manual logging is tedious.", solution: "One-tap health habit reinforcement." },
      { title: "Parking Spot Reminder", description: "Tag logging GPS coordinates.", problem: "Forgetting parking location.", solution: "Instant geofence logging." },
      { title: "Speed Dial Node", description: "Tag calling specific contact when tapped.", problem: "Complex menus for seniors.", solution: "Simplified SOS / contact trigger." },
      { title: "Resume-to-Meeting Bridge", description: "Tag giving 15-min 'Instant Call' window.", problem: "Delayed hiring feedback.", solution: "Zero-latency hiring connections." },
      { title: "Driving Auto-Reply", description: "Tag toggling mode to auto-respond to texts.", problem: "Distracted driving.", solution: "Safe, automated driving presence." },
      { title: "Subscription Renewal", description: "Tag on product re-ordering item with one tap.", problem: "Friction in re-ordering.", solution: "Amazon Dash-style convenience." },
      { title: "Attendance Proof", description: "Tag providing geofenced cert on-site.", problem: "Forged attendance records.", solution: "Proof-of-location certification." },
      { title: "Feedback Loop", description: "Tag routing happy customers to reviews.", problem: "Unhappy customers leaving bad reviews.", solution: "Intelligent sentiment routing." },
      { title: "Digital 'Dead Man's Switch'", description: "Tag scanned every 24 hours for wellness check.", problem: "Lone worker safety concerns.", solution: "Passive safety monitoring." },
      { title: "The 'My Node' Pitch", description: "A card that loads this exhaustive capability list.", problem: "Clients don't understand NFC depth.", solution: "The ultimate capability showcase in your pocket." }
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
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div id="projects" className="min-h-screen bg-[#1A1A1B] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <nav className="flex flex-wrap gap-4 mb-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">
            <a href="/" className="hover:text-[#E5B1B1] transition-colors">MYNODE</a>
            <span>/</span>
            <a href="/#capability" className="hover:text-[#E5B1B1] transition-colors">CAPABILITY</a>
            <span>/</span>
            <span className="text-[#E5B1B1]">PROJECTS</span>
            <span>/</span>
            <a href="/#faq" className="hover:text-[#E5B1B1] transition-colors">FAQ</a>
            <span>/</span>
            <a href="/#about" className="hover:text-[#E5B1B1] transition-colors">ABOUT</a>
            <span>/</span>
            <a href="/#brief" className="hover:text-[#E5B1B1] transition-colors">INITIATE BRIEF</a>
          </nav>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-[#F8F8F8]">
            Capability <span className="rose-gold-shine">Index</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl leading-relaxed mb-12">
            I build logic-driven environments. Below is a deep-dive into the ways my NFC Nodes solve real-world problems. This turns your site into an educational hub that proves engineering depth.
          </p>

          <div className="bg-black/40 border border-white/5 p-6 md:p-10">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#E5B1B1] mb-6">Logic Router / Quick Navigation</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {nfcData.map((cat, idx) => (
                <button 
                  key={cat.name} 
                  onClick={() => scrollToSection(`cat-${idx}`)}
                  className="text-[10px] font-bold text-gray-500 hover:text-[#E5B1B1] uppercase tracking-widest transition-colors text-left"
                >
                  <span className="text-gray-700 mr-2">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  {cat.name.split('.')[cat.name.split('.').length - 1].trim()}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="space-y-24">
          {nfcData.map((category, idx) => (
            <section key={category.name} id={`cat-${idx}`} className="scroll-mt-32">
              <h2 className="text-2xl font-black uppercase tracking-[0.3em] text-[#E5B1B1] mb-10 border-b border-[#E5B1B1]/20 pb-4">
                {category.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <NfcItem key={item.title} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-24 p-12 bg-[#0F0F0F] border border-[#E5B1B1]/30 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-9xl font-black text-white/[0.02] pointer-events-none select-none">BUILD</div>
          <h2 className="text-3xl font-bold text-[#F8F8F8] mb-6">Found a Use Case for Your Business?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto italic">
            These are architectural foundations. Every project I deploy is bespoke, engineered to navigate your specific quirks and compliance requirements.
          </p>
          <a 
            href="/#brief" 
            className="inline-flex justify-center items-center px-10 py-5 bg-[#E5B1B1] text-[#1A1A1B] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.querySelector('#brief')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Initialize Custom Build
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;