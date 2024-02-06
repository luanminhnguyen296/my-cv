import PointEffect from '@/components/UI/PointEffect';
import { handleSendIpInfo } from '@/services/ipdata';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function MainLayout() {

  useEffect(() => {

    handleSendIpInfo();
  }, [])

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

