import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import {
  Button1,
  Button2,
  Buttons,
  HeaderContainer,
  Logo,
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
      <Navbar expand={"xl"} bg={"primary"}>
        <Container
          fluid
          style={{
            display: "flex",
            background: "transparent",
            height: "2vh",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Navbar.Toggle
            style={{
              scale: "50%",
              transform: "translate(-70%, -70%)",
            }}
          />
          <Navbar.Offcanvas
            placement="end"
            style={{
              width: "70%",
              background: "#ffff44",
              border: 0,
            }}
          >
            <Offcanvas.Header closeButton style={{ background: "#212121" }} />
            <Offcanvas.Body
              style={{
                background: "transparent",
                paddingLeft: "1vw",
                paddingRight: "1vw",
              }}
            >
              <Nav
                className="flex-grow-1 justify-content-start"
                style={{
                  background: "transparent",
                  alignItems: "center",
                  color: "#212121",
                  fontWeight: 700,
                }}
              >
                <Nav.Link>Sobre Nós</Nav.Link>
                <Nav.Link>Para Você</Nav.Link>
                <Nav.Link>Para Empresas</Nav.Link>
                <Nav.Link>Portfólio</Nav.Link>
                <Nav.Link>Eventos</Nav.Link>
              </Nav>
              <Nav
                className="flex-grow-1 justify-content-end"
                style={{
                  background: "transparent",
                  alignItems: "center",
                  color: "#212121",
                  fontWeight: 700,
                }}
              >
                <Nav.Link>Parcerias</Nav.Link>
                <Nav.Link>Instagram</Nav.Link>
                <Nav.Link>YouTube</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </MainHeaderContainer>
  );
}
