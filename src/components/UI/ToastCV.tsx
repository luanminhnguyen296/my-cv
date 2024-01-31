import { TToastProps } from '@/types';
import { Toast } from 'flowbite-react';
import { useEffect } from 'react';
import { X } from 'react-bootstrap-icons';

const toastStyle = {
   success: {
      icon: 'bg-green-700 text-white text-green-500 dark:bg-green-800 dark:text-green-200',
      container: 'bg-green-50 text-green-900'
   },
   error: {
      icon: 'bg-red-700 text-white dark:bg-red-800 dark:text-red-200',
      container: 'bg-red-50 text-red-900'
   }
}


export default function ToastCV({ data, onCloseToast, delayAutoClose = 3000 }: TToastProps) {
   const style = data?.status || 'success'

   useEffect(() => {
      const timer = setTimeout(() => {
         onCloseToast(null)
      }, delayAutoClose)

      return () => clearTimeout(timer)
   })

   return (
      <Toast className={`fixed z-[99999] right-5 top-5 transition duration-150
         dark:bg-green-100
      ${toastStyle[style]?.container}`}>
         <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500
          dark:bg-green-600 dark:text-green-200">
            <X className="h-5 w-5 " />
         </div>
         <div className={`ml-3 text-sm font-normal dark:text-green-800 dark:bg-transparent ${toastStyle.success.container}`}>{data?.msg}</div>
         <Toast.Toggle onDismiss={() => onCloseToast(null)} />
      </Toast>
   )
}
