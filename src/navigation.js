import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import icon from './asset/icon.png';

const handleIconClick2 = () => {
  window.location.href = "https://www.pitmtech.com";
};

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav className="navbar">
      <div className="drawer-btn" onClick={handleDrawerClick}>
        <div className={`drawer-line ${drawerOpen ? 'open' : ''}`} />
        <div className={`drawer-line ${drawerOpen ? 'open' : ''}`} />
        <div className={`drawer-line ${drawerOpen ? 'open' : ''}`} />
        
      </div>

      <ul className={`nav-list ${drawerOpen ? 'open' : ''}`}>
      <li><a href={"https://space.pitmtech.com"}>Space Project Page</a></li>
      <li><a href={"https://weather.pitmtech.com"}>Weather Project Page</a></li>
      <li onClick={handleDrawerClick} ><Link to="/feedback">Feedback</Link></li>
        <li><h1>Flutter Course</h1></li>
        <li><h1>C Threads Course</h1></li>
       
        </ul>
        <div className="Container">
          <div className="icon-container" style={{ marginLeft: '44vw', marginRight: 'auto' }}>
            <img src={icon} alt="Icon" className="icon" onClick={handleIconClick2} style={{ width: '165px', height: '150px', cursor: 'pointer' }} />
            <div className="HeaderList" style={{ marginLeft: '24vw' }}>
              <li><Link to="/Marios">Marios.F</Link></li>
              <li style={{marginLeft: 40,marginRight: 65}}><Link to="/Kostas">Kostas.F</Link></li>
              <li><Link to="/">Homepage</Link> </li>
            </div>
          </div>
        </div>
      
    </nav>
  );
}

export default NavBar;
