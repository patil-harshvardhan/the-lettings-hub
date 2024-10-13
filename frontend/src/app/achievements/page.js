"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Mousewheel, Pagination } from "swiper/modules";
import axios from "axios";
import Loader from "../utils";

export default function Achievements() {
  const [achievements, setAchievements] = useState(null);
  const getHobbies = () => {
    axios.get("http://localhost:8000/achievements").then((response) => {
      if (response.status == 200) setAchievements(response.data);
    });
  };

  useEffect(() => {
    getHobbies();
  }, []);

  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {achievements === null ? (
          <Loader />
        ) : (
          achievements.map((achievement) => (
            <SwiperSlide key={achievement.id}>
              <div className="flex flex-col md:flex-row items-center justify-center h-screen hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 font-[family-name:var(--font-geist-mono)]">
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 p-5">
                  <img
                    src={achievement.image}
                    alt={achievement.name}
                    className="max-w-full h-auto object-cover rounded-lg shadow-lg animate-fade-in-image"
                  />
                </div>
                <div className="text-center md:text-left w-full md:w-1/2 p-5">
                  <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-slide-up">
                    {achievement.name}
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 animate-fade-in-slide-up">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
}
