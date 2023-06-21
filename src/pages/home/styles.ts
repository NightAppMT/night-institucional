import Theme from "@/styles/themes";
import { styled } from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.secondary_100};
`;
