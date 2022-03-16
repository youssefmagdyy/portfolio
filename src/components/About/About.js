import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () => {
  return (
    <Section  nopadding id='about'>
      <SectionDivider/>
      <SectionTitle main>
        About Me
        </SectionTitle>
        <SectionText>
          Hi! My name is Youssef Magdy, I'm a Computer Science & Engineering senior student at the German University in Cairo.
          I'm passionate about creating quality beautiful websites and when I'm not busy with university I'm self studying to become a Full Stack Developer.
          In my free time I'm usually rock climbing or at home gaming or watching movies.
        </SectionText>
        <SectionText>
          I'm so excited to work with you and your team!
        </SectionText>
      </Section>
  );
};

export default About;
