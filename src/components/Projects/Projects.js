import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../data/data';

const Projects = () => (
  <div>
    <Section id='projects'>
      <SectionDivider/>
      <SectionTitle main>
        Projects
        </SectionTitle>
        <GridContainer>
          {projects.map((project) =>(
            <BlogCard key ={project.id}>
              <Img src={project.image}/>
              <TitleContent>
                 <HeaderThree title>
                   {project.title}
                 </HeaderThree>
                 <Hr/>
              </TitleContent>
              <CardInfo>
                {project.description}
              </CardInfo>
              <div>
                <br/>
                <TitleContent>
                Used technologies:
                </TitleContent>
                <TagList>
                  {(project.tags).map((tag,i)=>(<Tag key={i}>
                    {tag}
                  </Tag>))}
                </TagList>
              </div>
              <UtilityList>
              {project.visit && <ExternalLinks href={project.visit}>Visit</ExternalLinks>}
                <ExternalLinks href={project.link}>Git Repo</ExternalLinks>
              </UtilityList>
            </BlogCard>
          ))}
        </GridContainer>
    </Section>
    <br />
  </div>
);

export default Projects;