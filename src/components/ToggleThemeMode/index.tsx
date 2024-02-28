import React, { useState, FC, useEffect } from 'react'
import { Dropdown } from 'flowbite-react';
import { SunFill, CloudMoon, WindowDesktop } from 'react-bootstrap-icons';

interface IDropItem {
   Icon: FC<{ className: string }>
   type: TThemeConfig
}
type TThemeConfig = 'dark' | 'light' | 'system'
type PDynamicIcon = Omit<IDropItem, 'type'>



export default function ToggleThemeMode() {

   const [statusMode, setStatusMode] = useState<string>(localStorage.getItem('flowbite-theme-mode') || 'light');

   function updateThemeTypeSystem() {

      const date = new Date();
      const currentHour = date.getHours();
      const currentMinutes = date.getMinutes();

      if (currentHour >= 6 && currentHour <= 18) {
         if ((currentHour === 6 && currentMinutes <= 30) || (currentHour === 18 && currentMinutes >= 30)) {
            setStatusMode('dark')
            return document.documentElement.classList.add('dark')
         }
         setStatusMode('light')
         return document.documentElement.classList.remove('dark')

      } else {
         setStatusMode('dark')
         document.documentElement.classList.add('dark')
      }
   }

   function onClickItem(type: TThemeConfig) {
      setStatusMode(type)

      switch (type) {
         case 'light':
            document.documentElement.classList.remove('dark')
            break;
         case 'dark':
            document.documentElement.classList.add('dark')
            break;
         default:
            updateThemeTypeSystem();
            break;
      }
      localStorage.setItem('flowbite-theme-mode', type)
   }

   useEffect(() => {
      if (statusMode === 'system') updateThemeTypeSystem();
   })



   const DropItem: React.FC<{ Icon: FC, type: TThemeConfig }> = ({ Icon, type }: IDropItem) => {

      return <Dropdown.Item>
         <div className='text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-gray-50 font-medium cursor-pointer flex gap-2 capitalize items-center' onClick={() => onClickItem(type)}>
            <Icon className='mt-[-4px]' />
            <span className='cursor-pointer'>{type}</span>
         </div>
      </Dropdown.Item>
   }

   const DynamicIcon: FC<{ Icon: FC }> = ({ Icon }: PDynamicIcon) => {
      return <Icon className='text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-cv-400 w-auto h-[20px]' />
   }


   return (
      <Dropdown label="" dismissOnClick={false} renderTrigger={() => <div className='cursor-pointer px-1 py-2'>
         {
            statusMode === 'light' ? <DynamicIcon Icon={SunFill} /> : statusMode === 'dark' ? <DynamicIcon Icon={CloudMoon} /> : <DynamicIcon Icon={WindowDesktop} />
         }
      </div>}>
         <DropItem Icon={SunFill} type='light' />
         <DropItem Icon={CloudMoon} type='dark' />
         <DropItem Icon={WindowDesktop} type='system' />
      </Dropdown>
   )
}
