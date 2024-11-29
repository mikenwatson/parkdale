import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Testimonials from './pages/Testimonials';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import WeddingEnquiry from './pages/WeddingEnquiry';
import PromNight from './pages/PromNight';
import WhatsAppCTA from './components/WhatsAppCTA';
import LiveChat from './components/LiveChat';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WhatsAppCTA />
      <LiveChat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/wedding-enquiry" element={<WeddingEnquiry />} />
        <Route path="/prom-night" element={<PromNight />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;