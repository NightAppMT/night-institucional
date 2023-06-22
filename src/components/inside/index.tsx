import { Container, Images, Money, Startup, Title, Venture } from "./styles";

export function InsideComponent() {
  return (
    <Container className="bold">
      <Images>
        <Title>FIQUE POR DENTRO</Title>
        <Venture src={"/venture.svg"} width={1500} height={1000} alt="" />
        <Money src={"/money.svg"} width={1000} height={500} alt="" />
        <Startup src={"/startup.svg"} width={1000} height={500} alt="" />
      </Images>
    </Container>
  );
}
