import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "./style.css"

const Footer: React.FC = () => {
  return (
    <div id="Footer" >
      <div>
        <h1>Contact</h1>
        <h3>Feel Free To Reach Out!</h3>
      </div>
      <ul>
        <li>
          <MdOutlineEmail size={20} />
          <span>madihmali57@gmail.com</span>
        </li>
        <li>
          <CiLinkedin size={20} />
          <span>linkedin.com/MadihaAli</span>
        </li>
        <li>
          <FaGithub size={20} />
          <span>github.com/MadihaAli1</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
