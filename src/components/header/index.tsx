import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import {
  A,
  Button1,
  Button2,
  Buttons,
  HeaderContainer,
  Logo,
  MainHeaderContainer,
} from "./styles";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function HeaderComponent() {
  const [width, setWidth] = useState(100);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView();
  }, []);

  const router = useRouter();
  const [open, setOpen] = useState(false);

  const main = useRef(null);
  const header = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const showAnim = gsap
        .from(".Header", {
          yPercent: -100,
          paused: true,
          duration: 0.1,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        },
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={main}>
      <MainHeaderContainer className="Header bold" ref={header}>
        <HeaderContainer>
          <Logo src={"/logo.svg"} width={400} height={200} alt="" />
          <Buttons>
            <Button1 variant={"outline-primary"}>SOU ALUNO</Button1>
            <Button2 variant={"outline-primary"}>SOU CLIENTE</Button2>
          </Buttons>
        </HeaderContainer>
        <Navbar
          expand="xl"
          bg={"primary"}
          collapseOnSelect
          style={{ display: "flex" }}
        >
          <Container
            fluid
            style={{
              display: "flex",
              background: "transparent",
              height: "2vh",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 0,
            }}
          >
            <Navbar.Brand />
            <Navbar.Toggle
              style={{
                scale: "50%",
                transform: "translate(-70%, -70%)",
                alignSelf: "end",
              }}
              onClick={() => setOpen(true)}
            />
            <Navbar.Offcanvas
              placement="end"
              style={{
                width: "70%",
                background: "#ffff44",
                border: 0,
              }}
              show={open}
              onHide={() => setOpen(false)}
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
                  className="flex-grow-1 justify-content-start bold"
                  style={{
                    background: "transparent",
                    alignItems: "center",
                    color: "#212121",
                  }}
                >
                  <Nav.Link
                    onClick={() => {
                      setOpen(false);
                      let aboutUs = document.getElementById("aboutUs");
                      aboutUs &&
                        aboutUs.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                    }}
                  >
                    Sobre Nós
                  </Nav.Link>
                  <Nav.Link onClick={() => router.push("/you")}>Para Você</Nav.Link>       
                  <Nav.Link onClick={() => router.push("/business")}>Para Empresas</Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      setOpen(false);
                      let portfolio = document.getElementById("portfolio");
                      portfolio &&
                        portfolio.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                    }}
                  >
                    Portfólio
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      setOpen(false);
                      let event = document.getElementById("event");
                      event &&
                        event.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                    }}
                  >
                    Eventos
                  </Nav.Link>
                </Nav>
                <Nav
                  className="flex-grow-1 justify-content-end bold"
                  style={{
                    background: "transparent",
                    alignItems: "center",
                    color: "#212121",
                  }}
                >
                  <Nav.Link
                    onClick={() => {
                      setOpen(false);
                      let partners = document.getElementById("partners");
                      partners &&
                        partners.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                    }}
                  >
                    Parcerias
                  </Nav.Link>
                  <Nav.Link href="https://www.instagram.com/executivosdigital/" target="blank" rel="noreferrer">
                    Instagram
                    </Nav.Link>
                  <Nav.Link href="https://www.youtube.com/channel/UCVFy7eMtp3ngA0MGoCYlAmw" target="blank" rel="noreferrer">YouTube</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </MainHeaderContainer>
    </div>
  );
}
