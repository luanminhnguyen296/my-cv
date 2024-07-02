import Heading from '@/components/UI/Heading';
import { EDUCATIONS } from '@/constants/hard-data';
import { IEducation } from '@/types';
import React from "react";

interface Props {
   item: IEducation
}

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
            <p className="text-sm dark:text-gray-400" dangerouslySetInnerHTML={{ __html: item.content }}>
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
            {EDUCATIONS.map((i, id) => <Content key={id} item={i} />)}
         </div>
      </ >
   )
}
