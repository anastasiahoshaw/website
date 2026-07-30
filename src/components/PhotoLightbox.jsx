import React from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function PhotoLightbox({ photos, currentIndex, onClose, onPrev, onNext }) {
  if (currentIndex === null || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div className="lightbox-modal" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close Lightbox">
          <X size={32} />
        </button>

        <img 
          src={currentPhoto.src} 
          alt={currentPhoto.caption || 'Anastasia Hoshaw Photo'} 
          className="lightbox-image"
        />

        <div className="lightbox-info">
          <h3 className="lightbox-title">{currentPhoto.caption || 'Anastasia Hoshaw'}</h3>
          {currentPhoto.location && (
            <p style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', marginTop: '0.3rem' }}>
              {currentPhoto.location}
            </p>
          )}
          {currentPhoto.details && (
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.4rem', maxWidth: '600px' }}>
              {currentPhoto.details}
            </p>
          )}
        </div>

        {photos.length > 1 && (
          <>
            <button
              onClick={onPrev}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '45%',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              aria-label="Previous Photo"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={onNext}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '45%',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              aria-label="Next Photo"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
