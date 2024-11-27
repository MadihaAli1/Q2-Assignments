'use client';

import React from "react";
import Image from "next/image";
import homeImg from "../../../public/home.png";
import TextChange from "./TextChange";
import Link from "next/link";
import "./homeStyles.css"

const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <div className="homeText">
        <h1>
          <TextChange />
        </h1>
        <p>
          "Fresh Frontend Developer skilled in creating responsive and user-friendly designs."
        </p>
        <Link href="#Footer">
          <button className="homeButton">
            Contact Me
          </button>
        </Link>
      </div>
      <div>
        <Image
          src={homeImg}
          alt="Home image"
          width={400}
          height={400}
          className="homeImage"
        />
      </div>
    </div>
  );
};

export default Home;
