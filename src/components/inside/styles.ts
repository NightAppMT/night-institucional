import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.primary_100};
  width: 100%;
  align-self: center;
  padding: 10px;
`;

export const Title = styled.label`
  background-color: transparent;
  color: black;
  padding-bottom: 10px;
  font-size: ${px2vw(20, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(25, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(25, 1024)};
  }
`;

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  align-self: center;
  background-color: transparent;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Venture = styled(Image)`
  background-color: transparent;
  width: 100%;
  height: auto;
`;

export const Money = styled(Image)`
  background-color: transparent;
  width: 48%;
  height: auto;
  margin-top: 2vh;

  @media (min-width: 768px) {
    width: 40%;
    margin-top: 5vh;
  }
`;

export const Startup = styled(Image)`
  background-color: transparent;
  width: 48%;
  height: auto;
  margin-top: 2vh;

  @media (min-width: 768px) {
    width: 40%;
    margin-top: 5vh;
  }
`;
