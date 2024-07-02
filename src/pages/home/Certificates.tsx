import { EDUCATIONS } from '@/constants/hard-data';
import { ICertificate } from '@/types';
import React from "react";

interface Props {
   item: ICertificate
}

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
            {EDUCATIONS.map((i, id) => <Content key={id} item={i} />)}
         </div>
      </>
   )
}
