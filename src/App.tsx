import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import ProjectsView from './components/ProjectsView';
import VcdBuilderView from './components/VcdBuilderView';
import FAQView from './components/FAQView';
import Footer from './components/Footer';

const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <ScrollToHashElement />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/projects" element={<ProjectsView />} />
          <Route path="/vcd-builder" element={<VcdBuilderView />} />
          <Route path="/faq" element={<FAQView />} />
          <Route path="*" element={<HomeView />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;