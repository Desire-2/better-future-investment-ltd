import { createContext, useContext, ReactNode } from 'react';

export type ServiceInfo = {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
  whyUs: string[];
  image: string;
};

export const SERVICES: ServiceInfo[] = [
  {
    id: 'training',
    title: 'Training Services',
    description: 'Professional training programs to build skills and capacity.',
    icon: 'GraduationCap',
    details: [
      'Entrepreneurship training',
      'Computer & digital skills',
      'Language training',
      'Corporate training',
      'Sciences and Mathematics'
    ],
    whyUs: [
      'Practical and interactive approach',
      'Industry-relevant curriculum',
      'Real life scenarios',
      'Flexible schedules (Day, Evening, Weekend, Online)'
    ],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'consultancy',
    title: 'Consultancy Services',
    description: 'Expert consulting services to improve business performance and growth.',
    icon: 'Briefcase',
    details: [
      'Business strategy',
      'Project management',
      'Financial advisory',
      'Organizational development',
      'Education'
    ],
    whyUs: [
      'Practical, results-driven solutions',
      'Tailored to your needs',
      'Expert advisory team'
    ],
    image: 'https://images.unsplash.com/photo-1454165833767-027ffcd9f88c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'supply-of-goods',
    title: 'Supply of Goods',
    description: 'Reliable sourcing and delivery of goods to keep your operations running smoothly.',
    icon: 'Package',
    details: [
      'Office and facility supplies',
      'Bulk procurement',
      'Vendor coordination',
      'Timely delivery and distribution'
    ],
    whyUs: [
      'Trusted supplier network',
      'Competitive pricing',
      'Dependable fulfillment'
    ],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'support',
    title: 'Support Services',
    description: 'Essential operational support to help businesses run smoothly.',
    icon: 'Users',
    details: [
      'Office support staff',
      'Administrative assistance',
      'Logistics support',
      'Facility management'
    ],
    whyUs: [
      'Efficient operations',
      'Reliable personnel',
      'Seamless logistics'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'hospitality',
    title: 'Hospitality Services',
    description: 'High-quality hospitality services for comfort and customer satisfaction.',
    icon: 'Hotel',
    details: [
      'Catering services',
      'Event support',
      'Guest management',
      'Facility services'
    ],
    whyUs: [
      'Customer satisfaction focused',
      'Professional management',
      'Excellence in delivery'
    ],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'cleaning',
    title: 'Cleaning Services',
    description: 'Professional cleaning solutions for offices, homes, industries, and institutions.',
    icon: 'Sparkles',
    details: [
      'Office cleaning',
      'Residential cleaning',
      'Post-construction cleaning',
      'Deep cleaning',
      'Carpet & sofa cleaning',
      'Window cleaning'
    ],
    whyUs: [
      'Trained staff',
      'Modern equipment',
      'Eco-friendly products'
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'security',
    title: 'Security Services',
    description: 'Reliable security solutions to protect your people and assets.',
    icon: 'ShieldCheck',
    details: [
      'Security guards',
      'Event security',
      'Access control',
      'Surveillance support'
    ],
    whyUs: [
      'Trained personnel',
      '24/7 availability',
      'Confidentiality in our work',
      'Respect'
    ],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200'
  }
];

export const COMPANY_INFO = {
  name: 'Better Future Investment Ltd',
  registration: '150034294',
  location: 'Rwanda, Kigali, Gasabo, Remera',
  phones: ['+250780337341', '0790921526'],
  emails: ['info@betterfutureinvestiment.com'],
  mission: 'To deliver high-quality, reliable, and innovative services that improve efficiency and create value for our clients.',
  vision: 'To become a leading service provider in Rwanda and across Africa.',
  values: ['Integrity', 'Professionalism', 'Excellence', 'Customer Focus', 'Innovation'],
  team: [
    {
      name: 'NIZEYIMANA Mathias',
      role: 'Managing Director',
      bio: 'Mathias NIZEYIMANA is a dedicated professional based in Rwanda, known for his strong interest in education, business development, operations management, and service delivery. He is committed to supporting organizations and individuals through practical solutions that improve efficiency, productivity, and long term growth.'
    },
    {
      name: 'Jean Paul Niyigaba',
      role: 'Manager',
      bio: 'Jean Paul Niyigaba is a finance and consulting professional based in Kigali, Rwanda, with strong expertise in audit, financial reporting, and business advisory. He currently serves as a Senior Auditor at BDO East Africa.'
    }
  ]
};
