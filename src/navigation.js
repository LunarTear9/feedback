import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import icon from './asset/icon.png';

const handleIconClick2 = () => {
  window.location.href = "https://www.pitmtech.com";
};

const NavBar = () => {
  return (
    <nav className="navbar">
        
      <ul className="nav-list">
        <div className="Container">
            
          <div className="icon-container" style={{ marginLeft: '45vw', marginRight: 'auto' }}>
            
            <img src={icon} alt="Icon" className="icon" onClick={handleIconClick2} style={{ width: '165px', height: '150px', cursor: 'pointer' }} />
            <div className="HeaderList" style={{marginLeft: '26vw'}}>
            <li><Link to="/Marios">Marios.F</Link></li>
            <li><Link to="/Kostas" >Kostas.F</Link></li>
            <li><Link to="/" >Homepage</Link> </li>
            
          </div>
          </div>
          
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
