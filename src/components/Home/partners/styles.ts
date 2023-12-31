import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 100%;
  align-self: center;
`;

export const Title = styled.label`
  background-color: transparent;
  color: white;
  width: 80%;
  align-self: center;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: ${px2vw(15, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(18, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(20, 1024)};
  }
`;

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: transparent;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    padding-bottom: 40px;
  }
`;

export const Fixed = styled(Image)`
  background-color: transparent;
  width: 40%;
  height: 15vh;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 25%;
    height: 15vh;
  }

  @media (min-width: 1024px) {
    width: 30%;
    height: 30vh;
    margin-top: 10px;
  }
`;

export const SliderDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;
  align-self: center;
  padding-bottom: 40px;
`;

export const SliderImg = styled(Image)`
  background-color: transparent;
  width: 90%;
  height: auto;
`;
