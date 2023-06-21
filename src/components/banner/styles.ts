import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding-top: 0.5%;
  padding-bottom: 5%;
`;

export const Banner = styled(Image)`
  background-color: transparent;
  width: 95%;
  height: auto;
  align-self: center;
`;
