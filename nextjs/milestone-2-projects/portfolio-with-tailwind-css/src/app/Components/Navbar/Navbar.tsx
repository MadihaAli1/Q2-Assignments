"use client";
import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import Link from "next/link";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="flex justify-between items-center bg-[#171d32] text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-0 md:mx-24 mt-4 font-semibold bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:flex gap-6`}
      >
        <li>
          <Link href="/" className="text-md transition-all duration-300 p-1 md:p-0">
            Home
          </Link>
        </li>
        <li>
          <Link href="#About" className="text-md transition-all duration-300 p-1 md:p-0">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#Footer" className="text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
