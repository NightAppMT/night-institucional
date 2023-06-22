import px2vw from "@/utils/size";
import Image from "next/image";
import { Button, Navbar, Container, Nav, NavLink } from "react-bootstrap";
import { styled } from "styled-components";

export const MainHeaderContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.header`
  background-color: #0e0e0e;
  display: flex;
  height: 10vh;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  justify-content: space-between;
`;

export const Logo = styled(Image)`
  background-color: transparent;
  width: 45%;
  height: auto;

  @media (min-width: 1024px) {
    width: 20%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1024px) {
    width: 20%;
  }
`;

export const Button1 = styled(Button)`
  width: 45%;
  height: 6vh;
  font-size: ${px2vw(10, 320)};
  color: white;

  @media (min-width: 768px) {
    font-size: ${px2vw(10, 768)};
  }

  @media (min-width: 1024px) {
    font-size: ${px2vw(10, 1024)};
  }
`;

export const Button2 = styled(Button1)`
  color: black;
`;
