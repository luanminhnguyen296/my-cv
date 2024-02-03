import { TToastProps } from '@/types';
import { Toast } from 'flowbite-react';
import { useEffect } from 'react';
import { X } from 'react-bootstrap-icons';

const toastStyle = {
   success: {
      icon: 'bg-green-700 text-white text-green-500 border-none backdrop-blur-md',
      container: 'bg-[#139f7328] border-[#12b6825c] border backdrop-blur-md dark:bg-[#139f7328]',
      content: 'text-green-500'
   },
   error: {
      icon: 'bg-red-600 text-white',
      container: 'bg-[#ff000012] border-[#e0242440] border backdrop-blur-md dark:bg-[#ff000012]',
      content: 'text-red-400'
   }
}


export default function ToastCV({ data, onCloseToast, delayAutoClose = 3000 }: TToastProps) {
   const style = toastStyle[data?.status || 'success']
   // console.log("🚀 ~ ToastCV ~ style:", style)

   useEffect(() => {
      const timer = setTimeout(() => {
         onCloseToast(null)
      }, delayAutoClose)

      return () => clearTimeout(timer)
   })

   return (
      <Toast className={`fixed z-[99999] right-5 top-24 transition duration-150 max-w-md
      ${style?.container}
      `}>
         <div className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg
          ${style?.icon}`}>
            <X className="h-5 w-5 " />
         </div>
         <div className={`ml-3 text-sm font-normal bg-transparent ${style.content}`}>{data?.msg}</div>
         <Toast.Toggle onDismiss={() => onCloseToast(null)} />
      </Toast>
   )
}
