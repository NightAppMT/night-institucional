import {
  AboutUsImage,
  Container,
  Description,
  Details,
  DetailsImg,
  Single,
  Strong,
} from "./styles";

export function AboutUsComponent() {
  return (
    <Container>
      <AboutUsImage src={"/aboutus.svg"} width={500} height={1000} alt="" />
      <Details>
        <Single>
          <Description>
            CRIAÇÃO DE <Strong>STARTUPS</Strong>
            <br />
            OU <Strong>EMPRESAS DIGITAIS</Strong>
          </Description>
          <DetailsImg src={"/details1.svg"} width={1000} height={500} alt="" />
        </Single>
        <Single>
          <Description>
            DESENVOLVIMENTO DE
            <br />
            <Strong>APLICATIVOS E SITES</Strong>
          </Description>
          <DetailsImg src={"/details2.svg"} width={1000} height={500} alt="" />
        </Single>
        <Single>
          <Description>
            CONSULTORIA
            <br />
            <Strong style={{ display: "flex", textIndent: "2vw" }}>
              TECNOLÓGICA
            </Strong>
          </Description>
          <DetailsImg src={"/details3.svg"} width={1000} height={500} alt="" />
        </Single>
      </Details>
    </Container>
  );
}
