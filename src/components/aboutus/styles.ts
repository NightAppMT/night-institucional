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
  width: 30%;
  height: auto;
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
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.label`
  background-color: transparent;
`;

export const DetailsImg = styled(Image)`
  background-color: transparent;
  width: 20%;
  height: auto;
`;

export const Strong = styled.strong`
  background-color: transparent;
`;
