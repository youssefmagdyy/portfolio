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
         Web Developer/ Undergrad Student <br /> Based in Cairo, Egypt
      </SectionText>
      <Button>
        <a style={{color:'white'}}
        href="https://docs.google.com/document/d/15f4xDkfP4FfX1BnzzyJo3f3g8ZqN-opY/edit"
      >
        My Resume
      </a>
      </Button>
    </LeftSection>

  </Section>
);

export default Profile;