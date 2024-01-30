import { Button, ButtonProps } from 'flowbite-react'

type TCVType = 'border-color' | 'border-default' | 'bg-default' | 'bg-color'

interface ICVButton extends ButtonProps {
   cvType?: TCVType
}

const styleButton = {
   borderColor: `transition duration-150 ease-in-out inline border-2 
   border-cv-700 shadow-cv-xl dark:shadow-cv-xl enabled:hover:bg-cv-700 hover:text-white 
   dark:border-cv-700 dark:enabled:hover:bg-cv-700 dark:hover:text-white dark:enabled:hover:border-cv-700`,

   bgDefault: `transition duration-150 ease-in-out inline hover:shadow-lg 
   bg-gray-100 border-0 enabled:hover:bg-gray-200
   dark:bg-zinc-700 dark:border-gray-400 dark:border-2 dark:enabled:hover:bg-white dark:enabled:hover:border-white dark:hover:text-gray-800`,

   bgColor: `transition duration-150 ease-in-out inline
   bg-cv-600 text-white border-0 enabled:hover:bg-cv-800 hover:text-white hover:shadow-lg 
   dark:bg-zinc-700 dark:border-gray-400 dark:border-2 dark:enabled:hover:bg-white dark:enabled:hover:border-white dark:hover:text-gray-800`,

   borderDefault: `transition duration-150 ease-in-out inline hover:shadow-lg 
   dark:bg-zinc-700 dark:border-gray-400 dark:border-2
   dark:enabled:hover:bg-white dark:enabled:hover:border-white dark:hover:text-gray-800`
}

const getStyle = (cvType: TCVType) => {
   switch (cvType) {
      case 'border-color':
         return styleButton.borderColor
      case 'bg-default':
         return styleButton.bgDefault
      case 'bg-color':
         return styleButton.bgColor
      default:
         return styleButton.borderDefault
   }
}

export default function CVButton({ cvType = 'border-default', ...props }: ICVButton) {
   return (
      <Button className={getStyle(cvType)} color="light" pill {...props}>
         {props.value || props?.children}
      </Button>
   )
}
