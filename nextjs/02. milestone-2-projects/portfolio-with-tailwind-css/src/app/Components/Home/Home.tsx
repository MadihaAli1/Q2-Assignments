import React from "react";
import Image from "next/image"; 
import homeImg from "../../../public/home.png"; 
import TextChange from "./TextChange";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight"> 
        <br />
       "Fresh Frontend Developer skilled in creating responsive and user-friendly designs."
        </p>
        <Link href="#Footer">
          <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
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
          className="md:h-80 rounded-md"
        />
      </div>
    </div>
  );
};

export default Home;


