import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () => {
  return (
    <Section id='about'>
      <SectionDivider/>
      <SectionTitle main>
        About Me
        </SectionTitle>
        <SectionText>
          Talk a bit about me
        </SectionText>
      </Section>
  );
};

export default About;
