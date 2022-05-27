import { Divider } from "@components/layout";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

export const Carrousel = () => {
  return (
    <>
      <Divider />
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>

        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>

        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>

        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
      </Swiper>
      <Divider />
    </>
  );
};

const Slide1 = () => {
  return (
    <SlideContainer>
      <div className="text-white text-center text-sm font-light sm:text-lg">
        <p>Lorem ipsum dolors sit amet, consectet elitsed do eiusmod</p>
      </div>
    </SlideContainer>
  );
};

const Slide2 = () => {
  return (
    <SlideContainer>
      <img className={"object-cover w-full h-full"} src="/escritorio.jpg" />
    </SlideContainer>
  );
};

const SlideContainer = ({ children }) => {
  return (
    <div className="bg-metal flex items-center justify-center bg-metal h-44 sm:h-80 w-full">{children}</div>
  );
};
