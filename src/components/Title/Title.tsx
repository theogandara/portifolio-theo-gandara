import { TextStyled } from "./styles";

interface ITitle {
  text: string;
  type?: "primary" | "secondary";
}

export const Title = ({ text, type }: ITitle) => {
  return <TextStyled type={type}>{text}</TextStyled>;
};
