import Heading from '@/components/UI/Dropdown/Heading';
import jobs from '@/constants/experience';
import idSections from '@/constants/id-section-page';
import { IWorkExperience, TDetailWork } from '@/types';
import React from "react";

const renderDetailWork = (details: TDetailWork, id = 0) => {
   return (
      <div key={id} className='last:mt-6'>
         <a href={details?.website || '#'} target='_blank' className='text-cv-600 mb-1 font-semibold border-l-2 border-cv-600 pl-2'>{details.company}</a>
         <div className='text-gray-500 mb-2 pl-5 whitespace-pre-wrap font-light
            dark:text-gray-400
         '>{details.content}</div>
         <p className='text-gray-800 font-semibold pl-3
            dark:text-gray-300
         '>Achievements:</p>
         <p className='text-gray-500 mb-3 pl-5 whitespace-pre-wrap font-light
            dark:text-gray-400
         '>{details.achievements}</p>
      </div>
   )
}

const Content: React.FC<{ item: IWorkExperience }> = ({ item }) => {
   return (
      <div className="flex flex-col text-sm border-l pl-2 pt-5 first:pt-3 pb-3 border-b last:border-b-0
      dark:border-gray-600
      ">
         <div className="mb-2 ml-[-30px] flex items-center">
            <span className="text-cv-700 py-1.5 px-4 inline-block flex-none h-fit bg-white font-semibold border-2 rounded-3xl border-cv-700 mr-3
            dark:bg-gray-800 dark:text-gray-100
            text-xs md:text-sm
            ">
               {item.year}
            </span>
            <span className="text-gray-500 dark:text-gray-200 font-semibold text-sm lg:text-xl">{item.major}</span>
         </div>
         <div className="pl-4 pt-2">
            <div className="text-sm dark:text-gray-400">
               {
                  Array.isArray(item.content) ? item.content.map((content: TDetailWork, id: number) => renderDetailWork(content, id))
                     : renderDetailWork(item.content)
               }
            </div>
         </div>
      </div>
   )
}

export default function Experience() {

   return (
      <div id={idSections.experience} className='flex flex-0 w-full flex-col'>
         <Heading title="Experience" />
         <div className="flex flex-wrap pl-5">
            {jobs.map((i, id) => <Content key={id} item={i} />)}
         </div>
      </div>
   )
}
