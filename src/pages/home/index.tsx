import { Button } from "react-bootstrap";
import { Container } from "./styles";
import { HeaderComponent } from "@/components/header";
import Theme from "@/styles/themes";
import { BannerComponent } from "@/components/banner";
import { FillFirst } from "@/components/fill/first";
import { InsideComponent } from "@/components/inside";
import Image from "next/image";
import { AboutUsComponent } from "@/components/aboutus";
import { CultureComponent } from "@/components/culture";
import { FillSecond } from "@/components/fill/second";
import { PortfolioComponent } from "@/components/portfolio";
import { PartnersComponent } from "@/components/partners";
import { FooterComponent } from "@/components/footer";

export default function Home() {
  return (
    <Container>
      <HeaderComponent />
      <BannerComponent />
      <FillFirst />
      <InsideComponent />
      <Image
        src={"/logo.svg"}
        width={1500}
        height={1000}
        alt=""
        style={{
          background: "transparent",
          width: "50%",
          height: "auto",
          alignSelf: "center",
          margin: 10,
        }}
      />
      <AboutUsComponent />
      <CultureComponent />
      <FillSecond />
      <PortfolioComponent />
      <Image
        src={"/logo.svg"}
        width={1500}
        height={1000}
        alt=""
        style={{
          background: "transparent",
          width: "50%",
          height: "auto",
          alignSelf: "center",
          margin: 10,
        }}
      />
      <PartnersComponent />
      <FooterComponent />
    </Container>
  );
}
