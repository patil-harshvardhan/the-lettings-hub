"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Mousewheel, Pagination } from "swiper/modules";
import axios from "axios";
import Loader from "../utils";

export default function App() {
  const [hobbies, setHobbies] = useState(null);
  const getHobbies = () => {
    axios.get("http://localhost:8000/hobbies").then((response) => {
      if (response.status == 200) setHobbies(response.data);
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
        {hobbies === null ? (
          <Loader />
        ) : (
          hobbies.map((hobby) => (
            <SwiperSlide key={hobby.id}>
              <div className="flex flex-col md:flex-row items-center justify-center h-screen hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 font-[family-name:var(--font-geist-mono)]">
    <div className="w-full h-full md:w-1/2 flex justify-center mb-6 md:mb-0 p-5">
        <img
            src={hobby.image}
            alt={hobby.name}
            className="max-w-full h-auto object-cover lg:rounded-l-3xl lg:rounded-r-none rounded-lg shadow-lg animate-fade-in-image"
        />
    </div>
    <div className="text-center md:text-left w-full md:w-1/2 p-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-slide-up">
            {hobby.name}
        </h1>
        <p className="lg:mt-8 text-base sm:text-lg md:text-xl lg:text-3xl text-gray-700 dark:text-gray-400 animate-fade-in-slide-up">
            {hobby.description}
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
