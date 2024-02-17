import Logo from '@/components/Logo';
import MainMenu from '@/components/MainMenu';
import { a, useTrail } from '@react-spring/web';
import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';


const Trail: React.FC<{ children?: JSX.Element[] }> = ({ children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    x: 0,
    scale: 1,
    from: { opacity: 0, x: 100, scale: 0 },
    delay: 400
  })
  return (
    <div className='flex flex-nowrap items-center'>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} style={style}>
          {items[index]}
        </a.div>
      ))}
    </div>
  )
}


export default function Header() {
  return (
    <header className='sticky top-0 bg-[#ffffffcf] dark:bg-[#222222e8] z-50 backdrop-blur'>
      <Navbar fluid rounded className='w-full md:block md:w-auto bg-transparent dark:bg-transparent'>
        <Navbar.Brand as={Link} href="/">
          <Trail>
            <Logo />
            <div className='text-[26px] text-gray-600 dark:text-gray-400'>
              <span className='font-bold text-cv-700'>Henry </span> Nguyen
            </div>
          </Trail>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='rounded-lg h-screen lg:h-auto pr-0 lg:pr-5 bg-gray-50 md:flex-row md:space-x-2 rtl:space-x-reverse mt-3 lg:mt-0 md:border-0 md:bg-white dark:bg-transparent dark:border-gray-700'>
          <MainMenu />
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
