import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './ProfileStyles';
import Button from '../../styles/GlobalComponents/Button';

const Profile = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Hello, <br />
          I'm Youssef Magdy
      </SectionTitle>
      <SectionText>
         Web Developer/ CS & Engineering Undergrad Student
      </SectionText>
      <Button>
        <a style={{color:'white'}}
        href="./resume.pdf"
        download
      >
        My Resume
      </a>
      </Button>
    </LeftSection>

  </Section>
);

export default Profile;