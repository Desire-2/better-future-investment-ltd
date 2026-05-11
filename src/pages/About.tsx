import { motion } from 'motion/react';
import { Shield, Target, Heart, Eye, Lightbulb, Star, Users, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Link } from 'react-router-dom';

export function About() {
  const valueIcons: Record<string, any> = {
    'Integrity': Shield,
    'Professionalism': Target,
    'Excellence': Heart,
    'Customer Focus': Eye,
    'Innovation': Lightbulb
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/photo-1497366754035-f200968a6e72.png" 
            className="w-full h-full object-cover opacity-20"
            alt="Office background" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-900/80 to-primary-900" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-100/70 max-w-2xl mx-auto italic font-light">
              "Building Today, Securing Tomorrow"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Are We */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573161158521-8034a81863bc?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent-500 rounded-3xl -z-0 hidden md:block" />
            </div>
            
            <div>
              <h2 className="text-sm font-bold text-accent-600 uppercase tracking-widest mb-4">Our Identity</h2>
              <h3 className="text-4xl font-display font-bold text-primary-900 mb-8">Professional Excellence Rooted in Rwanda</h3>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  BETTER FUTURE INVESTMENT LTD is a Rwanda based company delivering integrated solutions across Training, Consultancy, Supply of Goods, Support, Hospitality, Cleaning, and Security services.
                </p>
                <p>
                  We serve organizations, NGOs, and individuals with professional expertise, reliability, and a strong commitment to excellence. We are entitled to provide affordable, flexible, and high quality services through a trusted and well-trained team.
                </p>
                <p>
                  We understand the Rwandan market, respond and ensure client satisfaction, allowing our partners to focus on growth while we handle operations efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision & Values */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="w-16 h-16 bg-primary-900 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-primary-900/20">
                <Target size={32} />
              </div>
              <h4 className="text-3xl font-display font-bold text-primary-900 mb-6 italic">Our Mission</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>
            
            <div className="bg-primary-900 p-12 rounded-[2rem] shadow-2xl text-white flex flex-col h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent-500 opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="w-16 h-16 bg-accent-500 text-primary-900 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-accent-500/20 relative z-10">
                <Eye size={32} />
              </div>
              <h4 className="text-3xl font-display font-bold mb-6 italic relative z-10">Our Vision</h4>
              <p className="text-blue-100/70 text-lg leading-relaxed relative z-10">
                {COMPANY_INFO.vision}
              </p>
            </div>
          </div>

          <div className="text-center mb-16 underline-offset-8">
            <h2 className="text-4xl font-display font-bold text-primary-900 mb-4 underline decoration-accent-500">Core Values</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {COMPANY_INFO.values.map((value, i) => {
              const Icon = valueIcons[value] || Star;
              return (
                <div key={value} className="text-center">
                  <div className="w-20 h-20 bg-white shadow-lg rounded-full flex items-center justify-center mx-auto mb-6 text-accent-600 transition-transform hover:scale-110">
                    <Icon size={32} />
                  </div>
                  <h5 className="text-lg font-display font-bold text-primary-900">{value}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-accent-600 uppercase tracking-widest mb-4">The Leadership</h2>
            <h3 className="text-4xl font-display font-bold text-primary-900 italic">Meet Our Experts</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {COMPANY_INFO.team.map((member, i) => (
              <div key={member.name} className="group flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-gray-50 shadow-xl group-hover:border-accent-500 transition-all duration-500">
                  <img 
                    src={i === 0 ? "/Mathias.jpeg" : "/Niyigaba.jpeg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <h4 className="text-2xl font-display font-bold text-primary-900 mb-1">{member.name}</h4>
                <p className="text-accent-600 font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-display font-bold text-primary-900 mb-8 italic">Ready for Professional Solutions?</h3>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-primary-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-primary-800 transition-all shadow-xl shadow-primary-900/20"
          >
            Contact Us Today <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}
