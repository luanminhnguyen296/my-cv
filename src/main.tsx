import customFlowbiteTheme from '@/styles/custom-flowbite-theme'
import '@/styles/main.less'
import { Flowbite } from 'flowbite-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/router'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='min-h-screen dark:bg-dark-mode dark:text-content flex flex-col justify-between pt-5'>
      <Flowbite theme={{ theme: customFlowbiteTheme }}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </Flowbite>
    </div>
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <div className='h-screen dark:bg-dark-mode dark:text-content flex flex-col justify-between pt-5'>
//       <Flowbite theme={{ theme: customFlowbiteTheme }}>
//         <RouterProvider router={router} />
//       </Flowbite>
//     </div>
//   </React.StrictMode>,
// )
