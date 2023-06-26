import { A, Container, Copyright, Li, Logo, PolTerms } from "./styles";

export function FooterComponent() {
    return(
        <Container>
            <PolTerms>
                <Li>
                    {/* <A href="google.com" target="blank" rel="noreferrer"> */}
                    POLÍTICA DE PRIVACIDADE
                    {/* </A> */}
                </Li>
                <Li>
                    TERMOS E CONDIÇÕES
                </Li>
            </PolTerms>
            <Copyright className="bold">COPYRIGHTS<br />EXECUTIVOS NEGÓCIOS DIGITAILS LTDA 2023</Copyright>
            <Logo src={"/logoDark.svg"} width={1000} height={500} alt="" />
        </Container>
    )
}