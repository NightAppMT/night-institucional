import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.color.primary_100};
  width: 90%;
  align-self: center;
  padding: 10px;
  border-radius: 10px;
  justify-content: space-between;
  margin-bottom: 10vh;
`;

export const AboutUsImage = styled(Image)`
  background-color: transparent;
  width: 40%;
  height: auto;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const Details = styled.div`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  width: 65%;
`;

export const Single = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Description = styled.label`
  background-color: transparent;
  line-height: 1;
  font-size: ${px2vw(10, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(15, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(20, 1024)};
  }
`;

export const DetailsImg = styled(Image)`
  background-color: transparent;
  width: 70%;
  height: auto;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const Strong = styled.strong`
  background-color: transparent;
`;
