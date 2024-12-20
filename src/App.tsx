import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SEO } from './components/SEO';
import { SEOKeywords } from './components/SEOKeywords';
import { SocialShare } from './components/SocialShare';
import QRCodeGenerator from './components/QRCodeGenerator';
import QRCodeReader from './pages/QRCodeReader';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500">
          <SEO />
          <SEOKeywords />
          <Header />
          <main className="flex-1 container mx-auto px-4 pt-24 pb-16 md:pt-28 md:pb-20">
            <Routes>
              <Route path="/" element={<QRCodeGenerator />} />
              <Route path="/qr-code-reader" element={<QRCodeReader />} />
            </Routes>
          </main>
          <Footer />
          <SocialShare />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;