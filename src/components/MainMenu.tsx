'use client';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import ToggleThemeMode from './ToggleThemeMode';

const menus = [
   {
      path: '/',
      title: "About"
   },
   {
      path: 'resume',
      title: "Resume"
   },
   {
      path: 'contact',
      title: "Contact"
   },
   {
      path: 'blog-dev',
      title: "Blog Dev"
   },
]

export default function MainMenu() {
   return (
      <>
         {
            // menus.map(menu => <NavLinkStyle key={menu.path} className='font-[500] px-4 py-2' to={menu.path}>{menu.title}</NavLinkStyle>)
            menus.map(menu => <Navbar.Link as={Link} key={menu.path} className='font-[500] md:px-4 py-2 leading-10' to={menu.path}>{menu.title}</Navbar.Link>)
         }
         <Navbar.Link href="#"><ToggleThemeMode /></Navbar.Link>
      </>
   )
}
