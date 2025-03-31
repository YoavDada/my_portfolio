import React, { useState } from 'react';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';

const Tabbed_Nav = () => {
  const [selectedTab, setSelectedTab] = useState('Home');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${selectedTab === 'Home' ? 'active' : ''}`}
            onClick={() => handleTabClick('Home')}
            style={{ cursor: 'pointer' }}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${selectedTab === 'Projects' ? 'active' : ''}`}
            onClick={() => handleTabClick('Projects')}
            style={{ cursor: 'pointer' }}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${selectedTab === 'About' ? 'active' : ''}`}
            onClick={() => handleTabClick('About')}
            style={{ cursor: 'pointer' }}
          >
            About
          </a>
        </li>
      </ul>

      <div className="tab-content mt-3">
        {selectedTab === 'Home' && <Home />}
        {selectedTab === 'Projects' && <Projects />}
        {selectedTab === 'About' && <About />}
      </div>
    </div>
  );
};

export default Tabbed_Nav;
