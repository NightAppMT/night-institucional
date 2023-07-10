import {
  Container,
  Fixed,
  Images,
  SliderDiv,
  SliderImg,
  Title,
} from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import { useEffect, useState } from "react";

export function PartnersComponent() {
  const Slides = [
    {
      name: "truelifeFixed",
    },
    {
      name: "centelhaLogo",
    },
    {
      name: "cloudflareLogo",
    },
    {
      name: "mongoLogo",
    },
    {
      name: "asaasLogo",
    },
    {
      name: "siga",
    },
    {
      name: "aws",
    },
    {
      name: "neoads",
    },
    {
      name: "truelifeFixed",
    },
    {
      name: "centelhaLogo",
    },
    {
      name: "cloudflareLogo",
    },
    {
      name: "mongoLogo",
    },
    {
      name: "asaasLogo",
    },
    {
      name: "siga",
    },
    {
      name: "aws",
    },
    {
      name: "neoads",
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
    <Container id="partners" className="bold">
      <Title>EMPRESAS QUE NOS APOIAM A TRABALHAR MAIS E MELHOR</Title>
      <Images>
        <Fixed src={"/amazonik.svg"} width={1000} height={500} alt="" />
        <Fixed src={"/prospere.svg"} width={1000} height={500} alt="" />
        <Fixed src={"/safra.svg"} width={1000} height={500} alt="" />
      </Images>
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
          style={{ background: "#212121" }}
        >
          {Slides.map((item, index) => (
            <SwiperSlide style={{ background: "#212121" }}>
              <SliderImg
                src={require("../../../../public/" + item.name + ".svg")}
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
