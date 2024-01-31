'use client';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import ToggleThemeMode from './ToggleThemeMode';
import idSections from '@/constants/id-section-page';
import { downloadCVPDF } from '@/services/firebase-storage';
import { TDataToastMessages } from '@/types';
import { useState } from 'react';
import ToastCV from './UI/ToastCV';
import { scrollToSection } from '@/utils/function-helper';

const menus = [
   {
      path: idSections.overview,
      title: "Overview"
   },
   {
      path: idSections.whatIsDo,
      title: "What is do"
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


export default function MainMenu() {
   const [toast, setToast] = useState<TDataToastMessages | null>(null);
   async function handleDownloadCV() {
      console.log('rest', await downloadCVPDF());
      setToast({
         status: 'success',
         msg: 'Download CV success!'
      })
   }

   return (
      <>
         {
            toast && <ToastCV data={toast} onCloseToast={setToast} />
         }
         {
            menus.map(menu => <Navbar.Link as={Link} key={menu.path} className='font-[500] md:px-4 py-2 leading-10' onClick={() => scrollToSection(menu.path)} to={menu.path}>{menu.title}</Navbar.Link>)
         }
         <Navbar.Link as={'a'} className='font-[500] md:px-4 py-2 leading-10' onClick={handleDownloadCV} >Download CV</Navbar.Link>
         <Navbar.Link className='ml-0 lg:ml-3'><ToggleThemeMode /></Navbar.Link>
      </>
   )
}
