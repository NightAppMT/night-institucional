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
import { useEffect, useState } from "react";

export default function Home() {
  const [width, setWidth] = useState(100);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <Container>
      {/* <HeaderComponent />
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
      <FooterComponent /> */}
      <div style={{ background: "red" }}>
        {width < 768 ? (
          <>
            <Image
              src="/maintenance1.svg"
              fill
              alt=""
              style={{ objectFit: "contain", background: "#212121" }}
            />
          </>
        ) : (
          <>
            <Image
              src="/maintenance.svg"
              fill
              alt=""
              style={{ objectFit: "contain", background: "#212121" }}
            />
          </>
        )}
      </div>
    </Container>
  );
}
