import { motion } from 'motion/react';
import { ArrowRight, Star, CheckCircle2, Shield, Users, Lightbulb, Trophy, Smile, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, COMPANY_INFO } from '../constants';

export function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Kigali Business District" 
            className="w-full h-full object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-primary-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-accent-500 text-primary-900 rounded-full">
              Established 2025 • Rwanda
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
              Professional <span className="text-accent-500 underline decoration-accent-500/30">Solutions</span> for a Better Future
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light mb-10 leading-relaxed max-w-2xl">
              Delivering excellence across Cleaning, Security, Consultancy, and Training services tailored to Rwanda's market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="bg-accent-500 hover:bg-accent-600 text-primary-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-accent-500/20"
              >
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
              >
                Contact Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Quick Summary */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Excellence In', value: 'Rwanda' },
              { label: 'Core Services', value: '6+' },
              { label: 'Client Focus', value: '100%' },
              { label: 'Established', value: '2025' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-primary-900/60 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-3xl font-display font-bold text-primary-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-accent-600 uppercase tracking-widest mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-6">Innovative Services for Business & Individuals</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We provide integrated business and operational solutions tailored to organizations, NGOs, and individuals across Rwanda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500/5 rounded-bl-[100px] transition-all group-hover:bg-accent-500/10" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary-900/5 rounded-2xl flex items-center justify-center text-primary-900 mb-6 group-hover:bg-accent-500 group-hover:text-white transition-all">
                    {/* Placeholder for Dynamic Icon */}
                    <Star size={28} />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-primary-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-primary-900 font-bold group-hover:text-accent-600 transition-colors"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-500/5 -skew-x-12 transform translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold text-accent-500 uppercase tracking-widest mb-4">Our Competitive Edge</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 italic">"Let us handle your operations while you focus on growth."</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Shield, title: 'Trusted Team', text: 'Reliable and professional staff.' },
                  { icon: Users, title: 'Expert Handling', text: 'Specialized in the Rwandan market.' },
                  { icon: CheckCircle2, title: 'Excellence', text: 'Committed to high-quality delivery.' },
                  { icon: Smile, title: 'Customer First', text: 'Tailored solutions for every client.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <item.icon className="text-accent-500 shrink-0" size={28} />
                    <div>
                      <h4 className="text-xl font-display font-bold mb-1">{item.title}</h4>
                      <p className="text-blue-100/60 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="bg-accent-500 hover:bg-accent-600 text-primary-900 px-8 py-4 rounded-xl font-bold transition-all text-center">
                  Get a Free Quote
                </Link>
                <div className="flex items-center gap-4 text-blue-100">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-100/40 font-bold uppercase tracking-widest">Call Today</p>
                    <p className="font-bold">{COMPANY_INFO.phones[0]}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-white/5 rounded-3xl backdrop-blur-3xl p-8 border border-white/10 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880210190-aa2043c2abbc?auto=format&fit=crop&q=80&w=1200" 
                  alt="Business Growth" 
                  className="rounded-2xl w-full h-full object-cover shadow-2xl grayscale"
                />
                <div className="absolute bottom-12 -left-8 bg-accent-500 text-primary-900 p-6 rounded-2xl shadow-xl max-w-[200px]">
                  <p className="text-3xl font-display font-bold mb-1">2025</p>
                  <p className="text-xs font-bold leading-tight">Establishing a Better Future in Rwanda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Summary */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[40px] p-8 md:p-20 border border-gray-100 overflow-hidden relative">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
               <div>
                  <div className="w-12 h-1 mx-0 mb-6 bg-accent-500" />
                  <h4 className="text-3xl font-display font-bold text-primary-900 mb-6 italic">Our Mission</h4>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {COMPANY_INFO.mission}
                  </p>
               </div>
               <div>
                  <div className="w-12 h-1 mx-0 mb-6 bg-accent-500" />
                  <h4 className="text-3xl font-display font-bold text-primary-900 mb-6 italic">Our Vision</h4>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {COMPANY_INFO.vision}
                  </p>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
