import { FullScreenPage } from "../../components/FullScreenPage/FullScreenPage";
import { Title } from "../../components/Title/Title";
import { Content } from "./styles";

export const Hero = () => {
  return (
    <FullScreenPage>
      <Content>
        <Title text="Théo Gândara" />
      </Content>
    </FullScreenPage>
  );
};
