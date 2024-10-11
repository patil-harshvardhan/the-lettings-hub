"use client";
import React, { useState } from "react";
import Image from "next/image";

const AchivementsCarousel = () => {
  const hobbies = [
    {
      name: "Smart India Hackathon Winner 2020",
      description:
        "Led Team ABHYUDAY to victory in Smart India Hackathon, one of India's largest hackathons, topic under the Ministry of Health and Family Welfare. Developed an Android application designed to improve response times and services in medical emergencies, addressing problem statement SS-42. Engineered and deployed the application over a challenging 3-day period, focusing on reliable functionality under high-stress, emergency conditions.",
      image:
        "https://auctionimages.blob.core.windows.net/lettinghub/1680718119842.jpeg",
    },
    {
      name: "4th Place - Eyantra Robotics Nation Wide 2016",
      description:
        "Secured 4th place in the nationwide Eyantra Robotics hackathon hosted by IIT Bombay. Collaborated in a team to design and build a robot for the Nutty Squirrel challenge over a six-month period. Engineered a solution that demonstrated innovative robotics applications in simulated real-world problem-solving.",
      image:
        "https://auctionimages.blob.core.windows.net/lettinghub/IMG_4312.JPG",
    },
  ];

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

  return (
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
          <a href="#" className="w-full flex justify-center items-center">
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

export default AchivementsCarousel;
