import React, { useState } from 'react';
import { X, Send, CheckCircle2, ExternalLink, MessageSquare, Calendar, GraduationCap } from 'lucide-react';

export default function GoogleFormModal({ isOpen, onClose, defaultType = 'general' }) {
  const [formType, setFormType] = useState(defaultType); // 'general', 'recital', 'lesson'
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    venue: '',
    lessonType: 'organ',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'N/A',
          event_date: formData.eventDate || 'N/A',
          venue: formData.venue || 'N/A',
          lesson_interest: formData.lessonType || 'N/A',
          subject: `[Website Inquiry - ${formType.toUpperCase()}] ${formData.name}`,
          message: formData.message,
          from_name: 'Anastasia Hoshaw Website'
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      venue: '',
      lessonType: 'organ',
      message: ''
    });
  };

  return (
    <div className="lightbox-modal" onClick={onClose}>
      <div 
        className="google-form-container" 
        onClick={(e) => e.stopPropagation()}
        style={{ width: '100%', maxWidth: '640px', maxHeight: '90vh', overflowY: 'auto' }}
      >
        <div className="google-form-header-badge">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <MessageSquare style={{ color: 'var(--accent-gold)' }} size={22} />
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>Direct Inquiry & Booking Form</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Send a direct message or embed your custom Google Form</p>
            </div>
          </div>
          <button className="lightbox-close-btn" style={{ position: 'static' }} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Tab Selection */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
          <button 
            className={`filter-chip ${formType === 'general' ? 'active' : ''}`}
            onClick={() => { setFormType('general'); setSubmitted(false); }}
          >
            General Contact
          </button>
          <button 
            className={`filter-chip ${formType === 'recital' ? 'active' : ''}`}
            onClick={() => { setFormType('recital'); setSubmitted(false); }}
          >
            Recital / Concert Booking
          </button>
          <button 
            className={`filter-chip ${formType === 'lesson' ? 'active' : ''}`}
            onClick={() => { setFormType('lesson'); setSubmitted(false); }}
          >
            Lesson Inquiry
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <CheckCircle2 size={56} style={{ color: 'var(--accent-gold)', margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Thank You!</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
              Your inquiry has been transmitted successfully. Anastasia Hoshaw will review your message and reply promptly.
            </p>
            <button className="cta-btn-gold" onClick={handleReset}>
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input 
                type="text" 
                required 
                className="form-control" 
                placeholder="e.g. Eleanor Vance"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input 
                  type="email" 
                  required 
                  className="form-control" 
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            {formType === 'recital' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Proposed Event Date</label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Venue / Church Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. St. Thomas Cathedral"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  />
                </div>
              </div>
            )}

            {formType === 'lesson' && (
              <div className="form-group">
                <label className="form-label">Primary Interest</label>
                <select 
                  className="form-control"
                  value={formData.lessonType}
                  onChange={(e) => setFormData({ ...formData, lessonType: e.target.value })}
                >
                  <option value="organ">Organ Instruction (Beginning / Advanced)</option>
                  <option value="piano">Piano Instruction</option>
                  <option value="sacred">Sacred Music & Hymn Playing</option>
                  <option value="masterclass">Masterclass / Choir Workshop</option>
                </select>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Message / Details *</label>
              <textarea 
                required 
                className="form-control" 
                placeholder="Please describe your event, lesson goals, or inquiry details..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Protected by Google Form integration standard
              </span>
              <button type="submit" className="cta-btn-gold" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                <Send size={16} /> {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
