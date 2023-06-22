import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Title = styled.label`
  color: white;
  background-color: transparent;
  width: 90%;
  align-self: center;
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: ${px2vw(20, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(25, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(25, 1024)};
  }
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Text = styled.text`
  position: absolute;
  background-color: transparent;
  color: white;
  z-index: 2;
  font-size: ${px2vw(16, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(20, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(25, 1024)};
  }
`;

export const Img = styled(Image)`
  width: 100%;
  height: auto;
  background-color: transparent;
`;

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 90%;
  align-self: center;

  @media (max-width: 768px) {
    padding-bottom: 10px;
  }

  @media (min-width: 768px) {
    width: 50%;
    height: max-content;
  }
`;

export const NamePhone = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

export const Phone = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  align-self: center;

  @media (min-width: 1024px) {
    margin-top: 3%;
  }
`;

export const Form = styled.input`
  background-color: ${({ theme }) => theme.color.primary_100};
  color: black;
  border: 0;
  border-radius: 5px;
  &::placeholder {
    color: black;
  }
  width: 40vw;
  padding: 5px;

  @media (min-width: 768px) {
    width: 20vw;
  }

  @media (min-width: 1024px) {
    padding: 10px;
  }
`;

export const Label = styled.label`
  background-color: transparent;
  color: ${({ theme }) => theme.color.primary_100};
  font-size: ${px2vw(15, 320)};

  @media (min-width: 768px) {
    font-size: ${px2vw(18, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(20, 1024)};
  }
`;
