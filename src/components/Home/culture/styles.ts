import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 90%;
  align-self: center;
  margin-bottom: 20px;
`;

export const Title = styled.label`
  color: white;
  background-color: transparent;
  padding-bottom: 10px;
  font-size: ${px2vw(20, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(25, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(25, 1024)};
  }
`;

export const Img = styled(Image)`
  background-color: transparent;
  width: 45%;
  height: auto;

  @media (min-width: 1024px) {
    width: 20%;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: transparent;
  justify-content: space-between;
`;

export const SliderDiv = styled.div`
  display: flex;
  width: 50%;
  background-color: red;

  @media (min-width: 1024px) {
    width: 75%;
  }
`;

export const SliderImg = styled(Image)`
  background-color: transparent;
  width: 90%;
  height: auto;

  @media (min-width: 1024px) {
    width: 80%;
  }
`;
