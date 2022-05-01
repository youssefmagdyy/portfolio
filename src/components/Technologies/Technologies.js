import React from 'react';
import { DiFirebase, DiReact, DiZend, DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='technologies'>
    <SectionDivider/>
    <SectionTitle main >Technologies</SectionTitle>
    {/* <SectionText>
      I have worked with many technologies in the web development world.
    </SectionText> */}
    <List>
      <ListItem>
        <DiReact size='5rem'/>
        <br />
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
         
            React.js <br />
            Redux Toolkit <br />
            Javascript <br />
            HTML<br />
            CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
          <DiFirebase size="5rem" />
          <br />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
           MongoDB Atlas <br />
           SQL Databases
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
      <ListItem>
        <DiCode size='5rem'/>
        <br />
        <ListContainer>
          <ListTitle>
            Other
          </ListTitle>
          <ListParagraph>
       
          Git version control <br />
          Java <br />
          SQL <br />
            Python
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>

);

export default Technologies;
