import Heading from '@/components/UI/Dropdown/Heading';
import { TSkillLineProps } from '@/components/UI/SkillLine';
import SkillTag from '@/components/UI/SkillTag';
import idSections from "@/constants/id-section-page";



const codingSkills: TSkillLineProps[] = [
   {
      title: 'HTML/CSS',
      percentExp: 80
   },
   {
      title: 'Javascript',
      percentExp: 85
   },
   {
      title: 'Typescript',
      percentExp: 50
   },
   {
      title: 'React.js',
      percentExp: 80
   },
   {
      title: 'Vue.js',
      percentExp: 60
   },
   {
      title: 'SASS/LESS',
      percentExp: 60
   },
   {
      title: 'Tailwind CSS',
      percentExp: 80
   },
   {
      title: 'Ant Design',
      percentExp: 75
   },
   {
      title: 'Bootstrap',
      percentExp: 65
   },
   {
      title: 'Git/Github/Gitlab',
      percentExp: 60
   },
   {
      title: 'Chrome extension',
      percentExp: 80
   },
]


const DesignSkills: TSkillLineProps[] = [
   {
      title: 'Web design',
      percentExp: 65
   },
   {
      title: 'Print Design',
      percentExp: 80
   },
   {
      title: 'Graphic Design',
      percentExp: 75
   },
   {
      title: 'Logo  Design',
      percentExp: 65
   },
   {
      title: 'Photoshop',
      percentExp: 75
   },
   {
      title: 'Illustrator',
      percentExp: 70
   },
   {
      title: 'Premiere',
      percentExp: 50
   },
   {
      title: 'After Effect',
      percentExp: 30
   },
   {
      title: 'Figma',
      percentExp: 40
   },
]

export default function Skill() {

   return (
      <div id={idSections.skill} className='flex flex-col lg:flex-row md:gap-24 w-full gap-y-10'>
         <div className="flex flex-col flex-1">
            <Heading title="Coding Skills" className="mb-9" />
            <div className="flex flex-row flex-wrap gap-2">
               {
                  // codingSkills.map((skill) => <SkillLine key={skill.title} title={skill.title} percentExp={skill.percentExp} />)
                  codingSkills.map((skill) => <SkillTag key={skill.title} title={skill.title} />)
               }
            </div>
         </div>
         <div className="flex flex-col flex-1">
            <Heading title="Design Skills" className="mb-9" />
            <div className="flex flex-row flex-wrap gap-2">
               {
                  DesignSkills.map((skill) => <SkillTag key={skill.title} title={skill.title} />)
                  // DesignSkills.map((skill) => <SkillLine key={skill.title} title={skill.title} percentExp={skill.percentExp} />)
               }
            </div>
         </div>
      </div>
   )
}
