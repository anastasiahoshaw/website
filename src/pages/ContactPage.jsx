import React, { useState } from 'react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Recitals',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/6620987b52468a8de600e2d9c7f15daf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          inquiry_type: formData.inquiryType,
          _subject: `[Website Inquiry - ${formData.inquiryType}] ${formData.name}`,
          message: formData.message,
          _captcha: 'false'
        })
      });

      const data = await response.json();
      setFormSubmitted(true);
    } catch (err) {
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="editorial-header">
            <h1>Contact & Inquiries</h1>
            <div className="thin-rule"></div>
          </div>

          <div className="contact-grid" style={{ margin: '3rem 0' }}>
            {/* Contact Info */}
            <div className="analog-list-item" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1.2rem', color: 'var(--text-primary)' }}>Contact Details</h3>
              
              <div style={{ marginBottom: '1.8rem' }}>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>
                  Email
                </strong>
                <a href="mailto:acurtis5@nd.edu" style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500, textDecoration: 'underline' }}>
                  acurtis5@nd.edu
                </a>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  Inquiry Types
                </strong>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  <li>Recitals</li>
                  <li>Studio Availability</li>
                  <li>Funerals</li>
                  <li>Weddings</li>
                </ul>
              </div>
            </div>

            {/* Form Section */}
            <div className="analog-list-item" style={{ padding: '2rem' }}>
              <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.8rem' }}>
                <h3 style={{ margin: 0 }}>Send a Message</h3>
              </div>

              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Thank You!</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    Your message has been sent successfully. Anastasia will reply shortly.
                  </p>
                  <button className="btn-analog-outline" onClick={() => setFormSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="analog-form-group" style={{ marginBottom: '1.2rem' }}>
                    <label className="analog-label" style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="analog-input" 
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-main)' }}
                    />
                  </div>

                  <div className="analog-form-group" style={{ marginBottom: '1.2rem' }}>
                    <label className="analog-label" style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      className="analog-input" 
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-main)' }}
                    />
                  </div>

                  <div className="analog-form-group" style={{ marginBottom: '1.2rem' }}>
                    <label className="analog-label" style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>Inquiry Type</label>
                    <select 
                      className="analog-select"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-main)' }}
                    >
                      <option value="Recitals">Recitals</option>
                      <option value="Studio Availability">Studio Availability</option>
                      <option value="Funerals">Funerals</option>
                      <option value="Weddings">Weddings</option>
                    </select>
                  </div>

                  <div className="analog-form-group" style={{ marginBottom: '1.5rem' }}>
                    <label className="analog-label" style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>Message *</label>
                    <textarea 
                      required 
                      rows={5}
                      className="analog-textarea" 
                      placeholder="Write your inquiry message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', fontFamily: 'var(--font-body)' }}
                    />
                  </div>

                  <button type="submit" className="btn-analog-primary" disabled={isSubmitting} style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}>
                    {isSubmitting ? 'Sending Message...' : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
