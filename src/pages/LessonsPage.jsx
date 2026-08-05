import React from 'react';

export default function LessonsPage({ setActiveTab, onOpenFormModal }) {
  return (
    <div className="lessons-page">
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '880px' }}>
          <div className="editorial-header">
            <h1>Private Organ & Piano Lessons</h1>
            <div className="thin-rule"></div>
          </div>

          {/* Teaching Philosophy & Image */}
          <div className="lessons-intro-grid" style={{ margin: '3rem 0' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>Teaching Philosophy</h2>
              <p style={{ fontSize: '1.08rem', lineHeight: '1.85', color: 'var(--text-secondary)' }}>
                My goal in teaching beginning keyboard students is to form a new musician. This involves helping the student develop an internal pulse and ear, teaching music literacy, building technical skills, and sharing the historical and cultural context of the music. It is also important to help the student build a disciplined practice routine and, crucially, a sense of confidence and satisfaction in his or her music-making. Eventually the student can take this foundation to new teachers and musical experiences and grow into a fully competent, motivated, self-teaching musician.
              </p>
            </div>

            <div className="analog-frame">
              <img 
                src="./photos/LESSON PAGE PHOTO.jpeg" 
                alt="Anastasia Hoshaw Lesson Studio" 
                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }} 
              />
            </div>
          </div>

          {/* Areas of Instruction (Column layout) */}
          <div style={{ margin: '4rem 0' }}>
            <h2 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '2rem' }}>Areas of Instruction</h2>

            <div className="instruction-grid">
              {/* Column 1: Beginning Organ */}
              <div className="analog-list-item" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-gold)', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                  Beginning Organ
                </h3>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.8' }}>
                  <li style={{ marginBottom: '0.6rem' }}>Geared toward adolescents or adults who can read music and have an interest in the organ</li>
                  <li style={{ marginBottom: '0.6rem' }}>Develop pedal technique</li>
                  <li style={{ marginBottom: '0.6rem' }}>Build service playing skills</li>
                  <li>Explore a range of repertoire</li>
                </ul>
              </div>

              {/* Column 2: Music Literacy */}
              <div className="analog-list-item" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-gold)', marginBottom: '1rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                  Music Literacy
                </h3>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.8' }}>
                  <li style={{ marginBottom: '0.6rem' }}>Geared toward first-time music students of any age</li>
                  <li style={{ marginBottom: '0.6rem' }}>Learn to read music with fluency</li>
                  <li style={{ marginBottom: '0.6rem' }}>Connect the notes on the page to the keys of a piano keyboard</li>
                  <li>Understand basic music theory concepts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Studio Availability Notice */}
          <div className="analog-list-item" style={{ textAlign: 'center', padding: '2.5rem', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-color)' }}>
            <p style={{ maxWidth: '680px', margin: '0 auto 1.5rem auto', fontSize: '1.05rem', lineHeight: '1.8', fontWeight: 500 }}>
              Due to my studies, my studio is currently full. My availability and location will be updated following my graduation from the University of Notre Dame in May 2027.
            </p>
            <button className="btn-analog-primary" onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              Contact for Future Availability <span className="btn-arrow">&rarr;</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
