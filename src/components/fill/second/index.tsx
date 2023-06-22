import GlobalStyle from "@/styles/global";
import {
  Container,
  Email,
  Form,
  Forms,
  Img,
  Label,
  Name,
  NamePhone,
  Overlay,
  Phone,
  Text,
  Title,
} from "./styles";

export function FillSecond() {
  return (
    <>
      <Title className="bold">PRÓXIMOS EVENTOS</Title>
      <Container id="event" className="bold">
        <Overlay>
          <Text>
            SE INSCREVA AO LADO E SAIBA MAIS DOS EVENTOS PRESENCIAIS E ONLINE
          </Text>
          <Img src={"/FillSecond.svg"} width={1000} height={500} alt="" />
        </Overlay>
        <Forms>
          <NamePhone>
            <Name>
              <Label>NOME</Label>
              <Form placeholder="Nome:" />
            </Name>
            <Phone>
              <Label>TELEFONE</Label>
              <Form placeholder="Telefone:" />
            </Phone>
          </NamePhone>
          <Email>
            <Label>SEU MELHOR EMAIL</Label>
            <Form placeholder="Email:" />
          </Email>
        </Forms>
      </Container>
    </>
  );
}
