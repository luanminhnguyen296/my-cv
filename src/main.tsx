import customFlowbiteTheme from '@/styles/custom-flowbite-theme'
import '@/styles/main.less'
import { Flowbite } from 'flowbite-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/router'
import { Provider } from 'react-redux'
import { store } from './store/store'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Flowbite theme={{ theme: customFlowbiteTheme }}>
      <HelmetProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </HelmetProvider>
    </Flowbite>
  </React.StrictMode>,
)