import PointEffect from '@/components/UI/PointEffect';
import { handleSendIpInfo } from '@/services/ipdata';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout() {

  useEffect(() => {

    handleSendIpInfo();
  }, [])

  return (
    <div className='min-h-screen dark:bg-dark-mode dark:text-content flex flex-col justify-between relative'>
      <PointEffect />
      <Header />
      <main className='flex justify-center flex-1 p-5 mt-20 lg:mt-32'>
        <div className='container flex flex-wrap gap-y-14 md:gap-y-20'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

