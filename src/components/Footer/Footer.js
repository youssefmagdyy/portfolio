import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import {NavLink, SocialIcons} from '../Header/HeaderStyles';

const Footer = () => {
  return (
    <FooterWrapper id='footer'>
      <LinkList>
      <LinkColumn>
      <LinkTitle>
      Email
      </LinkTitle>
      <LinkItem href='mailto:youssefmagdy1910@gmail.com'>
        youssefmagdy1910@gmail.com
      </LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
      <CompanyContainer>
      <Link href='#top'>
          <NavLink>
          Scroll to Top
            </NavLink>
         </Link>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://www.linkedin.com/in/youssefmagdyy/'>
        <AiFillLinkedin size= '3rem'/>
      </SocialIcons>
      <SocialIcons href='https://github.com/youssefmagdyy/'>
        <AiFillGithub size= '3rem'/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
      
    </FooterWrapper>
  );
};

export default Footer;
