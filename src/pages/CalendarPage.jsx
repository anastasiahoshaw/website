import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function CalendarPage({ setActiveTab, onOpenFormModal }) {
  const upcomingEvents = [
    {
      title: "OHS Biggs Scholars Recital",
      dateTime: "Wednesday, August 12, 2026 at 2:00 pm & 3:00 pm CT",
      venue: "The Church of the Holy Trinity",
      location: "Philadelphia, PA"
    },
    {
      title: "Loyola University Concert Series",
      dateTime: "Sunday, October 18, 2026 at 3:00 pm CT",
      venue: "Madonna della Strada Chapel",
      location: "Chicago, IL",
      link: "https://www.luc.edu/campusministry/mdschapel/organ/"
    },
    {
      title: "Thunder From the Sky",
      dateTime: "TBD, Fall 2026",
      venue: "Basilica of the Sacred Heart",
      location: "Notre Dame, IN"
    },
    {
      title: "Degree Recital",
      dateTime: "TBD, Spring 2026",
      venue: "Basilica of the Sacred Heart",
      location: "Notre Dame, IN"
    },
    {
      title: "Monday Musical Club Community Concert Series",
      dateTime: "Monday, April 5, 2027 at 7:00 pm ET",
      venue: "First Congregational Church",
      location: "St. Joseph, MI"
    },
    {
      title: "Southern Illinois AGO Rising Stars Recital",
      dateTime: "Saturday, May 29, 2027 at 7:00 pm CT",
      venue: "Shyrock Auditorium",
      location: "Carbondale, IL"
    }
  ];

  return (
    <div className="calendar-page">
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="editorial-header">
            <h1>Upcoming Performances</h1>
            <div className="thin-rule"></div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="analog-list-item" style={{ padding: '1.8rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '0.6rem' }}>
                  <div>
                    <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>{event.title}</h2>
                    <div style={{ fontSize: '1rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)', marginTop: '0.2rem' }}>
                      {event.venue} — {event.location}
                    </div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.2rem' }}>
                    {event.dateTime}
                  </div>
                </div>

                {event.link && (
                  <div style={{ marginTop: '0.8rem' }}>
                    <a 
                      href={event.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                    >
                      Venue & Event Information <ExternalLink size={14} />
                    </a>
                  </div>
                )}
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
            <button className="btn-analog-primary" onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              Inquire for Booking <span className="btn-arrow">&rarr;</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
