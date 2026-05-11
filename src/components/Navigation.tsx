import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight, ChevronDown, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_INFO, SERVICES } from '../constants';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'top-0' : 'top-0'}`}>
      {/* Top Bar */}
      <div className={`hidden lg:block bg-primary-900 border-b border-white/5 py-2.5 transition-all duration-500 ${scrolled ? '-translate-y-full opacity-0 h-0 overflow-hidden' : 'translate-y-0 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[13px] font-medium text-blue-100/60">
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY_INFO.phones[0]}`} className="flex items-center gap-2 hover:text-accent-500 transition-colors">
              <Phone size={14} className="text-accent-500" />
              {COMPANY_INFO.phones[0]}
            </a>
            <a href={`mailto:${COMPANY_INFO.emails[0]}`} className="flex items-center gap-2 hover:text-accent-500 transition-colors">
              <Mail size={14} className="text-accent-500" />
              {COMPANY_INFO.emails[0]}
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-accent-500" />
              <span>{COMPANY_INFO.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-white/20">Follow Us</span>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/', label: 'Facebook' },
                { Icon: Twitter, href: 'https://x.com/', label: 'X' },
                { Icon: Instagram, href: 'https://www.instagram.com/betterfutureinvestments?igsh=MTEyN3puYWR5eWw1NA==', label: 'Instagram' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn' }
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} className="hover:text-accent-500 transition-colors" aria-label={label}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-500 rounded-b-2xl mx-auto max-w-7xl relative ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-primary-900/10 py-1 border-x border-b border-gray-100' 
          : 'bg-transparent py-4'
      }`}>
        <div className="px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex flex-col group">
              <span className={`text-xl lg:text-2xl font-display font-black tracking-tighter transition-colors duration-500 ${scrolled ? 'text-primary-900' : 'text-white'}`}>
                BETTER<span className="text-accent-500 group-hover:text-primary-900 transition-colors">FUTURE</span>
              </span>
              <span className={`text-[9px] uppercase tracking-[0.3em] -mt-1 font-bold transition-colors duration-500 ${scrolled ? 'text-accent-600' : 'text-accent-500'}`}>
                Investment Ltd
              </span>
            </Link>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div 
                  key={link.path} 
                  className="relative px-4 py-2 group"
                  onMouseEnter={() => link.hasDropdown && setShowServices(true)}
                  onMouseLeave={() => link.hasDropdown && setShowServices(false)}
                >
                  <Link
                    to={link.path}
                    className={`text-[14px] font-bold transition-all flex items-center gap-1.5 py-1 ${
                      location.pathname === link.path 
                        ? 'text-accent-500' 
                        : (scrolled ? 'text-primary-900 hover:text-accent-600' : 'text-white hover:text-accent-500')
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown size={14} className={`transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Services Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {showServices && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-6 grid grid-cols-2 gap-4"
                        >
                          <div className="col-span-2 pb-2 mb-2 border-b border-gray-50 flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Our Expertise</span>
                            <Link to="/services" className="text-[10px] font-bold uppercase tracking-widest text-accent-600 hover:text-primary-900 transition-colors">See all services</Link>
                          </div>
                          {SERVICES.map((service) => (
                            <Link
                              key={service.id}
                              to={`/services/${service.id}`}
                              className="group/item flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
                            >
                              <div className="w-10 h-10 bg-primary-900/5 rounded-xl flex items-center justify-center text-primary-900 group-hover/item:bg-accent-500 group-hover/item:text-white transition-all">
                                <ChevronRight size={18} />
                              </div>
                              <div>
                                <h5 className="text-[14px] font-bold text-primary-900 leading-tight mb-0.5">{service.title}</h5>
                                <p className="text-[11px] text-gray-500 line-clamp-1">{service.description}</p>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                  
                  {/* Subtle Indicator */}
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-accent-500 rounded-full"
                    />
                  )}
                </div>
              ))}
              
              <Link
                to="/contact"
                className="ml-4 bg-accent-500 hover:bg-primary-900 text-primary-900 hover:text-white px-7 py-3 rounded-2xl text-[14px] font-black uppercase tracking-tight transition-all shadow-xl shadow-accent-500/10 hover:shadow-primary-900/20 active:scale-95"
              >
                Get a quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
               <a href={`tel:${COMPANY_INFO.phones[0]}`} className={`p-2.5 rounded-xl transition-colors ${scrolled ? 'bg-gray-100 text-primary-900' : 'bg-white/10 text-white'}`}>
                 <Phone size={18} />
               </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-xl transition-colors ${
                  scrolled ? 'bg-primary-900 text-white shadow-lg' : 'bg-white text-primary-900'
                }`}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="lg:hidden absolute top-full left-0 right-0 mt-3 mx-4 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-8 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => !link.hasDropdown && setIsOpen(false)}
                      className={`group flex items-center justify-between px-5 py-4 rounded-2xl transition-all ${
                        location.pathname === link.path ? 'bg-primary-900 text-white' : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span className="text-lg font-display font-bold">{link.name}</span>
                      <ChevronRight size={18} className={location.pathname === link.path ? 'text-accent-500' : 'text-gray-300'} />
                    </Link>
                    
                    {link.hasDropdown && (
                      <div className="pl-6 mt-2 mb-4 grid grid-cols-1 gap-2">
                        {SERVICES.slice(0, 4).map(s => (
                           <Link 
                            key={s.id} 
                            to={`/services/${s.id}`} 
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-sm font-medium text-gray-500"
                           >
                             <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                             {s.title}
                           </Link>
                        ))}
                        <Link to="/services" onClick={() => setIsOpen(false)} className="px-4 py-2 text-xs font-bold text-accent-600 uppercase tracking-widest pl-8">View all +</Link>
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-6 border-t border-gray-50">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-3 w-full bg-accent-500 text-primary-900 px-6 py-5 rounded-2xl font-black uppercase tracking-tight shadow-xl shadow-accent-500/20"
                  >
                    Request a Free Quote <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-2xl font-display font-bold tracking-tight text-white">
                BETTER FUTURE
              </span>
              <span className="text-[11px] uppercase tracking-widest text-accent-500 font-medium">
                Investment Ltd
              </span>
            </Link>
            <p className="text-blue-100/70 text-sm leading-relaxed">
              Leading integrated business and operational solutions across Rwanda. We deliver excellence in training, consultancy, Supply of Goods, support, hospitality, cleaning, and security.
            </p>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Follow Us</p>
              <div className="flex items-center gap-4">
                {[
                  { Icon: Facebook, href: 'https://web.facebook.com/profile.php?id=61589819660875/', label: 'Facebook' },
                  { Icon: Twitter, href: 'https://x.com/Betterfutur2025/', label: 'X' },
                  { Icon: Instagram, href: 'https://www.instagram.com/betterfutureinvestments?igsh=MTEyN3puYWR5eWw1NA==', label: 'Instagram' },
                  { Icon: Linkedin, href: ' https://www.linkedin.com/in/better-future-investment-limited-788805409/', label: 'LinkedIn' }
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-blue-100/70 hover:text-accent-500 hover:border-accent-500 transition-all"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li><Link to="/" className="hover:text-accent-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent-500 transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-accent-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li><Link to="/services/training" className="hover:text-accent-500 transition-colors">Training</Link></li>
              <li><Link to="/services/consultancy" className="hover:text-accent-500 transition-colors">Consultancy</Link></li>
              <li><Link to="/services/support" className="hover:text-accent-500 transition-colors">Support</Link></li>
              <li><Link to="/services/hospitality" className="hover:text-accent-500 transition-colors">Hospitality</Link></li>
              <li><Link to="/services/cleaning" className="hover:text-accent-500 transition-colors">Cleaning</Link></li>
              <li><Link to="/services/security" className="hover:text-accent-500 transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent-500 shrink-0" />
                <div>
                  {COMPANY_INFO.phones.map(p => (
                    <a key={p} href={`tel:${p}`} className="block hover:text-white transition-colors">{p}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent-500 shrink-0" />
                <div>
                  {COMPANY_INFO.emails.map(e => (
                    <a key={e} href={`mailto:${e}`} className="block hover:text-white transition-colors">{e}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="text-accent-500 shrink-0">📍</div>
                <span>{COMPANY_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/40">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
