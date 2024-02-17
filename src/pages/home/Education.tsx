import Heading from '@/components/UI/Heading';
import { IEducation } from '@/types';
import React from "react";

interface Props {
   item: IEducation
}

const jobs: IEducation[] = [
   {
      school: 'Technical College Cao Thang',
      year: '2012 - 2016',
      major: 'Technology Information',
      content: 'Pursuing a degree in Information Technology with a specialization in software and website programming at Cao Thang Technical College. Renowned for its excellence in training technical disciplines and information technology, Cao Thang Technical College stands as a distinguished institution for my academic pursuits.'
   },
   {
      school: 'FPT Polytechnic College',
      year: '2016 - 2018',
      major: 'Graphic Design',
      content: 'To enhance my proficiency as a frontend developer, I undertook supplementary graphic design courses at FPT Polytechnic College, a highly esteemed institution recognized by numerous employers for its exceptional training standards.'
   },
   {
      school: 'PACE institute of management',
      year: '2020',
      major: 'Chief Marketing Officer',
      content: 'Throughout my professional journey, I earned a promotion to lead the marketing department. To fortify the essential knowledge required for the role, I enrolled in the short-term Chief Marketing Officer training course at PACE Institute of Management, a renowned institution celebrated for its expertise in training high-level personnel.'
   },
]

const Content: React.FC<Props> = ({ item }) => {
   return (
      <div className="flex flex-col text-sm border-l pl-2 pt-3 first:pt-3 pb-3 border-b last:border-b-0
      dark:border-gray-600
      ">
         <div className="mb-2 ml-[-30px]">
            <span className="text-cv-700 py-1.5 px-4 inline-block bg-white font-semibold border-2 rounded-3xl border-cv-700 mr-3
            dark:bg-gray-800 dark:text-gray-100
            ">
               {item.year}
            </span>
            <span className="text-gray-500 dark:text-gray-500">{item.school}</span>
         </div>
         <div className="pl-4 pt-2">
            <h5 className="font-semibold mb-2">{item.major}</h5>
            <p className="text-sm dark:text-gray-400">
               {item.content}
            </p>
         </div>
      </div>
   )
}

export default function Education() {

   return (
      <>
         <Heading title="Education" />
         <div className="flex flex-wrap pl-5">
            {jobs.map((i, id) => <Content key={id} item={i} />)}
         </div>
      </ >
   )
}
