import { FullScreenPage } from "../../components/FullScreenPage/FullScreenPage";
import { Title } from "../../components/Title/Title";
import { Content } from "./styles";

export const Projects = () => {
  return (
    <FullScreenPage type="secondary">
      <Content>
        <Title type="primary" text="Meus projetos" />
      </Content>
    </FullScreenPage>
  );
};
