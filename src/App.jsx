import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PhotoLightbox from './components/PhotoLightbox';
import GoogleFormModal from './components/GoogleFormModal';

import LandingPage from './pages/LandingPage';
import CalendarPage from './pages/CalendarPage';
import LessonsPage from './pages/LessonsPage';
import BioResumePage from './pages/BioResumePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing');
  const [theme, setTheme] = useState('light'); // Default to warm analog parchment theme

  // Lightbox Modal State
  const [lightboxPhotos, setLightboxPhotos] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Form Modal State
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [formModalType, setFormModalType] = useState('general');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenLightbox = (photos, index) => {
    setLightboxPhotos(photos);
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevPhoto = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : lightboxPhotos.length - 1));
  };

  const handleNextPhoto = () => {
    setLightboxIndex((prev) => (prev < lightboxPhotos.length - 1 ? prev + 1 : 0));
  };

  const handleOpenFormModal = (type = 'general') => {
    setFormModalType(type);
    setFormModalOpen(true);
  };

  return (
    <div className="app-root">
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      <main style={{ minHeight: '75vh' }}>
        {activeTab === 'landing' && (
          <LandingPage 
            setActiveTab={setActiveTab} 
            onOpenLightbox={handleOpenLightbox} 
            onOpenFormModal={handleOpenFormModal} 
          />
        )}

        {activeTab === 'calendar' && (
          <CalendarPage 
            setActiveTab={setActiveTab} 
            onOpenFormModal={handleOpenFormModal} 
          />
        )}

        {activeTab === 'lessons' && (
          <LessonsPage 
            setActiveTab={setActiveTab} 
            onOpenFormModal={handleOpenFormModal} 
          />
        )}

        {activeTab === 'bio' && (
          <BioResumePage 
            setActiveTab={setActiveTab} 
            onOpenLightbox={handleOpenLightbox} 
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      <Footer setActiveTab={setActiveTab} />

      {/* Lightbox Modal */}
      <PhotoLightbox 
        photos={lightboxPhotos}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />

      {/* Google Form / Direct Inquiry Modal */}
      <GoogleFormModal 
        isOpen={formModalOpen}
        onClose={() => setFormModalOpen(false)}
        defaultType={formModalType}
      />
    </div>
  );
}
