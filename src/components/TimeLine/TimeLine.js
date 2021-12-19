import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm Andrés Arévalo, I'm from Venezuela, passionate about computing and
        web design. I am currently studying systems engineering at UNEFA.
      </SectionText>
    </Section>
  );
};

export default Timeline;
