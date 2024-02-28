import avatar from '@/assets/avatar.png?url';
import ToastCV from '@/components/UI/ToastCV';
import idSections from '@/constants/id-section-page';
import { downloadCVPDF, moveMouseToMoveImage } from '@/helpers';
import { TDataToastMessages } from '@/types';
import { scrollToSection } from '@/utils/helper';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';



export default function Overview() {
   const [toast, setToast] = useState<TDataToastMessages | null>(null);

   function handleDownloadCV() {

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

   const ImgStyle = styled('div')
      .withConfig({ shouldForwardProp: (props) => props !== 'url' })
      .attrs<{ url: string }>({})`
      background-image: url(${({ url }) => url});
      background-position: center;
      background-size: 108%;`

   useEffect(() => {

      document.body.onmousemove = (e: MouseEvent) => moveMouseToMoveImage(e, 'avatar-main-banner')

      return () => {
         document.body.onmousemove = null;
         document.body.onmouseout = null;
      }
   }, [])

   return (
      <>
         <ToastCV data={toast} />
         <div className='basis-[43%] p-4 w-full max-w-[450px] md:max-w-[550px] m-auto'>
            <div className='rounded-full p-3 shadow-cv-xl w-full relative dark:bg-zinc-700' style={{ paddingBottom: 'calc(100% - 12px)' }}>
               <ImgStyle id="avatar-main-banner" className='rounded-full absolute left-4 right-4 top-4 bottom-4 ' url={avatar} />
            </div>
         </div>

         <div className='flex flex-1 flex-col justify-center md:pl-10'>
            <p className='text-gray-400'>Frontend Developer</p>
            <p className='text-4xl md:text-[2.9rem] text-gray-700 dark:text-gray-100 font-semibold pt-1 pb-5'>Nguyen Minh Luan</p>
            <p className='text-[0.85rem] text-gray-600 dark:text-gray-300 leading-6'>I am a Front-End Developer and Graphic Designer. With my passion and experience, I always strive to take care of and perfect my products with the highest quality. With over 4 years of Graphic Design experience, 1 year as a marketing team leader, and more than 1.5 years as a Front-End Developer, I have successfully implemented and developed a variety of products, including designs for marketing and branding, website UI/UX design, and Front-End construction for company websites and freelance clients.</p>
            <div className='block mt-7'>
               <Button
                  onClick={handleDownloadCV}
                  className='
               transition duration-150 ease-in-out inline border-2 mr-5 
               border-cv-700 shadow-cv-xl dark:shadow-cv-xl enabled:hover:bg-cv-700 hover:text-white 
               dark:border-cv-700 dark:enabled:hover:bg-cv-700 dark:hover:text-white dark:enabled:hover:border-cv-700' color="light" pill>
                  Download CV
               </Button>
               <Button className='transition duration-150 ease-in-out inline shadow-lg dark:bg-zinc-700 dark:border-gray-400 dark:border-2
               dark:enabled:hover:bg-white dark:enabled:hover:border-white dark:hover:text-gray-800' color="light" pill
                  onClick={() => scrollToSection(idSections.contact)}
               >
                  Contact
               </Button>
            </div>
         </div>

      </>
   )
}
