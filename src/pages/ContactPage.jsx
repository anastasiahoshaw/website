import React, { useState } from 'react';

export default function ContactPage() {
  const [useGoogleForm, setUseGoogleForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="editorial-header">
            <span className="editorial-subtitle">GET IN TOUCH</span>
            <h1>Contact & Inquiries</h1>
            <p style={{ marginTop: '0.5rem' }}>Send a message regarding recital bookings, lesson inquiries, or general questions.</p>
            <div className="thin-rule"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3rem', margin: '3rem 0', alignItems: 'start' }}>
            {/* Contact Info */}
            <div className="analog-list-item">
              <h3 style={{ marginBottom: '1rem' }}>Contact Details</h3>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--accent-gold)' }}>Email</strong>
                <span style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>anastasia.hoshaw.organ@gmail.com</span>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--accent-gold)' }}>Inquiry Types</strong>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  <li>Solo Organ Recitals</li>
                  <li>Sacred Service Playing</li>
                  <li>Organ & Piano Lessons</li>
                  <li>Masterclasses & Workshops</li>
                </ul>
              </div>

              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontStyle: 'italic', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                Messages are reviewed regularly and responded to promptly.
              </div>
            </div>

            {/* Form Section */}
            <div className="analog-list-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.8rem' }}>
                <h3 style={{ margin: 0 }}>Inquiry Form</h3>
                <button
                  onClick={() => setUseGoogleForm(!useGoogleForm)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem',
                    color: 'var(--accent-gold)',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  {useGoogleForm ? 'Use Standard Form' : 'Embed Google Form'}
                </button>
              </div>

              {!useGoogleForm ? (
                formSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Thank You!</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                      Your message has been sent successfully.
                    </p>
                    <button className="btn-analog-outline" onClick={() => setFormSubmitted(false)}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="analog-form-group">
                      <label className="analog-label">Your Name *</label>
                      <input 
                        type="text" 
                        required 
                        className="analog-input" 
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="analog-form-group">
                      <label className="analog-label">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        className="analog-input" 
                        placeholder="email@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="analog-form-group">
                      <label className="analog-label">Inquiry Subject</label>
                      <select 
                        className="analog-select"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Recital Booking">Recital Booking</option>
                        <option value="Lesson Inquiry">Lesson Inquiry</option>
                        <option value="Sacred Service">Sacred Music Service</option>
                      </select>
                    </div>

                    <div className="analog-form-group">
                      <label className="analog-label">Message *</label>
                      <textarea 
                        required 
                        className="analog-textarea" 
                        placeholder="Please write your message or inquiry details here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn-analog-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Send Message
                    </button>
                  </form>
                )
              ) : (
                <div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    Google Form Embed Container. Replace iframe URL with your own Google Form viewform link:
                  </p>
                  <div style={{ border: '1px solid var(--border-color)', height: '420px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: '#fff' }}>
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSfD_YOUR_GOOGLE_FORM_ID/viewform?embedded=true" 
                      width="100%" 
                      height="100%" 
                      frameBorder="0" 
                      marginHeight="0" 
                      marginWidth="0"
                      title="Google Form Embed"
                    >
                      Loading Google Form...
                    </iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
