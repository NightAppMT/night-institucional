import {
  Container,
  Fixed,
  Images,
  SliderDiv,
  SliderImg,
  Title,
} from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

export function PartnersComponent() {
  const Slides = [
    // {
    //   name: "truelifeLogo",
    // },
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
    // {
    //   name: "truelifeLogo",
    // },
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
  ];

  return (
    <Container>
      <Title>EMPRESAS QUE NOS APOIAM A TRABALHAR MAIS E MELHOR</Title>
      <Images>
        <Fixed src={"/prospere.svg"} width={1000} height={500} alt="" />
        <Fixed src={"/safra.svg"} width={1000} height={500} alt="" />
      </Images>
      <SliderDiv>
        <Swiper
          slidesPerView={6}
          initialSlide={1}
          centeredSlides={true}
          spaceBetween={0}
          loop={true}
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
    </Container>
  );
}
