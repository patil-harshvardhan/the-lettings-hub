"use client";
import React, { useState } from "react";
import Image from "next/image";

const HobbiesCarousel = () => {
  const hobbies = [
    {
      name: "Motorbike rides",
      description:
        "I like riding motorbikes and exploring new places on two wheels. The farthest I have travelled is southern India from Belagavi to Kanyakumari on my bike (Almost 1600 miles).",
      image: "https://auctionimages.blob.core.windows.net/lettinghub/IMG_4061.JPG",
    },
    {
      name: "Mountain Treks",
      description:
        "I have trekked most of the Sahyadri mountain range in Maharashtra, India. I wish to treak more mountains in the future.",
      image: "https://auctionimages.blob.core.windows.net/lettinghub/IMG_4061.JPG",
    },
    {
      name: "Cooking",
      description:
        "I almost always cook my own meals, My speciality is Indian cuisine.",
      image: "https://auctionimages.blob.core.windows.net/lettinghub/IMG_4061.JPG",
    },
    {
      name: "Football",
      description:
        "Whenever I find some time to spare, I like to go out and play football. I am not a great player but I enjoy the game.",
      image: "https://auctionimages.blob.core.windows.net/lettinghub/IMG_4061.JPG",
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
        <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
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
        </div>
      </main>
    </div>
  );
};

export default HobbiesCarousel;
