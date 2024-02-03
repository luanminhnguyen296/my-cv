
export type TSizeTag = 'small' | 'medium' | 'large'
export type TSkillTagProps = {
   title: string;
   size?: TSizeTag;
}

function SkillTag({ title, size = 'medium' }: TSkillTagProps) {

   function getClassSize(size: TSizeTag) {
      switch (size) {
         case 'small':
            return 'text-xs px-3 py-2'
         case 'medium':
            return 'text-sm px-5 py-3'
         case 'large':
            return 'text-lg px-7 py-4'
      }
   }
   return (
      <span className={`
      ${getClassSize(size)}
         rounded-3xl font-semibold leading-none 
      text-cv-700 bg-[#2f56e310]
      dark:text-[#44e3ff] dark:bg-[#3991d523]
      `}>
         {title}
      </span>
   )
}

export default SkillTag
