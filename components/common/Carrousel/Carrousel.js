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
          <Slide3 />
        </SwiperSlide>

        {/* <SwiperSlide>
          <Slide4 />
        </SwiperSlide> */}
      </Swiper>
      <Divider />
    </>
  );
};

const Slide1 = () => {
  return (
    <SlideContainer>
      <div className="text-white text-center text-sm font-light sm:text-lg p-5">
        <p>
          Há 14 anos atuando apenas com Direito Previdenciário em todo estado do Rio de Janeiro. Advocacia de
          excelência para concessão e revisão de aposentadorias e pensões do Regime Geral de Previdência
          Social.
        </p>
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

const Slide3 = () => {
  return (
    <div className="bg-[#E5E5E5] flex items-center justify-center h-44 sm:h-80 w-full text-white text-center text-sm font-light sm:text-lg p-5">
      <a href="#insalubridade">
        <p>Insalubridade e periculosidade</p>
        <p>-</p>
        <p>Concessão e revisão de aposentadorias especiais</p>
      </a>
    </div>
  );
};

const SlideContainer = ({ children }) => {
  return <div className="bg-metal flex items-center justify-center h-44 sm:h-80 w-full">{children}</div>;
};
