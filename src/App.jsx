import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Why from './components/Why';
import How from './components/How';
import Values from './components/Values';
import Waitlist from './components/Waitlist';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const CONTACT = { whatsapp: '', email: '' };

export default function App() {
  const [whatsappHref, setWhatsappHref] = useState('#contact');
  const [emailHref, setEmailHref] = useState('#contact');

  useEffect(() => {
    if (CONTACT.whatsapp) {
      setWhatsappHref(`https://wa.me/${CONTACT.whatsapp}`);
    }
    if (CONTACT.email) {
      setEmailHref(`mailto:${CONTACT.email}`);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-ink antialiased">
      <Header onWaitlist={() => {}} />
      <Hero />
      <Why />
      <How />
      <Values />
      <Waitlist />
      <Contact whatsappHref={whatsappHref} emailHref={emailHref} />
      <Footer />
    </div>
  );
}
