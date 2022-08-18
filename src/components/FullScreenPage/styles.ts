import styled from "styled-components";
import { stylesDefault } from "../../ui/styles.constants";

interface IBackgroundStyled{
    type?: string
}

export const BackgroundStyled = styled.div<IBackgroundStyled>`
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    background-color: ${props => props.type === "secondary" ? stylesDefault.secondary : stylesDefault.primary };
`