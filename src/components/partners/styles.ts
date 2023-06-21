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
`;

export const Images = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  justify-content: space-evenly;
  padding-bottom: 40px;
`;

export const Fixed = styled(Image)`
  background-color: transparent;
  width: 50%;
  height: 35vh;
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
  width: 15vw;
  height: auto;
`;
