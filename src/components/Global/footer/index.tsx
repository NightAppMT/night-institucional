import { useEffect, useState } from "react";
import { A, Container, Copyright, Li, Logo, PolTerms, Text } from "./styles";

export function FooterComponent() {
  const [width, setWidth] = useState(100);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <Container>
      {width < 768 ? (
        <Logo src={"/logoDark.svg"} width={1000} height={500} alt="" />
      ) : (
        <></>
      )}
      <Text>
        <PolTerms>
          <Li>
            {/* <A href="google.com" target="blank" rel="noreferrer"> */}
            POLÍTICA DE PRIVACIDADE
            {/* </A> */}
          </Li>
          <Li>TERMOS E CONDIÇÕES</Li>
        </PolTerms>
        <Copyright className="bold">
          COPYRIGHTS{width >= 768 ? <br /> : <></>} EXECUTIVOS NEGÓCIOS
          DIGITAILS LTDA 2023
        </Copyright>
        {width >= 768 ? (
          <Logo src={"/logoDark.svg"} width={1000} height={500} alt="" />
        ) : (
          <></>
        )}
      </Text>
    </Container>
  );
}
