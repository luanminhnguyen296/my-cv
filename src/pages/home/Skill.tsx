import Heading from '@/components/UI/Heading';
import SkillTag from '@/components/UI/SkillTag';
import ToastCV from '@/components/UI/ToastCV';
import useFetch from '@/hooks/other/useFetch';
import { getSkillFireStore } from '@/services/fire-store';
import { ISkill } from '@/types';


export default function Skill() {
   const { loading, response: data, error } = useFetch<ISkill>(getSkillFireStore)


   function render(data: ISkill) {
      if (data.skill.length > 0)
         return data.skill.map((skill: string) => <SkillTag key={skill} title={skill} />)
      else
         return 'Skill not available!'
   }

   return (
      <>
         <ToastCV data={error} />
         <>
            <div className="flex flex-col flex-1">
               <Heading title="Coding Skills" className="mb-9" />
               <div className="flex flex-row flex-wrap gap-2">
                  {
                     loading && "loading..."
                  }
                  {
                     !loading && data && render(data[0])
                  }
               </div>
            </div>
            <div className="flex flex-col flex-1">
               <Heading title="Design Skills" className="mb-9" />
               <div className="flex flex-row flex-wrap gap-2">
                  {
                     loading && "loading..."
                  }
                  {
                     !loading && data && render(data[1])
                  }
               </div>
            </div>
         </>
      </>
   )
}
