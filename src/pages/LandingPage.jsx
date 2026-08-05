import React from 'react';

export default function LandingPage({ setActiveTab, onOpenLightbox }) {
  const photoGallery = [
    {
      src: "./photos/Outside the Basilica of the Sacred Heart.jpeg",
      caption: "Outside the Basilica of the Sacred Heart"
    },
    {
      src: "./photos/Senior Recital, Champaign, IL.jpg",
      caption: "Senior Recital, Champaign, IL"
    },
    {
      src: "./photos/Planting pipes in Milwaukee, WI.jpg",
      caption: "Planting pipes in Milwaukee, WI"
    },
    {
      src: "./photos/School of Music Commencement at the University of Illinois.jpeg",
      caption: "School of Music Commencement at the University of Illinois"
    },
    {
      src: "./photos/With the organ at University Lutheran, Champaign.jpg",
      caption: "With the organ at University Lutheran, Champaign"
    },
    {
      src: "./photos/Working with the choir at University Lutheran, Champaign.jpg",
      caption: "Working with the choir at University Lutheran, Champaign"
    },
    {
      src: "./photos/With the Southern Illinois chapter of the AGO and recitalist Chelsea Chen.jpg",
      caption: "With the Southern Illinois chapter of the AGO and recitalist Chelsea Chen"
    },
    {
      src: "./photos/Bologna, Italy.jpeg",
      caption: "Bologna, Italy"
    },
    {
      src: "./photos/Rome, Italy.jpg",
      caption: "Rome, Italy"
    }
  ];

  return (
    <div className="landing-page">
      {/* Editorial Hero Section */}
      <section className="editorial-hero">
        <div className="container hero-layout">
          <div>
            <p className="hero-single-paragraph">
              Organist Anastasia Hoshaw is a graduate student presenting recitals, offering private beginner organ lessons, and working as a sacred musician in the Michiana area.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <button className="btn-analog-primary" onClick={() => { setActiveTab('bio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                Full Biography <span className="btn-arrow">&rarr;</span>
              </button>
            </div>
          </div>

          <div>
            <div className="hero-analog-frame" onClick={() => { setActiveTab('bio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ cursor: 'pointer' }}>
              <img src="./photos/TITLE PAGE PHOTO.jpeg" alt="Anastasia Hoshaw" />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding">
        <div className="container">
          <div className="editorial-header">
            <h2>Gallery</h2>
            <div className="thin-rule"></div>
          </div>

          <div className="analog-gallery">
            {photoGallery.map((item, idx) => (
              <div key={idx} className="analog-gallery-card">
                <img src={item.src} alt={item.caption} />
                <div style={{ padding: '0.75rem 0.3rem 0.3rem 0.3rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 500 }}>{item.caption}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{item.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesson Studio CTA */}
      <section className="section-padding" style={{ background: 'var(--bg-surface-elevated)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '660px' }}>
          <h2 style={{ marginBottom: '0.9rem' }}>Lesson Studio</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Anastasia is passionate about forming the next generation of musicians.
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-analog-primary" onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              Send Inquiry <span className="btn-arrow">&rarr;</span>
            </button>
            <button className="btn-analog-outline" onClick={() => { setActiveTab('lessons'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              Teaching Philosophy
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
