"use client";
import React, { useState } from "react";
import Image from "next/image";

const HobbiesCarousel = () => {
  const hobbies = [
    {
      name: "Motorbike rides",
      description:
        "I like riding motorbikes and exploring new places on two wheels. The farthest I have travelled is southern India from Belagavi to Kanyakumari on my bike (Almost 1600 miles).",
      image: "/images/motorbike.jpg", // Replace with actual image paths
    },
    {
      name: "Mountain Treks",
      description:
        "Experience the tranquility of nature on rugged mountain trails.",
      image: "/images/mountain.jpg",
    },
    {
      name: "Hackathons",
      description:
        "Solve challenges, build innovative solutions, and compete with the best.",
      image: "/images/hackathon.jpg",
    },
    {
      name: "Football",
      description:
        "Enjoy the beautiful game with friends or watch your favorite teams.",
      image: "/images/football.jpg",
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-[family-name:var(--font-geist-mono)]">
                {hobbies[currentIndex].name}
              </h5>
            </a>
            <p className="mb-3 text-gray-700 dark:text-gray-400 max-w-4xl font-[family-name:var(--font-geist-mono)]">
                {hobbies[currentIndex].description}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HobbiesCarousel;
