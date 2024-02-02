import React from "react"
import Heading from '@/components/UI/Dropdown/Heading';
import { CodeSquare, Palette } from "react-bootstrap-icons";
import idSections from "@/constants/id-section-page";

interface Props {
   title: string;
   job: {
      icon: any;
      content: string;
   }
}

const jobs: Props[] = [
   {
      title: 'Frontend Developer',
      job: {
         icon: CodeSquare,
         content: 'More than 1.5 years of experience learning and practicing Frontend projects for websites and Chrome extensions with frameworks such as Reactjs, Vuejs, Solidjs and css frameworks such as AntDesign, Tailwind, Primer,...'
      }
   },
   {
      title: 'Graphic Designer',
      job: {
         icon: Palette,
         content: 'With more than four years of comprehensive expertise in graphic design spanning social media, marketing, branding, packaging, and website design, I specialize in delivering visually compelling designs rich in both aesthetics and meaningful messaging.'
      }
   }

]

const Content: React.FC<Props> = ({ title, job }) => {
   const Icon = job.icon
   return (
      <div className="flex flex-0 md:flex-1 px-[15px]">
         <div className="text-cv-700 text-4xl pr-10 mx-[-20px]">
            <Icon />
         </div>
         <div className="flex-0 md:flex-1">
            <h5 className="font-semibold mb-3">{title}</h5>
            <p className="text-sm">
               {job.content}
            </p>
         </div>
      </div>
   )
}

export default function WhatIsDo() {

   return (
      <div id={idSections.whatIsDo} className='flex flex-col mt-5'>
         <Heading title="What I Do" />
         <div className="flex flex-wrap gap-y-14 gap-x-5">
            {jobs.map((i, id) => <Content title={i.title} key={id} job={i.job} />)}
         </div>
      </div>
   )
}
