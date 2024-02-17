import Logo from '@/components/Logo'
import { animated, useSpring } from '@react-spring/web'


const config = { mass: 50, tension: 3000, friction: 600 }

const configLogo = {
   config,
   from: {
      opacity: 0,
      scale: 0,
   },
   to: {
      opacity: 1,
      scale: 1,
   },
}

const configText = {
   config,
   from: {
      opacity: 0,
      x: -100,
      scale: 0,
   },
   to: {
      opacity: 1,
      x: 0,
      scale: 1,
   },
   delay: 3100
}

const configOverlay = {
   config,
   from: {
      opacity: 1,
      x: 0,
      scale: 1.3,
   },
   to: {
      opacity: 0,
      x: 300,
   },
   delay: 4000
}


export default function LoadingMain() {
   const [propOverlay] = useSpring(configOverlay, [])
   const [propLogo] = useSpring(configLogo, [])
   const [propText] = useSpring(configText, [])


   return (
      <div className='min-w-screen min-h-screen flex items-center justify-center bg-white dark:bg-dark-mode'>
         <animated.div style={propOverlay} className='px-2 py-2.5 flex gap-x-2 flex items-center scale-150'>
            <animated.div style={propLogo}>
               <Logo />
            </animated.div>
            <animated.div style={propText} className='text-[26px] text-gray-600 dark:text-gray-400'>
               <span className='font-bold text-cv-700'>Henry </span> Nguyen
            </animated.div>
         </animated.div>
      </div>
   )
}
