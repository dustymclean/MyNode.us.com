import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsView from './components/ProjectsView';
import HardwareStore from './components/HardwareStore';
import ProfessionalServices from './components/ProfessionalServices';
import FAQView from './components/FAQView';
import Footer from './components/Footer';
import IntakeForm from './components/IntakeForm';
import { View } from './types';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  const renderContent = () => {
    switch (currentView) {
      case 'projects':
        return <ProjectsView />;
      
      case 'shop':
        return <HardwareStore />; // NEW: Renders the store
      
      case 'faq':
        return <FAQView />;
        
      case 'home':
      default:
        return (
          <>
            <Hero setView={setCurrentView} />
            <ProfessionalServices /> {/* NEW: Sells your engineering services */}
            <div id="brief">
              <IntakeForm />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1B] text-[#F8F8F8]">
      <Navbar currentView={currentView} setView={setCurrentView} />
      <main>
        {renderContent()}
      </main>
      <Footer setView={setCurrentView} />
    </div>
  );
}

export default App;