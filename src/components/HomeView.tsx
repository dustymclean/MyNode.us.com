import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import VcdGenerator from './VcdGenerator';
import Capability from './Capability';
import HardwareStore from './HardwareStore';
import ProfessionalServices from './ProfessionalServices';
import PricingTable from './PricingTable';
import Portfolio from './Portfolio';
import About from './About';
import Estimator from './Estimator';
import IntakeForm from './IntakeForm';

const HomeView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>MyNode | Industrial NFC Identity & Notary Architecture</title>
        <meta name="description" content="Deploy industrial-grade NFC identities and automated legal ecosystems. Engineered by Dusty McLean, MyNode bridges secure hardware with intelligent CRM and Notary destinations." />
      </Helmet>
      <Hero />
      <Capability />
      <VcdGenerator />
      <HardwareStore />
      <ProfessionalServices />
      <PricingTable />
      <Portfolio />
      <About />
      <Estimator />
      <IntakeForm />
    </>
  );
};

export default HomeView;