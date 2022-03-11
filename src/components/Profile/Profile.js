import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './ProfileStyles';

const Profile = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Youssef Magdy
      </SectionTitle>
      <SectionText>
         Front-End Developer
      </SectionText>
    </LeftSection>

  </Section>
);

export default Profile;