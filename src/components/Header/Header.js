import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container id='#top'>
    {/* <Div1>
      <Link href = '#'>
        <a style={ {display: 'flex', alignItems: 'center', color: 'white' , marginBottom:'1rem'}}>
          <DiCssdeck size= '3rem'/>
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1> */}
    {/* <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>
            Projects
            </NavLink>
         </Link>
      </li>
      <li>
        <Link href='#technologies'>
          <NavLink>
          Technologies
            </NavLink>
         </Link>
      </li>
      <li>
        <Link href='#footer'>
          <NavLink>
            Contact
            </NavLink>
         </Link>
      </li>
    </Div2> */}
    <Div3>
      {/* <SocialIcons href='https://www.linkedin.com/in/youssefmagdyy/'>
        <AiFillLinkedin size= '3rem'/>
      </SocialIcons> */}
    
      <Link href='#footer'>
          <NavLink>
            Contact
            </NavLink>
         </Link>

    </Div3>
    </Container>
);

export default Header;
