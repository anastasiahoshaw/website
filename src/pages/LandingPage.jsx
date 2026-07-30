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
            <p className="hero-single-paragraph">
              Official website of Anastasia Hoshaw. As a concert organist and sacred musician, Anastasia presents solo recitals, directs liturgical music, and offers private organ and piano instruction. Here you can find upcoming recital dates, explore private studio lessons, view her selected repertoire, and submit booking inquiries.
            </p>
          </div>

          <div>
            <div className="hero-analog-frame" onClick={() => onOpenLightbox(photoGallery, 0)} style={{ cursor: 'pointer' }}>
              <img src="./photos/DSC_7483.jpeg" alt="Anastasia Hoshaw Organist" />
              <div className="analog-caption">Anastasia Hoshaw</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Overview Section */}
      <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <h2 style={{ margin: '0.6rem 0 1.2rem 0' }}>Organ & Sacred Music Performance</h2>
          <div className="thin-rule" style={{ marginBottom: '2.4rem' }}></div>

          <p style={{ marginBottom: '1.6rem', fontSize: '1.08rem', textAlign: 'left', lineHeight: '1.85' }}>
            Anastasia Hoshaw is active as a recitalist, sacred musician, and keyboard educator. Her programming explores classical organ literature spanning Baroque counterpoint, French Romantic symphonic works, and modern masterworks, alongside sacred service leadership and choral accompaniment.
          </p>

          <p style={{ marginBottom: '2.5rem', fontSize: '1.08rem', textAlign: 'left', lineHeight: '1.85' }}>
            Whether presenting solo recitals, leading sacred services, or teaching students at the console, her artistic vision combines technical precision, expressive depth, and liturgical tradition.
          </p>

          <button className="btn-analog-outline" onClick={() => setActiveTab('bio')}>
            Biography & Full Repertoire <span className="btn-arrow">&rarr;</span>
          </button>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding">
        <div className="container">
          <div className="editorial-header">
            <h2>Console & Performance Gallery</h2>
            <div className="thin-rule"></div>
          </div>

          <div className="analog-gallery">
            {photoGallery.map((item, idx) => (
              <div key={idx} className="analog-gallery-card" onClick={() => onOpenLightbox(photoGallery, idx)}>
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

      {/* Simple CTA */}
      <section className="section-padding" style={{ background: 'var(--bg-surface-elevated)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '660px' }}>
          <h2 style={{ marginBottom: '0.9rem' }}>Recitals & Lesson Studio</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.08rem' }}>
            Available for solo organ recitals, sacred service playing, and private organ & piano instruction.
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-analog-primary" onClick={() => setActiveTab('contact')}>
              Send Inquiry <span className="btn-arrow">&rarr;</span>
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
