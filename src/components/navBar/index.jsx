import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const data = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'EDUCATION', to: '/education' },
  { label: 'EXPERIENCE', to: '/experience' },
  { label: 'SKILLS', to: '/skills' },
  { label: 'PROJECTS', to: '/projects' },
  { label: 'CONTACT', to: '/contact' },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
    document.body.classList.toggle('with-navbar', !toggleIcon); 
  };

  const handleLinkClick = () => {
    setToggleIcon(false);
    document.body.classList.remove('with-navbar'); 
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-container-logo'>
            {/* <FaReact fontSize={30} /> */}
          </Link>
        </div>

        <ul className={`navbar-container-menu ${toggleIcon ? 'active' : ''}`}>
          {data.map((item, key) => (
            <li key={key} className='navbar-container-menu-item'>
              <Link
                className='navbar-container-menu-item-link'
                to={item.to}
                onClick={handleLinkClick}
              >
                <b>{item.label}</b>
              </Link>
            </li>
          ))}
        </ul>

        <div className='nav-icon' onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
