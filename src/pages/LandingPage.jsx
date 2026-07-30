import React from 'react';

export default function LandingPage({ setActiveTab, onOpenLightbox }) {
  const photoGallery = [
    {
      src: "./photos/DSC_7483.jpeg",
      caption: "Anastasia Hoshaw at the Organ Pipe Chamber",
      location: "Sanctuary Organ"
    },
    {
      src: "./photos/DSC_7503.jpeg",
      caption: "Organ Console Performance",
      location: "Concert Recital"
    },
    {
      src: "./photos/DSC_7521.jpeg",
      caption: "Anastasia Hoshaw at the Manuals",
      location: "Organ Studio"
    },
    {
      src: "./photos/DSC_7528.jpeg",
      caption: "Recital Rehearsal",
      location: "Organ Console"
    },
    {
      src: "./photos/DSC_7554.jpeg",
      caption: "Pedalboard Registration",
      location: "Organ Console"
    },
    {
      src: "./photos/IMG_2779.jpeg",
      caption: "Cathedral Organ Façade & Console",
      location: "Cathedral Sanctuary"
    }
  ];

  return (
    <div className="landing-page">
      {/* Editorial Hero Section */}
      <section className="editorial-hero">
        <div className="container hero-layout">
          <div>
            <span className="editorial-subtitle">ORGANIST • SACRED MUSICIAN • EDUCATOR</span>
            <h1 style={{ margin: '0.8rem 0 1.2rem 0', fontWeight: 400 }}>Anastasia Hoshaw</h1>
            
            <p style={{ marginBottom: '1.8rem', fontSize: '1.12rem', lineHeight: '1.8' }}>
              Welcome to the official website of Anastasia Hoshaw, concert organist and sacred musician. Discover upcoming recital engagements, explore private organ and piano instruction, view repertoire history, or request concert booking details.
            </p>

            <div style={{ display: 'flex', gap: '1.1rem', flexWrap: 'wrap', marginTop: '2.2rem' }}>
              <button className="btn-analog-primary" onClick={() => setActiveTab('calendar')}>
                View Recital Calendar &rarr;
              </button>
              <button className="btn-analog-outline" onClick={() => setActiveTab('lessons')}>
                Lesson Studio
              </button>
              <button className="btn-analog-outline" onClick={() => setActiveTab('contact')}>
                Contact & Booking
              </button>
            </div>
          </div>

          <div>
            <div className="analog-frame" onClick={() => onOpenLightbox(photoGallery, 0)} style={{ cursor: 'pointer' }}>
              <img src="./photos/DSC_7483.jpeg" alt="Anastasia Hoshaw Organist" />
              <div className="analog-caption">Anastasia Hoshaw</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Overview Section */}
      <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="editorial-subtitle">ABOUT THE ARTIST</span>
          <h2 style={{ margin: '0.5rem 0 1rem 0' }}>Organ & Sacred Music Performance</h2>
          <div className="thin-rule" style={{ marginBottom: '2rem' }}></div>

          <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', textAlign: 'left' }}>
            Anastasia Hoshaw is active as a recitalist, sacred musician, and keyboard teacher. Her programming explores classical organ repertoire spanning Baroque, Romantic, and contemporary literature, alongside sacred service playing and choral accompaniment.
          </p>

          <p style={{ marginBottom: '2rem', fontSize: '1.05rem', textAlign: 'left' }}>
            Whether presenting solo recitals, leading sacred services, or teaching students at the organ console, her work emphasizes musical expression, clarity, and liturgical tradition.
          </p>

          <button className="btn-analog-outline" onClick={() => setActiveTab('bio')}>
            Read Bio & Repertoire List
          </button>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding">
        <div className="container">
          <div className="editorial-header">
            <span className="editorial-subtitle">PHOTOGRAPHS</span>
            <h2>Console & Performance Gallery</h2>
            <div className="thin-rule"></div>
          </div>

          <div className="analog-gallery">
            {photoGallery.map((item, idx) => (
              <div key={idx} className="analog-gallery-card" onClick={() => onOpenLightbox(photoGallery, idx)}>
                <img src={item.src} alt={item.caption} />
                <div style={{ padding: '0.6rem 0.2rem 0.2rem 0.2rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--text-primary)' }}>{item.caption}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="section-padding" style={{ background: 'var(--bg-surface-elevated)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ marginBottom: '0.8rem' }}>Recitals & Lesson Studio</h2>
          <p style={{ marginBottom: '1.8rem' }}>
            Available for solo organ recitals, sacred service playing, and private organ & piano instruction.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-analog-primary" onClick={() => setActiveTab('contact')}>
              Send Inquiry
            </button>
            <button className="btn-analog-outline" onClick={() => setActiveTab('lessons')}>
              Lesson Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
