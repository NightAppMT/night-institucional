import { Container } from "./styles";
import { InsideComponent } from "@/components/Home/inside";
import Image from "next/image";
import { PortfolioComponent } from "@/components/Home/portfolio";
import { PartnersComponent } from "@/components/Home/partners";
import { FooterComponent } from "@/components/Global/footer";
import { HeaderComponent } from "@/components/Global/header";
import { BannerComponent } from "@/components/Home/banner";
import { FillFirst } from "@/components/Home/fill/first";
import { AboutUsComponent } from "@/components/Home/aboutus";
import { CultureComponent } from "@/components/Home/culture";
import { FillSecond } from "@/components/Home/fill/second";
import { useState } from "react";

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
