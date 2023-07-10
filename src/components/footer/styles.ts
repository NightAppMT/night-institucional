import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffff44;
  align-items: center;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Logo = styled(Image)`
  background-color: transparent;
  width: 60%;
  height: auto;

  @media (min-width: 768px) {
    width: 30%;
  }

  @media (min-width: 1024px) {
    width: 20%;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;
  margin-top: 1%;
`;

export const PolTerms = styled.div`
  background-color: transparent;
`;

export const Copyright = styled.label`
  text-align: center;
  background-color: transparent;
  font-size: ${px2vw(10, 320)};
  width: 40%;

  @media (min-width: 768px) {
    font-size: ${px2vw(10, 768)};
  }
`;

export const Li = styled.li`
  background-color: transparent;
  font-size: ${px2vw(10, 320)};
  padding: 2px;

  @media (min-width: 768px) {
    font-size: ${px2vw(10, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(10, 1024)};
  }
`;

export const A = styled.a``;
