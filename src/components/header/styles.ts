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
  width: 20vw;
  height: auto;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 22vw;
  background-color: transparent;
  align-items: center;
  justify-content: space-between;
`;

export const Button1 = styled(Button)`
  width: 10vw;
  height: 6vh;
  font-size: ${px2vw(10, 1024)};
  color: white;
`;

export const Button2 = styled(Button1)`
  color: black;
`;

export const NavBar = styled(Navbar)`
  display: flex;
  height: 5vh;
  background-color: red;
`;

export const NavContainer = styled(Container)`
  display: flex;
  height: 5vh;
  background-color: transparent;
`;

export const NavFirst = styled(Nav)`
  align-items: center;
  height: 5vh;
  background-color: transparent;
  margin-left: -5vw;
`;

export const NavSecond = styled(Nav)`
  align-items: center;
  height: 5vh;
  background-color: transparent;
  margin-right: -5vw;
`;

export const Navlink = styled(NavLink)`
  color: ${({ theme }) => theme.color.secondary_100};
  font-weight: 700;
`;
