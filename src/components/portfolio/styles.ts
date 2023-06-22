import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffff44;
  padding-bottom: 40px;
`;

export const Logo = styled(Image)`
  background-color: transparent;
  width: 50%;
  height: auto;
  align-self: center;
`;

export const Title = styled.label`
  background-color: transparent;
  color: black;
  width: 90%;
  align-self: center;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 700;
  font-size: ${px2vw(15, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(18, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(20, 1024)};
  }
`;

export const SliderDiv = styled.div`
  display: flex;
  width: 90%;
  background-color: transparent;
  align-self: center;
`;

export const SliderImg = styled(Image)`
  background-color: transparent;
  width: 85%;
  height: auto;

  @media (min-width: 768px) {
    width: 90%;
  }
`;
