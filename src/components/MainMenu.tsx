'use client';
import idSections from '@/constants/id-section-page';
import { TDataToastMessages } from '@/types';
import { scrollToSection } from '@/utils/helper';
import { a, useTrail } from '@react-spring/web';
import { Navbar } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleThemeMode from './ToggleThemeMode';
import ToastCV from './UI/ToastCV';
import { downloadCVPDF } from '@/helpers';

const menus = [
   {
      path: idSections.overview,
      title: "Overview"
   },
   {
      path: idSections.whatIsDo,
      title: "What i do"
   },
   {
      path: idSections.education,
      title: "Education"
   },
   {
      path: idSections.experience,
      title: "Experience"
   },
   {
      path: idSections.skill,
      title: "Skill"
   },
   {
      path: idSections.portfolio,
      title: "Portfolio"
   },
   {
      path: idSections.contact,
      title: "Contact"
   },

]

const Trail: React.FC<{ children?: any }> = ({ children }) => {
   const items = React.Children.toArray(children)
   const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: 1,
      x: 0,
      scale: 1,
      from: { opacity: 0, x: 100, scale: 0 },
      delay: 400
   })
   return (
      <div className='flex flex-col lg:flex-row items-center justify-start'>
         {trail.map(({ ...style }, index) => (
            <a.div key={index} style={style} className={'w-full lg:w-auto'}>
               {items[index]}
            </a.div>
         ))}
      </div>
   )
}


export default function MainMenu() {
   const [toast, setToast] = useState<TDataToastMessages | null>(null);

   async function handleDownloadCV() {

      downloadCVPDF()
         .then((res) => {
            if (res)
               setToast({
                  status: 'success',
                  msg: 'Download CV success!'
               })
            else {
               setToast({
                  status: 'error',
                  msg: 'Error downloading PDF!'
               })
            }
         })

   }

   return (
      <>
         {
            toast && <ToastCV data={toast} />
         }
         <Trail>
            {
               menus.map(menu => <Navbar.Link as={Link} key={menu.path} className='border-none font-[500] md:px-4 py-2 leading-10' onClick={() => scrollToSection(menu.path)} to={`/${menu.path}`}>{menu.title}</Navbar.Link>)
            }
            <Navbar.Link as={'a'} className='border-none font-[500] md:px-4 py-2 leading-10' onClick={handleDownloadCV} >Download CV</Navbar.Link>
            <Navbar.Link className='border-none ml-0 lg:ml-3'><ToggleThemeMode /></Navbar.Link>
         </Trail >
      </>
   )
}
