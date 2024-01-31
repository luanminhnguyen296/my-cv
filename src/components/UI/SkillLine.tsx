

export type TSkillLineProps = {
   title: string;
   percentExp: number;
}

function SkillLine({ title, percentExp }: TSkillLineProps) {


   return (
      <div className="flex-1 basis-1/3">
         <div className='flex text-sm justify-between mb-2 text-gray-600 dark:text-gray-300'>
            <div className='font-semibold '>{title}</div>
            <div className='font-semibold text-stone-600 dark:text-gray-300'>{percentExp}%</div>
         </div>
         <div className='border border-dashed border-gray-300 w-full p-[4px] rounded-lg
         dark:border-gray-700 
            
         '>
            <span className={`bg-stone-500 dark:bg-gray-400 block rounded-md h-[3px]`} style={{ width: `${percentExp}%` }}></span>
         </div>
      </div>
   )
}

export default SkillLine
