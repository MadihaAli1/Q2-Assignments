'use client';

import React, { useState, useEffect } from "react";

const TextChange: React.FC = () => {
  const texts: string[] = ["Hi, I'm Madiha", "Welcome to my Portfolio", "Let's Build Something Amazing"]; 
  const [currentText, setCurrentText] = useState<string>(""); 
  const [endValue, setEndValue] = useState<number>(0); 
  const [isForward, setIsForward] = useState<boolean>(true); 
  const [index, setIndex] = useState<number>(0); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue)); 

      if (isForward) {
        setEndValue((prev) => prev + 1); 
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 10) {
        setIsForward(false); 
      }

      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length); 
      }
    }, 50);

    return () => clearInterval(intervalId); 
  }, [endValue, isForward, index, texts]);

  return (
    <div className="textChangeContainer">
      <div className="transition">{currentText}</div>
    </div>
  );
};

export default TextChange;
