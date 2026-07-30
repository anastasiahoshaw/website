import React from 'react';

export default function LessonsPage({ setActiveTab, onOpenFormModal }) {
  return (
    <div className="lessons-page">
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="editorial-header">
            <h1>Organ & Piano Lessons</h1>
            <p style={{ marginTop: '0.5rem' }}>Private instruction for students of varying backgrounds and experience levels.</p>
            <div className="thin-rule"></div>
          </div>

          {/* Intro & Photo */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', margin: '3rem 0' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Teaching Overview</h2>
              <p style={{ marginBottom: '1rem' }}>
                Lessons are tailored to each student's musical goals, combining foundational technical discipline with expressive interpretation.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Whether learning the organ for the first time, refining organ pedal technique and registration, or studying piano literature, instruction focuses on musical clarity, score reading, and posture.
              </p>
              <button className="btn-analog-primary" onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                Request Lesson Information
              </button>
            </div>

            <div className="analog-frame">
              <img src="./photos/DSC_7521.jpeg" alt="Anastasia Hoshaw at the Organ Console" style={{ height: '360px' }} />
            </div>
          </div>

          {/* Studio Offerings */}
          <div style={{ margin: '4rem 0' }}>
            <h2 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '2rem' }}>Instruction Areas</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.8rem' }}>
              <div className="analog-list-item">
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.6rem' }}>Organ Instruction</h3>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Organ pedal technique and manual independence</li>
                  <li style={{ marginBottom: '0.5rem' }}>Registration design and stop combinations</li>
                  <li style={{ marginBottom: '0.5rem' }}>Hymn playing and sacred service leadership</li>
                  <li>Repertoire from Baroque to Modern masters</li>
                </ul>
              </div>

              <div className="analog-list-item">
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.6rem' }}>Piano Pedagogy</h3>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Keyboard posture and relaxed technique</li>
                  <li style={{ marginBottom: '0.5rem' }}>Sight-reading and music theory fundamentals</li>
                  <li style={{ marginBottom: '0.5rem' }}>Classical piano repertoire study</li>
                  <li>Recital and audition preparation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Studio Details */}
          <div className="analog-list-item" style={{ textAlign: 'center', padding: '2.5rem' }}>
            <h3 style={{ marginBottom: '0.6rem' }}>Studio Locations & Format</h3>
            <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
              Lessons are available in-person on pipe organ and piano, as well as remotely for organists and pianists seeking online instruction.
            </p>
            <button className="btn-analog-primary" onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              Inquire About Studio Availability
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
