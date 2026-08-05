import React from 'react';

export default function Header({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'landing', label: 'Home' },
    { id: 'bio', label: 'Biography' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'lessons', label: 'Lessons' },
    { id: 'recordings', label: 'Recordings & Repertoire' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container header-nav">
        <div className="brand-container" onClick={() => handleNavClick('landing')} style={{ cursor: 'pointer' }}>
          <div className="brand-title">Anastasia Hoshaw</div>
          <div className="brand-subtitle">Organist and Educator</div>
        </div>

        <nav>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
