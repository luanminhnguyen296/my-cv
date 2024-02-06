import Heading from '@/components/UI/Dropdown/Heading';
import ToastCV from '@/components/UI/ToastCV';
import idSections from '@/constants/id-section-page';
import useFetch from '@/custom-hooks/useFetch';
import { getExperienceFireStore } from '@/services/fire-store';
import { IExperience, IWorkExperience, TDetailWork } from '@/types';
import React from "react";

const renderDetailWork = (details: TDetailWork, id = 0) => {
   return (
      <div key={id} className=''>
         <a href={details?.website || '#'} target='_blank' className='block text-cv-600 mb-1 font-semibold border-l-2 border-cv-600 pl-2'>{details.company}</a>
         <div className='text-gray-500 mb-2 pl-5 whitespace-pre-wrap font-light
            dark:text-gray-400
         ' dangerouslySetInnerHTML={{ __html: details.content }} />
         <p className='text-gray-800 font-semibold pl-3 mb-1
            dark:text-gray-300
         '>Achievements:</p>
         <p className='text-gray-500 mb-3 pl-5 whitespace-pre-wrap font-light
            dark:text-gray-400' dangerouslySetInnerHTML={{ __html: details.achievements }} />
      </div>
   )
}

const Content: React.FC<{ item: IWorkExperience }> = ({ item }) => {
   return (
      <div className="flex flex-col text-sm border-l pl-2 pt-5 first:pt-3 pb-3 border-b last:border-b-0
      dark:border-gray-600
      ">
         <div className="mb-3 ml-[-28px] flex items-center">
            <span className="text-cv-700 py-1 px-4 inline-block flex-none h-fit bg-white font-semibold border-2 rounded-3xl border-cv-700 mr-3
            dark:bg-gray-800 dark:text-gray-100
            text-xs md:text-sm
            ">
               {item.year}
            </span>
            <span className="text-gray-600 dark:text-gray-200 font-semibold text-sm lg:text-lg">{item.major}</span>
         </div>
         <div className="pl-4">
            <div className="text-xs dark:text-gray-400 [&>*:nth-child(2)]:mt-6">
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
   const { loading, response: data, error } = useFetch<IExperience>(getExperienceFireStore)
   return (
      <>
         {
            error && <ToastCV data={error} />
         }
         <div id={idSections.experience} className='flex flex-1 flex-col'>
            <Heading title="Experience" />
            <div className="flex flex-wrap pl-5">
               {
                  loading && 'Loading data...'
               }
               {
                  data && data.length > 0 ? data?.map((i, id) => <Content item={i} key={id} />) : (!loading && 'Experience not available!')
               }
            </div>
         </div>
      </>
   )
}
