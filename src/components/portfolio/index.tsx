import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Logo, SliderDiv, SliderImg, Title } from "./styles";
import { FreeMode, Autoplay } from "swiper";
import { useEffect, useState } from "react";

export function PortfolioComponent() {
  const Slides = [
    {
      name: "night",
    },
    {
      name: "juridia",
    },
    {
      name: "pagagil",
    },
    {
      name: "truelife",
    },
    {
      name: "trabalho",
    },
    {
      name: "night",
    },
    {
      name: "juridia",
    },
    {
      name: "pagagil",
    },
    {
      name: "truelife",
    },
    {
      name: "trabalho",
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
    <Container>
      <Logo src={"/logoDark.svg"} width={1000} height={500} alt="" />
      <Title>UM POUCO DA NOSSA EXECUÇÃO</Title>
      <SliderDiv>
        <Swiper
          slidesPerView={width >= 768 ? 5 : 4}
          initialSlide={1}
          centeredSlides={true}
          loop={true}
          modules={[FreeMode, Autoplay]}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          style={{ background: "#FFFF44" }}
        >
          {Slides.map((item, index) => (
            <SwiperSlide style={{ background: "#FFFF44" }}>
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
    </Container>
  );
}
