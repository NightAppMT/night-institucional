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
`;

export const SliderDiv = styled.div`
  display: flex;
  width: 90%;
  background-color: transparent;
  align-self: center;
`;

export const SliderImg = styled(Image)`
  background-color: transparent;
  width: 15vw;
  height: auto;
`;
