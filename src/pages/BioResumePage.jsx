import React from 'react';

export default function BioResumePage({ setActiveTab, onOpenLightbox }) {
  const repertoire = [
    { composer: "Johann Sebastian Bach", title: "Prelude and Fugue in A Minor, BWV 543" },
    { composer: "Johann Sebastian Bach", title: "Passacaglia and Fugue in C Minor, BWV 582" },
    { composer: "Dieterich Buxtehude", title: "Praeludium in G Minor, BuxWV 149" },
    { composer: "César Franck", title: "Choral No. 3 in A Minor" },
    { composer: "Charles-Marie Widor", title: "Symphony No. 5 in F Minor: V. Toccata" },
    { composer: "Louis Vierne", title: "Carillon de Westminster, Op. 54 No. 6" },
    { composer: "Maurice Duruflé", title: "Suite, Op. 5: III. Toccata" },
    { composer: "Olivier Messiaen", title: "Selections from La Nativité du Seigneur" }
  ];

  return (
    <div className="bio-resume-page">
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="editorial-header">
            <span className="editorial-subtitle">BACKGROUND</span>
            <h1>Biography & Repertoire</h1>
            <div className="thin-rule"></div>
          </div>

          {/* Bio Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3rem', alignItems: 'start', margin: '3rem 0' }}>
            <div className="analog-frame">
              <img src="./photos/DSC_7540.jpeg" alt="Anastasia Hoshaw" style={{ height: '420px' }} />
              <div className="analog-caption">Anastasia Hoshaw</div>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Biography</h2>
              
              <p style={{ marginBottom: '1rem' }}>
                Anastasia Hoshaw is an organist, sacred musician, and keyboard educator. She performs recitals, leads sacred music, and maintains a private teaching studio.
              </p>

              <p style={{ marginBottom: '1rem' }}>
                Her concert programs feature classical organ literature spanning Baroque counterpoint, French Romantic symphonic works, and modern compositions.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                For complete educational background, performance history, and curriculum vitae details, please reach out via the contact form or download the resume summary below.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); alert("Curriculum Vitae download placeholder."); }}
                  className="btn-analog-outline"
                >
                  Download Curriculum Vitae (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* Repertoire List */}
          <div style={{ margin: '4rem 0' }}>
            <h2 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '1.5rem' }}>Selected Repertoire</h2>
            <div className="thin-rule" style={{ marginBottom: '2rem' }}></div>

            <div className="analog-list-item" style={{ padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                {repertoire.map((item, idx) => (
                  <div key={idx} style={{ paddingBottom: '0.6rem', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--text-primary)' }}>{item.title}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)' }}>{item.composer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
