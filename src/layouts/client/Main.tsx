import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import PointEffect from '@/components/UI/PointEffect';

export default function MainLayout() {

  return (
    <div className='min-h-screen dark:bg-dark-mode dark:text-content flex flex-col justify-between relative'>
      <PointEffect />
      <Header />
      <main className='flex justify-center flex-1 p-5'>
        <div className='container flex flex-wrap gap-y-28'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

