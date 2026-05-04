import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight, ChevronLeft, Sparkles, ShieldCheck, Briefcase, GraduationCap, Users, Hotel, Star } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Sparkles, ShieldCheck, Briefcase, GraduationCap, Users, Hotel
};

export function Services() {
  return (
    <div className="pt-20">
      <section className="bg-primary-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Our Services</h1>
          <p className="text-blue-100/70 max-w-2xl mx-auto text-lg font-light italic">
            Comprehensive business and operational solutions delivered with excellence across Rwanda.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
               const Icon = ICON_MAP[service.icon] || Star;
               return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group block relative p-12 bg-gray-50 hover:bg-white rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 group-hover:bg-accent-500/10 rounded-bl-full transition-colors" />
                  <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center text-primary-900 mb-8 group-hover:bg-primary-900 group-hover:text-white transition-all transform group-hover:rotate-6">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-primary-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-8 line-clamp-3">
                    {service.description}
                  </p>
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 font-bold text-accent-600 group-hover:text-primary-900 transition-colors"
                  >
                    View Details <ArrowRight size={20} />
                  </Link>
                </motion.div>
               )
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
               <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 italic">Need a Custom Solution?</h3>
                  <p className="text-blue-100/60 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                    Our team specializes in creating tailored operational frameworks for NGOs, businesses, and individuals in the Rwandan market.
                  </p>
                  <Link 
                    to="/contact" 
                    className="bg-accent-500 hover:bg-accent-600 text-primary-900 px-12 py-5 rounded-2xl font-bold transition-all inline-block shadow-2xl shadow-accent-500/30"
                  >
                    Get a Quote Today
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

export function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <div>Service not found</div>;

  const Icon = ICON_MAP[service.icon] || Star;

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary-900 font-bold mb-8 hover:text-accent-600 transition-colors">
          <ChevronLeft size={20} /> Back to Services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="w-16 h-16 bg-accent-500 text-primary-900 rounded-2xl flex items-center justify-center mb-8">
              <Icon size={32} />
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-900 mb-6 italic">{service.title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {service.description}
            </p>
            <Link 
              to="/contact" 
              className="bg-primary-900 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 w-fit hover:bg-primary-800 transition-all shadow-xl shadow-primary-900/20"
            >
              Enquire for this Service <ArrowRight size={20} />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover border-8 border-gray-50"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={24} />
                 </div>
                 <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Status</p>
                    <p className="text-lg font-bold text-primary-900">100% Reliable</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-12 rounded-[2.5rem] border border-gray-100">
            <h3 className="text-2xl font-display font-bold text-primary-900 mb-8 italic flex items-center gap-3">
              <div className="w-8 h-1 bg-accent-500" />
              What We Offer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.details.map((item) => (
                <div key={item} className="flex gap-3 items-center text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-accent-500" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary-900 text-white p-12 rounded-[2.5rem]">
            <h3 className="text-2xl font-display font-bold mb-8 italic flex items-center gap-3">
              <div className="w-8 h-1 bg-accent-500" />
              Why Choose Us
            </h3>
            <div className="space-y-6">
              {service.whyUs.map((item) => (
                <div key={item} className="flex gap-4">
                  <CheckCircle2 className="text-accent-500 shrink-0" size={24} />
                  <span className="text-blue-100 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
