import React from 'react';

export default function Header({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'landing', label: 'Home' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'lessons', label: 'Lessons' },
    { id: 'bio', label: 'Bio & Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container header-nav">
        <div className="brand-title" onClick={() => handleNavClick('landing')}>
          Anastasia Hoshaw
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
