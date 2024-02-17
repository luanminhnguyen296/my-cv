import Heading from '@/components/UI/Heading';
import SkillTag from '@/components/UI/SkillTag';
import ToastCV from '@/components/UI/ToastCV';
import useFetch from '@/hooks/other/useFetch';
import { getPortfolioFireStore } from '@/services/fire-store';
import { IProject } from "@/types";
import dayjs from 'dayjs';
import React from "react";
import { ArrowUpRight } from 'react-bootstrap-icons';

interface Props {
   project: IProject
}

const Content: React.FC<Props> = ({ project }: { project: IProject }) => {
   return (
      <div className="flex p-4 gap-x-4 cursor-pointer rounded-lg group
         border-t-transparent
         border-t
         ease-out duration-600
         hover:border-gray-200
         hover:bg-gray-50
         hover:shadow-lg
         dark:hover:bg-[#ffffff0d]
         dark:hover:border-t-gray-600
         flex-col
         md:flex-row
         gap-y-4
      ">
         <div className="text-gray-500 text-sm xl:basis-[25.5%]">
            <div className='uppercase mb-2 text-center dark:group-hover:text-gray-300'>{dayjs(project.createAt).format('MMM - YYYY')}</div>
            <img src={project.thumbnail} className='w-full max-w-full md:max-w-[240px] rounded-md' />
         </div>

         <div className="flex-0 md:flex-1">
            <a href={project.url} className="font-semibold mb-1 flex gap-x-2 items-center text-gray-700 group-hover:text-cv-700
         
            dark:text-gray-300 dark:group-hover:text-cv-500
            ">
               {project.title}
               <ArrowUpRight />
            </a>
            <p className="text-sm font-light text-gray-500 my-2
            dark:text-gray-400">
               {project.description}
            </p>
            <div className='text-sm text-gray-600 mb-3 dark:text-gray-300'>
               <span className='font-semibold'>Task:</span>
               <span className='ml-2'>{project.task}</span>
            </div>
            <div className='flex flex-wrap gap-2'>
               {project.tech.map((i, id) => <SkillTag title={i} key={id} size='xsmall' />)}
            </div>
         </div>
      </div>
   )
}

export default function Portfolio() {

   const { loading, response: portfolios, error } = useFetch<IProject>(getPortfolioFireStore)

   return (
      <>
         {
            error && <ToastCV data={error} />
         }
         <>
            <Heading title="Portfolio" />
            <div className="flex flex-wrap gap-y-6 gap-x-5 ">
               {
                  loading && 'Loading data...'
               }
               {
                  portfolios && portfolios.length > 0 ? portfolios?.map((i) => <Content project={i} key={i.createAt} />) : (!loading && 'Portfolio not available!')
               }
            </div>
         </>
      </>
   )
}
