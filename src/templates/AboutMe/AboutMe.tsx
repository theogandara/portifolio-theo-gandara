import { FullScreenPage } from "../../components/FullScreenPage/FullScreenPage";
import { Title } from "../../components/Title/Title";
import { Content } from "./styles";

export const AboutMe = () => {
  return (
    <FullScreenPage type="secondary">
      <Content>
        <Title type="primary" text="Sobre mim" />
      </Content>
    </FullScreenPage>
  );
};
