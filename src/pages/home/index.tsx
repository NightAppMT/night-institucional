import { FooterComponent } from "@/components/Global/footer";
import { HeaderComponent } from "@/components/Global/header";
import { AboutUsComponent } from "@/components/Home/aboutus";
import { BannerComponent } from "@/components/Home/banner";
import { CultureComponent } from "@/components/Home/culture";
import { FillFirst } from "@/components/Home/fill/first";
import { FillSecond } from "@/components/Home/fill/second";
import { InsideComponent } from "@/components/Home/inside";
import { PartnersComponent } from "@/components/Home/partners";
import { PortfolioComponent } from "@/components/Home/portfolio";
import Image from "next/image";
import { Container } from "./styles";

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
