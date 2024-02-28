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
   delay: 200
}


export default function LoadingAuth() {
   const [propLogo] = useSpring(configLogo, [])

   return (
      <div className='min-w-screen min-h-screen flex items-center justify-center bg-white dark:bg-dark-mode'>
         <div className='px-2 py-2.5 flex gap-x-2 flex items-center scale-150'>
            <animated.div style={propLogo}>
               <Logo />
            </animated.div>
         </div>
      </div>
   )
}
