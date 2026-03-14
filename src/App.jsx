import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy/CaseStudy';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
      </Routes>
    </>
  );
}
