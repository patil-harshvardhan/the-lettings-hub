"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
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
            <SwiperSlide>
              <a
                href="#"
                className="flex flex-col items-center bg-white border border-gray-200 shadow md:flex-row md:max-w-full md:max-h-full h-full w-full  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-6 font-[family-name:var(--font-geist-mono)]"
                key={hobby.id}
              >
                <img
                  className="rounded-l-2xl mb-2 max-h-100"
                  src={hobby.image}
                  alt={hobby.name}
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {hobby.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {hobby.description}
                  </p>
                </div>
              </a>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
}
