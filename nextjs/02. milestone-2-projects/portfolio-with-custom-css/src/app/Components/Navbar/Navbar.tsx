"use client";
import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import Link from "next/link";
import './style.css'

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  return (
    <nav className="navbar navbarMdPadding">
      <span className="logo">Portfolio</span>

      {/* Navbar Links */}
      <ul className={`menuList ${menu ? "menuVisible" : ""}`}>
        <li>
          <Link href="/" className="menuItem">
            Home
          </Link>
        </li>
        <li>
          <Link href="#About" className="menuItem">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="menuItem">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#Footer" className="menuItem">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="mobileMenuWrapper">
        {!menu ? (
          <RiMenu2Line
            size={30}
            className="mobileMenuIcon"
            onClick={() => openMenu(!menu)}
          />
        ) : (
          <RiCloseLine
            size={30}
            className="mobileMenuIcon"
            onClick={() => openMenu(!menu)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
