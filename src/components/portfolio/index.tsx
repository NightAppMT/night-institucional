import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Logo, SliderDiv, SliderImg, Title } from "./styles";

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
    // {
    //   name: "trabalho",
    // },
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
  ];

  return (
    <Container>
      <Logo src={"/logo.svg"} width={1000} height={500} alt="" />
      <Title>UM POUCO DA NOSSA EXECUÇÃO</Title>
      <SliderDiv>
        <Swiper
          slidesPerView={5}
          initialSlide={1}
          centeredSlides={true}
          spaceBetween={0}
          loop={true}
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
