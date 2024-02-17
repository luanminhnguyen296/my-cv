import { store } from '@/store/store'
import customFlowbiteTheme from '@/styles/custom-flowbite-theme'
import '@/styles/main.less'
import { Flowbite } from 'flowbite-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import RoutesProvider from './routers/Routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Flowbite theme={{ theme: customFlowbiteTheme }}>
      <HelmetProvider>
        <Provider store={store}>
          <RoutesProvider />
        </Provider>
      </HelmetProvider>
    </Flowbite>
  </React.StrictMode>,
)
