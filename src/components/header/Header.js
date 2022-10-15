import React, { useState } from 'react';

import makenisLogo from '../../images/Makenis_Logo_2-01.svg';

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about-section" },
  { name: "Contact", href: "#footer-section" }
];

function Header(){
  const [isMenuOpen, setToggleMenu] = useState(false);
  
  const handleOnClick = () => setToggleMenu(!isMenuOpen);

  return (
    <header className="main-header">
      <nav className="nav-wrapper">
        <div className="logo-header items-center justify-between">
          <a aria-label="Makenis" href="#" className="flex">
            <span className="logo-container flex">
              <img className="logo" src={makenisLogo} alt="Makenis Logo" />
            </span>
          </a>
        </div>
        <button
          onClick={handleOnClick}
          className="mobile-nav-toggle flex-end items-center" 
          id="hum-show"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen ? false : true}
        >
          <div>
            <div className="items-center flex">
              <span className="flex hum-container">
                {
                  isMenuOpen ? (
                    <svg id="cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon line" width="40" height="40">
                      <line id="primary" x1="19" y1="19" x2="5" y2="5" style={{ fill: 'none', stroke: '#3f334d', strokeLinecap: 'round',strokeLinejoin: 'round', strokeWidth: 1.5 }}></line>
                      <line id="primary-2" data-name="primary" x1="19" y1="5" x2="5" y2="19" style={{ fill: 'none', stroke: '#3f334d', strokeLinecap: 'round',strokeLinejoin: 'round', strokeWidth: 1.5 }}></line>
                    </svg>
                  ) : (
                    <svg id="menu-alt"  aria-hidden="true" alt="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon line" width="40" height="40">
                      <path id="primary" d="M3,18H21M3,12H21M3,6H21" style={{ fill: 'none', stroke: '#3f334d', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.5 }}></path>
                    </svg>
                  )
                }
              </span>
            </div>
          </div>
        </button>
        <div
          {...(isMenuOpen ? { "data-visible": "" } : { "": "" } )}
          className="primary-navigation items-center"
          id="nav-hide"
        >
          <div className="nav-links flex">
            <ul className="flex nav-items " role="menubar ">
              {
                menuItems.map((item) => (
                  <li className="list-item" role="navigation" key={item.href}>
                    <a href={item.href} onClick={handleOnClick}>{item.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        </nav>
    </header>
  );
}

export default Header;