import designLogo from '@/assets/design-icon.svg?react';
import itLogo from '@/assets/it-icon.svg?react';
import marketingLogo from '@/assets/marketing-icon.svg?react';
import { ICertificate } from '@/types';
import React from "react";

interface Props {
   item: ICertificate
}

const certificates: ICertificate[] = [
   {
      school: 'Cao Thang Technical College',
      year: 'August - 2015',
      icon: itLogo,
      major: 'Associate Degree in Information Technology (IT)',
      content: 'Pursuing a degree in Information Technology with a specialization in software and website programming at Cao Thang Technical College. Renowned for its excellence in training technical disciplines and information technology, Cao Thang Technical College stands as a distinguished institution for my academic pursuits.'
   },
   {
      school: 'FPT Polytechnic College',
      year: 'June - 2019',
      icon: designLogo,
      major: 'Associate Degree in Graphic Design',
      content: 'To enhance my proficiency as a frontend developer, I undertook supplementary graphic design courses at FPT Polytechnic College, a highly esteemed institution recognized by numerous employers for its exceptional training standards.'
   },
   {
      school: 'PACE institute of management',
      year: 'February - 2020',
      icon: marketingLogo,
      major: 'Chief Marketing Officer',
      content: 'Throughout my professional journey, I earned a promotion to lead the marketing department. To fortify the essential knowledge required for the role, I enrolled in the short-term Chief Marketing Officer training course at PACE Institute of Management, a renowned institution celebrated for its expertise in training high-level personnel.'
   },
]

const Content: React.FC<Props> = ({ item }) => {
   return (
      <div className="flex border-gray-200 border-2 w-full rounded-lg overflow-hidden
         dark:border-gray-700
      ">
         <span className="flex flex-0 md:basis-1/3 justify-center items-center text-gray-700 py-1.5 px-4 bg-gray-100 font-semibold  mr-3
            dark:bg-gray-800 dark:text-gray-100
            ">
            <item.icon className='w-20 md:w-36 text-gray-400' />
         </span>

         <div className="flex-1 py-2 gap-1 flex justify-center  flex-col ">
            <p className="text-sm md:text-lg text-gray-800 font-semibold dark:text-gray-200">{item.major}</p>
            <p className="text-sm md:text-lg text-cv-700 dark:text-gray-400">{item.school}</p>
            <p className="text-gray-500 text-sm italic">{item.year}</p>
         </div>
      </div>
   )
}

export default function Certificates() {

   return (
      <>
         <UIHeading title="Certificates" />
         <div className="flex flex-wrap flex-1 gap-y-3 lg:gap-y-8">
            {certificates.map((i, id) => <Content key={id} item={i} />)}
         </div>
      </>
   )
}
