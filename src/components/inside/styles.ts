import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.primary_100};
  width: 100%;
  align-self: center;
`;

export const Title = styled.label`
  background-color: transparent;
  color: black;
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
  width: 40%;
  height: auto;
  margin-top: 5vh;
`;

export const Startup = styled(Image)`
  background-color: transparent;
  width: 40%;
  height: auto;
  margin-top: 5vh;
`;
