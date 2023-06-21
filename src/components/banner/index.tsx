import { Banner, Container } from "./styles";

export function BannerComponent() {
  return (
    <Container>
      <Banner src={"/MainBanner.svg"} width={2000} height={1000} alt="" />
    </Container>
  );
}
