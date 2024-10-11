"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "../utils";
import axios from "axios";

const AchievementsCarousel = () => {
  const [achievements, setAchievements] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
    );
  };

  const getAchievements = () => {
    axios.get("http://localhost:8000/achievements").then((response) => {
      if (response.status == 200)
        setAchievements(response.data);
    });
  };

  useEffect(() => {
    getAchievements();
  });

  return achievements === null ? (
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
              {currentIndex + 1}. {achievements[currentIndex].name}
            </h5>
          </a>
          <a href="#" className="w-full flex justify-center items-center">
            <img
              className="rounded-t-lg mb-2 max-h-96"
              src={achievements[currentIndex].image}
              alt={achievements[currentIndex].name}
            />
          </a>
          <p className="mb-3 text-gray-700 dark:text-gray-400 font-[family-name:var(--font-geist-mono)]">
            {achievements[currentIndex].description}
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
        Page {currentIndex + 1}/{achievements.length}
      </div>
    </>
  );
};

export default AchievementsCarousel;
