import { TToastProps } from '@/types';
import { Toast } from 'flowbite-react';
import React, { HTMLProps, useState } from 'react'
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


export default function ToastCV({ data, onCloseToast }: TToastProps) {
   const [showToast, setShowToast] = useState(!!(data));
   const [toast, setToast] = useState({
      status: 'success',
      msg: ''
   });

   const handleCloseTost = () => {
      setShowToast(false);
      setToast({
         status: 'success',
         msg: ''
      })
      onCloseToast(null)
   }

   return (
      <>
         {
            showToast &&
            <Toast className={`fixed right-5 top-5 transition duration-150 ${toastStyle.success.container}`}>
               <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                  <X className="h-5 w-5" />
               </div>
               <div className={`ml-3 text-sm font-normal ${toastStyle.success.container}`}>{toast.msg}</div>
               <Toast.Toggle onDismiss={handleCloseTost} />
            </Toast>
         }
      </>
   )
}
