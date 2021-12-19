import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Andres Arevalo, Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>Frontend & Backend Web Design</SectionText>
      <Button onClick={() => (window.location = "#about")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
