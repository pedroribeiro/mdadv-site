import { Divider } from "@components/layout";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { useWindowDimensions } from "utils/useWindowDimensions"

export const Carrousel = () => {

  const { width } = useWindowDimensions()

  const [slides, setSlides] = useState(1)

  useEffect(() => {
    if (width >= 450) {
      setSlides(2)
    } else {
      setSlides(1)
    }

  }, [slides, setSlides, width])

  return (
    <>
      <div className="full-bleed-dark-grey">
        <Divider />
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={slides}
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
      </div>
    </>
  );
};

const Slide1 = () => {
  return (
    <SlideContainer>
      <div className="text-white text-center text-sm font-light sm:text-lg p-5">
        <p className="text-white text-shadow-lg">
          Desde 2008 atuando apenas com Direito Previdenciário em todo estado do Rio de Janeiro,
          somos advogados especialistas em ações para concessão e revisão de benefícios do INSS.
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
    <div className="bg-[#E5E5E5] flex items-center justify-center h-44 sm:h-80 w-full text-center text-sm font-light sm:text-lg p-5 judgement-bg bg-cover ">
      <a href="#insalubridade">
        <p className="text-white text-shadow-lg">Insalubridade e periculosidade</p>
        <p className="text-white text-shadow-lg">-</p>
        <p className="text-white text-shadow-lg">Concessão e revisão de aposentadorias especiais</p>
      </a>
    </div>
  );
};

const SlideContainer = ({ children }) => {
  return <div className="bg-metal flex items-center justify-center h-44 sm:h-80 w-full">{children}</div>;
};
