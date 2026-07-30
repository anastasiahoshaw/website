import React from 'react';

export default function CalendarPage({ setActiveTab, onOpenFormModal }) {
  // Simple, realistic recital events list
  const upcomingEvents = [
    {
      date: "October 18, 2026",
      title: "Solo Organ Recital",
      venue: "Cathedral Sanctuary",
      location: "Milwaukee, WI",
      details: "Solo recital featuring works by J.S. Bach, César Franck, and Louis Vierne."
    },
    {
      date: "November 8, 2026",
      title: "Choral Evensong & Organ Prelude",
      venue: "Grace Church",
      location: "Madison, WI",
      details: "Sacred service accompaniment and prelude meditation."
    },
    {
      date: "December 4, 2026",
      title: "Advent Organ Concert",
      venue: "St. Mary's Sanctuary",
      location: "Minneapolis, MN",
      details: "Seasonal organ literature and choral accompaniment."
    }
  ];

  return (
    <div className="calendar-page">
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="editorial-header">
            <span className="editorial-subtitle">PERFORMANCES</span>
            <h1>Recital Calendar</h1>
            <p style={{ marginTop: '0.5rem' }}>Upcoming organ recitals, sacred services, and guest engagements.</p>
            <div className="thin-rule"></div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="analog-list-item">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', margin: 0 }}>{event.title}</h3>
                    <div style={{ fontSize: '0.95rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)' }}>
                      {event.venue} — {event.location}
                    </div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)' }}>
                    {event.date}
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  {event.details}
                </p>
              </div>
            ))}
          </div>

          {/* Booking Notice */}
          <div style={{ 
            background: 'var(--bg-surface)', 
            border: '1px solid var(--border-color)', 
            padding: '2rem', 
            borderRadius: 'var(--radius-sm)',
            marginTop: '3rem',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Recital Inquiries</h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '0.98rem' }}>
              Interested in scheduling a solo organ recital, dedicatory concert, or guest appearance?
            </p>
            <button className="btn-analog-primary" onClick={() => onOpenFormModal('recital')}>
              Inquire for Booking
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
