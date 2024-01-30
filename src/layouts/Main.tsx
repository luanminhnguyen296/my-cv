import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import styled from 'styled-components'

export default function MainLayout() {
  const PointEffect = styled.div`
    
  `
  return (
    <>
      <PointEffect />
      <Header />
      <main className='flex justify-center flex-1 p-5'>
        <div className='container flex flex-wrap gap-y-8'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}
