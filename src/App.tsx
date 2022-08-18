import { Hero } from "./templates/Hero/Hero";
import { AboutMe } from "./templates/AboutMe/AboutMe";
import { SkillsExperience } from "./templates/SkillsExperience/SkillsExperience";
import { Projects } from "./templates/Projects/Projects";
import { Study } from "./templates/Study/Study";

const App = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <SkillsExperience />
      <Projects />
      <Study />
    </>
  );
};

export default App;
