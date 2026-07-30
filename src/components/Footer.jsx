import React from 'react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="analog-footer">
      <div className="container" style={{ textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
          Anastasia Hoshaw
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          Organist • Sacred Musician • Educator
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => { setActiveTab('landing'); window.scrollTo(0, 0); }}
            style={{ background: 'none', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-secondary)', cursor: 'pointer' }}
          >
            Home
          </button>
          <button 
            onClick={() => { setActiveTab('calendar'); window.scrollTo(0, 0); }}
            style={{ background: 'none', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-secondary)', cursor: 'pointer' }}
          >
            Recital Calendar
          </button>
          <button 
            onClick={() => { setActiveTab('lessons'); window.scrollTo(0, 0); }}
            style={{ background: 'none', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-secondary)', cursor: 'pointer' }}
          >
            Lessons
          </button>
          <button 
            onClick={() => { setActiveTab('bio'); window.scrollTo(0, 0); }}
            style={{ background: 'none', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-secondary)', cursor: 'pointer' }}
          >
            Bio & Resume
          </button>
          <button 
            onClick={() => { setActiveTab('contact'); window.scrollTo(0, 0); }}
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
