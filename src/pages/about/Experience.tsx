import Heading from '@/components/UI/Dropdown/Heading';
import ToastCV from '@/components/UI/ToastCV';
import idSections from '@/constants/id-section-page';
import { getExperienceFireStore } from '@/services/fire-store';
import { IExperience, IFetchReturn, IWorkExperience, TDataToastMessages, TDetailWork } from '@/types';
import { orderBy } from 'lodash';
import React, { useEffect, useState } from "react";

const renderDetailWork = (details: TDetailWork, id = 0) => {
   return (
      <div key={id} className=''>
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
   const [isLoading, setIsLoading] = useState(false)
   const [experiences, setExperiences] = useState<IExperience[] | null>(null)
   const [toast, setToast] = useState<TDataToastMessages | null>(null);

   async function getPortfolio() {
      setIsLoading(true)

      const res: IFetchReturn<IExperience[] | null> = await getExperienceFireStore()
      console.log("🚀 ~ getPortfolio ~ res:", res)
      if (res.isSuccess) {
         setExperiences(res?.data ? orderBy(res.data, ['createAt'], ['desc']) : [])
         console.log("🚀 ~ getPortfolio ~ res:", orderBy(res.data, ['createAt'], ['desc']))
      } else {
         setToast({
            status: 'error',
            msg: res.msg
         })
      }
      setIsLoading(false)
   }

   useEffect(() => {
      getPortfolio();
   }, [])

   return (
      <>
         {
            toast && <ToastCV data={toast} onCloseToast={setToast} />
         }
         <div id={idSections.experience} className='flex flex-1 flex-col'>
            <Heading title="Experience" />
            <div className="flex flex-wrap pl-5">
               {
                  isLoading && 'Loading data...'
               }
               {
                  experiences && experiences.length > 0 ? experiences?.map((i, id) => <Content item={i} key={id} />) : (!isLoading && 'Experience not available!')
               }
            </div>
         </div>
      </>
   )
}
