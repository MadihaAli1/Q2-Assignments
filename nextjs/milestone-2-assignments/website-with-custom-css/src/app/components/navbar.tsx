'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import '../../styles/navbar-styles/styles.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <h3 className="logo">MA&apos;Salon</h3>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={menuOpen ? 'active' : ''}>
        <li>
          <Link className="link" href="/"><span></span>Home</Link>
        </li>
        <li>
          <Link className="link" href="/services"><span></span>Services</Link>
        </li>
        <li>
          <Link className="link" href="/about"><span></span>About</Link>
        </li>
        <li>
          <Link className="link" href="/contact"><span></span>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;