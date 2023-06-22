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
} from "./styles";

export function FillFirst() {
  return (
    <Container className="bold">
      <Overlay>
        <Text>
          QUER FALAR DIRETAMENTE CONOSCO?
          <br /> PREENCHA
        </Text>
        <Img src={"/FillFirst.svg"} width={1000} height={500} alt="" />
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
  );
}
