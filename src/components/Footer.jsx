import React from 'react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="analog-footer">
      <div className="container" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '0.3rem' }}>
          Anastasia Hoshaw
        </h3>
        <p style={{ color: 'var(--accent-gold)', fontSize: '0.95rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
          Organist & Educator
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => { setActiveTab('landing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ background: 'none', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-secondary)', cursor: 'pointer' }}
          >
            Home
          </button>
          <button 
            onClick={() => { setActiveTab('bio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ background: 'none', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-secondary)', cursor: 'pointer' }}
          >
            Biography
          </button>
          <button 
            onClick={() => { setActiveTab('calendar'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ background: 'none', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-secondary)', cursor: 'pointer' }}
          >
            Calendar
          </button>
          <button 
            onClick={() => { setActiveTab('lessons'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ background: 'none', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-secondary)', cursor: 'pointer' }}
          >
            Lessons
          </button>
          <button 
            onClick={() => { setActiveTab('recordings'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ background: 'none', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-secondary)', cursor: 'pointer' }}
          >
            Recordings & Repertoire
          </button>
          <button 
            onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ background: 'none', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-secondary)', cursor: 'pointer' }}
          >
            Contact
          </button>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Anastasia Hoshaw. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
