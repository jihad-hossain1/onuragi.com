"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

let carousel = [
  {
    bgUrl: "https://i.ibb.co/9qWj2ny/eddie-pipocas-Tqo-Ay-D2osw-unsplash-1.jpg",
  },
  {
    bgUrl:
      "https://i.ibb.co/XCNW8Vc/anthony-ievlev-t-N-OC03a-DM4-unsplash-1.jpg",
  },
];
const HomeCarosel = () => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#0000",
          "--swiper-pagination-color": "#0000",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg min-h-full"
          style={{
            "background-image":
              "url(https://i.ibb.co/9qWj2ny/eddie-pipocas-Tqo-Ay-D2osw-unsplash-1.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarosel;
