
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VcdGenerator from './components/VcdGenerator';
import ProfessionalServices from './components/ProfessionalServices';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Estimator from './components/Estimator';
import IntakeForm from './components/IntakeForm';
import Footer from './components/Footer';
import ProjectsView from './components/ProjectsView';
import VcdBuilderView from './components/VcdBuilderView';
import HardwareStore from './components/HardwareStore';
import PricingTable from './components/PricingTable';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  // Dynamic Metadata & SEO Management
  useEffect(() => {
    let title = "MyNode.us.com | Physical Cards. Intelligent Destinations.";
    let description = "Bespoke NFC hardware and high-performance web architecture by Dusty McLean. Engineering the bridge between physical identity and digital logic.";

    switch (currentView) {
      case 'projects':
        title = "Capability Index | 50+ NFC Use Cases | MyNode.us.com";
        description = "Explore 50 industrial and personal NFC applications. From medical IDs to asset tracking, discover the power of engineered hardware and digital bridges.";
        break;
      case 'vcd-builder':
        title = "Master VCD Builder | Create Your Digital ID | MyNode.us.com";
        description = "Exhaustive identity parameterization. Build and compile your professional digital contact card (vCard) for instant mobile integration. Secure and local.";
        break;
      default:
        title = "MyNode.us.com | Physical Cards. Intelligent Destinations.";
        description = "Bespoke NFC hardware and high-performance web architecture by Dusty McLean. Engineering the bridge between physical identity and digital logic.";
        break;
    }

    // Apply metadata updates
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', description);
    
    // Update OpenGraph for social sharing consistency
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update Twitter Cards
    const twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);

    const twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);

  }, [currentView]);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar currentView={currentView} setView={setCurrentView} />
      <main>
        {currentView === 'home' && (
          <>
            <Hero setView={setCurrentView} />
            <VcdGenerator /> {/* DIY Platform */}
            <HardwareStore /> {/* Direct Revenue Point 1 */}
            <ProfessionalServices />
            <PricingTable /> {/* Direct Revenue Point 2 */}
            <Portfolio /> {/* Proof of Build */}
            <About /> {/* Who is Dusty McLean? */}
            <Estimator />
            <IntakeForm /> {/* The Brief */}
          </>
        )}
        {currentView === 'projects' && (
          <ProjectsView />
        )}
        {currentView === 'vcd-builder' && (
          <VcdBuilderView setView={setCurrentView} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
