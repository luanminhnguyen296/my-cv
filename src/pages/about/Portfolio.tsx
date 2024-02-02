import Heading from '@/components/UI/Dropdown/Heading';
import idSections from "@/constants/id-section-page";
import { IProject } from "@/types";
import React from "react";
import { ArrowUpRight } from 'react-bootstrap-icons'
import SkillTag from '@/components/UI/SkillTag';
import { projects } from '@/constants/project';



const Content: React.FC<Props> = ({ project }: { project: IProject }) => {
   return (
      <div className="flex p-4 gap-x-4 cursor-pointer hover:bg-gray-100 hover:border-gray-500 rounded-lg">
         <div className="text-cv-700 text-4xl mt-1">
            <img src={project.thumbnail} className='max-w-20' />
         </div>
         <div className="flex-0 md:flex-1">
            <a href={project.url} className="font-semibold mb-1 flex gap-x-2 items-center">
               {project.title}
               <ArrowUpRight />
            </a>
            <p className="text-sm font-light text-gray-500 mb-2">
               {project.description}
            </p>
            <div className='text-sm text-gray-600 mb-2'>
               <span className='font-semibold'>Task:</span>
               <span className='ml-2'>{project.task}</span>
            </div>
            <div className='flex flex-wrap gap-2'>
               {project.tech.map((i, id) => <SkillTag title={i} key={id} size='small' />)}
            </div>
         </div>
      </div>
   )
}

export default function Portfolio() {

   return (
      <div id={idSections.portfolio} className='flex basis-[40%] flex-col ml-10'>
         <Heading title="Portfolio" />
         <div className="flex flex-wrap gap-y-14 gap-x-5">
            {projects.map((i) => <Content project={i} key={i.joinAt} />)}
         </div>
      </div>
   )
}
