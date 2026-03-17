import { Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';

class ErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ color: '#ff4444', padding: '2rem', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
          <h2>Render Error</h2>
          <p>{this.state.error.message}</p>
          <pre style={{ fontSize: '0.75rem', color: '#ff8888' }}>{this.state.error.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

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
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ErrorBoundary><CaseStudy /></ErrorBoundary>} />
      </Routes>
    </ThemeProvider>
  );
}
