import React, { useState, useEffect } from 'react';
//import { Button } from './Button';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ACM @ UTA
            <i class='fab FaFireAlt' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Events@ACM UTA
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                UTA blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Resources'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resources
              </Link>
            </li>
            

            <li className='nav-item'>
              <Link
                to='/Login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
