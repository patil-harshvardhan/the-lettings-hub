"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Loader from "../utils";

const HobbiesCarousel = () => {
  const [hobbies, setHobbies] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === hobbies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? hobbies.length - 1 : prevIndex - 1
    );
  };

  const getHobbies = () => {
    axios.get("http://localhost:8000/hobbies").then((response) => {
      if(response.status == 200) 
        setHobbies(response.data);
    });
  };

  useEffect(() => {
    getHobbies();
  },[]);

  return hobbies === null ? (
    <Loader />
  ) : (
    <>
      <div className="relative max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600"
          onClick={handlePrev}
        >
          &#10094;
        </button>
        <div className="p-6">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-[family-name:var(--font-geist-mono)]">
              {currentIndex + 1}. {hobbies[currentIndex].name}
            </h5>
          </a>
          <a href="#" className="flex justify-center items-center">
            <img
              className="rounded-t-lg mb-2 max-h-96"
              src={hobbies[currentIndex].image}
              alt={hobbies[currentIndex].name}
            />
          </a>
          <p className="mb-3 text-gray-700 dark:text-gray-400 font-[family-name:var(--font-geist-mono)]">
            {hobbies[currentIndex].description}
          </p>
        </div>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
      <div className="font-[family-name:var(--font-geist-mono)]">
        {" "}
        Page {currentIndex + 1}/{hobbies.length}
      </div>
    </>
  );
};

export default HobbiesCarousel;
