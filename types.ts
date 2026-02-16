import React from 'react';

// UPDATE: Added 'shop' to the allowed views
export type View = 'home' | 'projects' | 'vcd-builder' | 'faq' | 'shop';

export interface VcdData {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  prefix?: string;
  suffix?: string;
  nickname?: string;
  phone: string;
  email: string;
  website: string;
  organization: string;
  title: string;
  role?: string;
  // Communication
  mobilePhone?: string;
  homePhone?: string;
  faxPhone?: string;
  pagerPhone?: string;
  workEmail?: string;
  personalEmail?: string;
  // Socials
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  github?: string;
  facebook?: string;
  youtube?: string;
  tiktok?: string;
  whatsapp?: string;
  skype?: string;
  // Logistics
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  // Personal
  birthday?: string;
  anniversary?: string;
  notes?: string;
  createdAt: string;
}

export type FoundationType = 'website' | 'nfc-tag';

export interface PricingState {
  foundationType: FoundationType;
  pages: number;
  // Website Options
  nfc: boolean;
  crm: boolean;
  ecommerce: boolean;
  // NFC Tag Options
  vcdLogic: boolean;
  redirectControl: boolean;
  tapAnalytics: boolean;
}

export interface PortfolioItem {
  title: string;
  url: string;
  description: string;
  icon: React.ReactNode;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'NFC Technology Insights' | 'Web Development Strategies' | 'Business Identity Branding';
  excerpt: string;
  date: string;
}

export interface User {
  email: string;
  name: string;
  savedVcds: VcdData[];
  projects: { name: string; status: 'Engineering' | 'Deploying' | 'Active' }[];
}

export interface NfcWay {
  title: string;
  description: string;
  problem?: string;
  solution?: string;
}

export interface NfcCategory {
  name: string;
  items: NfcWay[];
}