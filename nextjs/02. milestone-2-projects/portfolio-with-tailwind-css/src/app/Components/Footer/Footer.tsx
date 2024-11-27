import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-6 md:p-12 items-center gap-6 md:gap-0"
    >
      {/* Contact Section */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To Reach Out!
        </h3>
      </div>

      {/* Contact Information */}
      <ul className="text-sm md:text-xl space-y-3 md:space-y-4 text-center md:text-left">
        <li className="flex items-center justify-center md:justify-start gap-2">
          <MdOutlineEmail size={20} />
          <span>madihmali57@gmail.com</span>
        </li>
        <li className="flex items-center justify-center md:justify-start gap-2">
          <CiLinkedin size={20} />
          <span>linkedin.com/MadihaAli</span>
        </li>
        <li className="flex items-center justify-center md:justify-start gap-2">
          <FaGithub size={20} />
          <span>github.com/MadihaAli1</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
