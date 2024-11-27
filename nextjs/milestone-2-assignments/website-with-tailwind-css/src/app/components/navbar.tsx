'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full h-[60px] px-5 flex items-center justify-between relative text-white">
      <h3 className="w-[100px] text-center font-sans text-lg">MA&apos;Salon</h3>
      <div className="flex flex-col cursor-pointer md:hidden" onClick={toggleMenu}>
        <div className="w-[25px] h-[3px] bg-white my-[2px] transition duration-300"></div>
        <div className="w-[25px] h-[3px] bg-white my-[2px] transition duration-300"></div>
        <div className="w-[25px] h-[3px] bg-white my-[2px] transition duration-300"></div>
      </div>
      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col md:flex-row md:flex items-center md:static absolute top-[60px] left-0 w-full md:w-auto bg-[#333] md:bg-transparent md:z-auto z-10`}
      >
        <li className="md:mx-5 my-2 md:my-0">
          <Link href="/" className="text-white no-underline uppercase">
            Home
          </Link>
        </li>
        <li className="md:mx-5 my-2 md:my-0">
          <Link href="/services" className="text-white no-underline uppercase">
            Services
          </Link>
        </li>
        <li className="md:mx-5 my-2 md:my-0">
          <Link href="/about" className="text-white no-underline uppercase">
            About
          </Link>
        </li>
        <li className="md:mx-5 my-2 md:my-0">
          <Link href="/contact" className="text-white no-underline uppercase">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
