import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './ProfileStyles';

const Profile = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Hello, <br />
          I'm Youssef Magdy
      </SectionTitle>
      <SectionText>
         Web Developer
      </SectionText>
    </LeftSection>

  </Section>
);

export default Profile;