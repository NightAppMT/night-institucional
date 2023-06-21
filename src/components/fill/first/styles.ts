import Image from "next/image";
import { styled } from "styled-components";
import banner from "../../../../public/FillFirst.svg";

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.primary_100};
  margin-bottom: 20px;
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
`;

export const Text = styled.text`
  position: absolute;
  background-color: transparent;
  color: white;
  z-index: 2;
`;

export const Img = styled(Image)`
  background-color: transparent;
  width: 100%;
  height: auto;
`;

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 50%;
  justify-content: space-evenly;
`;

export const NamePhone = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  width: 100%;
  justify-content: space-evenly;
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
  padding-left: 10vw;
  padding-right: 10vw;
`;

export const Form = styled.input`
  background-color: black;
  color: ${({ theme }) => theme.color.primary_100};
  border: 0;
  border-radius: 5px;
  &::placeholder {
    color: ${({ theme }) => theme.color.primary_100};
  }
  width: 20%;
`;

export const Label = styled.label`
  background-color: transparent;
  color: black;
`;
