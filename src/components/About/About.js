import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () => {
  return (
    <Section   id='about'>
      <SectionDivider/>
      <SectionTitle main>
        About Me
        </SectionTitle>
        <SectionText>
          Hi! My name is Youssef Magdy, I'm a Computer Science & Engineering senior student at the German University in Cairo. <br />
          I'm passionate about creating web apps and I'm self studying to become a Full Stack Developer.
          {/* In my free time I'm usually rock climbing or at home gaming or watching movies. */}
        </SectionText>
      </Section>
  );
};

export default About;
