import { useEffect, useState } from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Container,
  Fixed,
  Images,
  SliderDiv,
  SliderImg,
  Title,
} from "./styles";

export function PartnersComponent() {
  const Slides = [
    {
      name: "asaasLogo",
    },
    {
      name: "aws",
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
      name: "neoads",
    },
    {
      name: "siga",
    },
    {
      name: "truelifeFixed",
    },
    {
      name: "asaasLogo",
    },
    {
      name: "aws",
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
      name: "neoads",
    },
    {
      name: "siga",
    },
    {
      name: "truelifeFixed",
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
        <Fixed src={"/Partners/amazonik.svg"} width={500} height={250} alt="" />
        <Fixed src={"/Partners/prospere.svg"} width={500} height={250} alt="" />
        <Fixed src={"/Partners/safra.svg"} width={500} height={250} alt="" />
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
                src={require("../../../../public/Partners/" +
                  item.name +
                  ".svg")}
                width={250}
                height={200}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderDiv>
    </Container>
  );
}
