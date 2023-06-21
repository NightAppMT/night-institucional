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
`;

export const Img = styled(Image)`
  background-color: transparent;
  width: 20vw;
  height: auto;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: transparent;
`;

export const SliderDiv = styled.div`
  display: flex;
  width: 73vw;
  height: 52vh;
  background-color: red;
`;

export const SliderImg = styled(Image)`
  background-color: transparent;
  width: 20vw;
  height: auto;
`;
