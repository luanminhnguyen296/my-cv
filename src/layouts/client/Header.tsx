import Logo from '@/components/Logo';
import MainMenu from '@/components/MainMenu';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';



export default function Header() {
  return (
    <header className='sticky top-0 bg-[#ffffffcf] dark:bg-[#222222e8] z-50 backdrop-blur'>
      <Navbar fluid rounded className='w-full md:block md:w-auto bg-transparent dark:bg-transparent'>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <Logo />
          <div className='text-[26px] text-gray-600 dark:text-gray-400'>
            <span className='font-bold text-cv-700'>Henry </span> Nguyen
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='rounded-lg pr-5 bg-gray-50 md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-transparent dark:border-gray-700'>
          <MainMenu />
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
