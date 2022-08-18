import { FullScreenPage } from "../../components/FullScreenPage/FullScreenPage";
import { Title } from "../../components/Title/Title";
import { Content } from "./styles";

export const Study = () => {
  return (
    <FullScreenPage>
      <Content>
        <Title type="secondary" text="Estudos" />
      </Content>
    </FullScreenPage>
  );
};
