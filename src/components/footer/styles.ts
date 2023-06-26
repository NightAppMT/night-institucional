import px2vw from "@/utils/size";
import Image from "next/image";
import { styled } from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
background-color:#FFFF44;
align-items: center;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 20px;
padding-right: 20px;
justify-content: space-between;
`

export const Logo = styled(Image)`
background-color: transparent;
width: 20%;
height: auto;
`

export const PolTerms = styled.div`
background-color: transparent;
`

export const Copyright = styled.label`
text-align:center;
background-color: transparent;
`

export const Li = styled.li`
background-color: transparent;
font-size: ${px2vw(10, 320)};
padding: 2px;

@media (min-width: 768px) {
    font-size: ${px2vw(10, 768)};
}

@media (min-width: 1024px) {
    font-size: ${px2vw(10, 1024)};
}
`

export const A = styled.a`
`