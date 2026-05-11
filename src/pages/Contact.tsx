import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export function Contact() {
  return (
    <div className="pt-20">
      <section className="bg-primary-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Contact Us</h1>
          <p className="text-blue-100/70 max-w-2xl mx-auto text-lg italic">
            "Professional Solutions delivered with Excellence in Rwanda"
          </p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-display font-bold text-primary-900 mb-6">Let's Connect</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are ready to help you anywhere in Rwanda. Our team is available to discuss your needs and provide tailored solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center text-primary-900 mb-6">
                    <Phone size={24} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-primary-900 mb-4">Phone</h4>
                  <div className="space-y-2">
                    {COMPANY_INFO.phones.map(p => (
                      <a key={p} href={`tel:${p}`} className="block text-gray-600 hover:text-accent-600 font-medium">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center text-primary-900 mb-6">
                    <Mail size={24} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-primary-900 mb-4">Email</h4>
                  <div className="space-y-2">
                    {COMPANY_INFO.emails.map(e => (
                      <a key={e} href={`mailto:${e}`} className="block text-gray-600 hover:text-accent-600 font-medium break-all">
                        {e}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:shadow-lg transition-all sm:col-span-2">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center text-primary-900 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-primary-900 mb-2">Office Location</h4>
                      <p className="text-gray-600 font-medium italic">
                        {COMPANY_INFO.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Form */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary-900/10 border border-gray-50">
              <h3 className="text-3xl font-display font-bold text-primary-900 mb-8 italic">Request a Quote</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Service Type</label>
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all appearance-none cursor-pointer">
                    <option>Cleaning Services</option>
                    <option>Security Services</option>
                    <option>Consultancy Services</option>
                    <option>Training Services</option>
                    <option>Support Services</option>
                    <option>Hospitality Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements..." 
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all resize-none"
                  />
                </div>

                <button className="w-full bg-primary-900 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-primary-800 transition-all shadow-xl shadow-primary-900/20">
                  Send Inquiry <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-100 overflow-hidden grayscale contrast-125 brightness-90 relative">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.113063548986!2d30.108422453533816!3d-1.9540866985472855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca682337a5f67%3A0xe7c44e94cc7d4778!2sRemera%2C%20Kigali!5e0!3m2!1sen!2srw!4v1700000000000!5m2!1sen!2srw"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
         />
         <div className="absolute top-8 left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 max-w-sm pointer-events-none">
            <h5 className="font-display font-bold text-primary-900 text-xl mb-2">Our Office</h5>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              {COMPANY_INFO.location}
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase rounded-full border border-green-100">Open Now</span>
              <span className="px-3 py-1 bg-accent-50 text-accent-700 text-[10px] font-bold uppercase rounded-full border border-accent-100">Ready to Help</span>
            </div>
         </div>
      </section>
    </div>
  );
}
