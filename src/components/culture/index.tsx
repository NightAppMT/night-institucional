import { Container, Img, MainDiv, SliderDiv, SliderImg, Title } from "./styles";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";

export function CultureComponent() {
  const Slides = [
    {
      name: "slide1",
    },
    {
      name: "slide2",
    },
    {
      name: "slide3",
    },
    {
      name: "slide4",
    },
    {
      name: "slide1",
    },
    {
      name: "slide2",
    },
    {
      name: "slide3",
    },
    {
      name: "slide4",
    },
  ];

  return (
    <Container>
      <Title>NOSSA CULTURA</Title>
      <MainDiv>
        <Img src={"/cultureSliderFixed.svg"} width={500} height={1000} alt="" />
        <SliderDiv>
          <Swiper
            slidesPerView={3}
            initialSlide={1}
            centeredSlides={true}
            loop={true}
            modules={[FreeMode, Autoplay]}
            freeMode={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            style={{ background: "#212121" }}
          >
            {Slides.map((item, index) => (
              <SwiperSlide style={{ background: "#212121" }}>
                <SliderImg
                  src={require("../../../public/" + item.name + ".svg")}
                  width={500}
                  height={1000}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderDiv>
      </MainDiv>
    </Container>
  );
}
