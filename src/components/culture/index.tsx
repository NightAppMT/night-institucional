import { Container, Img, MainDiv, SliderDiv, SliderImg, Title } from "./styles";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import { useEffect, useState } from "react";

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

  const [width, setWidth] = useState(100);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Container id={"aboutUs"} className="bold">
      <Title>NOSSA CULTURA</Title>
      <MainDiv>
        <Img src={"/cultureSliderFixed.svg"} width={500} height={1000} alt="" />
        <SliderDiv>
          <Swiper
            slidesPerView={width >= 1024 ? 3 : 1}
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
