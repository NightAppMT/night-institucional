import { Navbar, Offcanvas } from "react-bootstrap";
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
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function HeaderComponent() {
  const [open, setOpen] = useState(false);

  return (
    <MainHeaderContainer>
      <HeaderContainer>
        <Logo src={"/logo.svg"} width={400} height={200} alt="" />
        <Buttons>
          <Button1 variant={"outline-primary"}>SOU ALUNO</Button1>
          <Button2 variant={"primary"}>SOU CLIENTE</Button2>
        </Buttons>
      </HeaderContainer>
      <NavBar
        style={{ zIndex: 10 }}
        bg="primary"
        variant="primary"
        expand="xl"
        collapseOnSelect
      >
        <NavContainer fluid>
          <Navbar.Toggle
            onClick={() => setOpen(true)}
            style={{
              scale: "50%",
              transform: "translate(-50%, -50%)",
              marginTop: "-1vh",
            }}
          />
          <Navbar.Offcanvas
            style={{ height: "max-content" }}
            placement="left"
            show={open}
            onHide={() => setOpen(false)}
          >
            <Offcanvas.Body
              style={{
                display: "flex",
                justifyContent: "space-between",
                background: "transparent",
              }}
            >
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
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </NavContainer>
      </NavBar>
    </MainHeaderContainer>
  );
}
