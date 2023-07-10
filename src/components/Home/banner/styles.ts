import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding-top: 30%;
  padding-bottom: 5%;

  @media (min-width: 768px) {
    padding-top: 10%;
    padding-bottom: 3%;
  }
`;

export const Banner = styled(Image)`
  background-color: transparent;
  width: 90%;
  height: auto;
  align-self: center;
  border-radius: 20px;
  border: 0;
`;
