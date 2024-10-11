"use client";
import React, { useState } from "react";
import Image from "next/image";

const AchivementsCarousel = () => {
  const hobbies = [
    {
      name: "Winner Smart India Hackathon 2020",
      description:
        "I like riding motorbikes and exploring new places on two wheels. The farthest I have travelled is southern India from Belagavi to Kanyakumari on my bike (Almost 1600 miles).",
      image: "https://auctionimages.blob.core.windows.net/lettinghub/IMG_4061.JPG",
    },
    {
      name: "Eyantra Robotics Finalist",
      description:
        "I have trekked most of the Sahyadri mountain range in Maharashtra, India. I wish to trek more mountains in the future.",
      image: "https://auctionimages.blob.core.windows.net/lettinghub/IMG_4061.JPG",
    }
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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
                {hobbies[currentIndex].name}
              </h5>
            </a>
            <a href="#">
              <img
                className="rounded-t-lg mb-2"
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
        <div className='font-[family-name:var(--font-geist-mono)]'> Page {currentIndex + 1}/{hobbies.length}</div>
      </main>
    </div>
  );
};

export default AchivementsCarousel;
