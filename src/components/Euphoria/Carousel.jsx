import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import "./Carousel.css";
import { categoryBG } from '../../assets';

export default function Carousel({ events, category,categoryId}) {
  const navigate = useNavigate();

  const handleClick = (event) => {
  const eventId =
    typeof event === "object"
      ? event.id
      : event.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  navigate(`/instructions/${categoryId}/${eventId}`);
  };


  return (
    <div className="carousel-wrapper">
      <div className="carousel-header">
        <img
          src={categoryBG}
          alt="background for categories"
          className="category"
        />
        <p className="category-names">{category}</p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop
        navigation
        modules={[Navigation]}
        threshold={15}          // 🔥 distinguish tap vs swipe
        onTap={(swiper) => {
          const index = swiper.clickedIndex;
          if (index == null) return;

          const event = events[index];
        handleClick(event);
  }}
        className="mySwiper"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="sport-slide-wrapper">
            <img
              src={event.image}
              alt={event.name}
              className="sport-image"
            />
            <div className="sport-slide">
              {typeof event === "object" ? event.name : event}
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
