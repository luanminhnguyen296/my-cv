

export type TSkillLineProps = {
   title: string;
   percentExp: number;
}

function SkillTag({ title }: TSkillLineProps) {


   return (
      <span className=" rounded-3xl font-semibold py-3 leading-none px-5
      text-sm
      text-cv-700 bg-[#2f56e316]
      dark:text-[#44e3ff] dark:bg-[#3991d523]
      ">
         {title}
      </span>
   )
}

export default SkillTag
