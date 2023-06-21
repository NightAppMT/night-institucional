import { Container, Nav } from "react-bootstrap";
import {
  Button1,
  Button2,
  Buttons,
  HeaderContainer,
  Logo,
  NavBar,
  NavContainer,
  Navlink,
  NavFirst,
  NavSecond,
  MainHeaderContainer,
} from "./styles";

export function HeaderComponent() {
  return (
    <MainHeaderContainer>
      <HeaderContainer>
        <Logo src={"/logo.svg"} width={400} height={200} alt="" />
        <Buttons>
          <Button1 variant={"outline-primary"}>SOU ALUNO</Button1>
          <Button2 variant={"primary"}>SOU CLIENTE</Button2>
        </Buttons>
      </HeaderContainer>
      <NavBar bg={"primary"}>
        <NavContainer>
          <NavFirst>
            <Navlink style={{ fontSize: 15 }}>Sobre Nós</Navlink>
            <Navlink style={{ fontSize: 15 }}>Para Você</Navlink>
            <Navlink style={{ fontSize: 15 }}>Para Empresas</Navlink>
            <Navlink style={{ fontSize: 15 }}>Portfólio</Navlink>
            <Navlink style={{ fontSize: 15 }}>Eventos</Navlink>
          </NavFirst>
          <NavSecond>
            <Navlink style={{ fontSize: 15 }}>Parcerias</Navlink>
            <Navlink style={{ fontSize: 15 }}>Instagram</Navlink>
            <Navlink style={{ fontSize: 15 }}>YouTube</Navlink>
          </NavSecond>
        </NavContainer>
      </NavBar>
    </MainHeaderContainer>
  );
}
