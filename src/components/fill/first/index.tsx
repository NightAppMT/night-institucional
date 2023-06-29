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
import { maskPhone } from "@/utils/masks";
import { useState } from "react";

export function FillFirst() {
  const [formData, setFormData] = useState({
    name: "",
    mobilePhone: "",
    email: ""
  })
  console.log(formData)
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
            <Form placeholder="Nome:" className="bold" onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.name} />
          </Name>
          <Phone>
            <Label>TELEFONE</Label>
            <Form placeholder="Telefone:" className="bold" maxLength={14} onChange={(e) => setFormData({...formData, mobilePhone: maskPhone(e.target.value)})} value={formData.mobilePhone}/>
          </Phone>
        </NamePhone>
        <Email>
          <Label>SEU MELHOR EMAIL</Label>
          <Form placeholder="Email:" className="bold" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
        </Email>
      </Forms>
    </Container>
  );
}
