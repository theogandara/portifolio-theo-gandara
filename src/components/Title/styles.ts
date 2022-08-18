import styled from "styled-components";
import { stylesDefault } from "../../ui/styles.constants";

interface ITextStyled{
    type?: string
}

export const TextStyled = styled.h2<ITextStyled>`
    font-size: 96px;
    font-weight: 700;
    color: ${props => props.type === "primary" ? stylesDefault.primary : stylesDefault.secondary };
    transition: all 0.4s;

   
`