import { ReactNode } from "react";
import { BackgroundStyled } from "./styles";

interface IFullScreenPage {
  children: ReactNode;
  type?: "primary" | "secondary";
}

export const FullScreenPage = ({ children, type }: IFullScreenPage) => {
  return <BackgroundStyled type={type}>{children}</BackgroundStyled>;
};
