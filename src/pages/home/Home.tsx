import idSections from '@/constants/id-section-page'
import { animated, useInView, useSpring } from '@react-spring/web'
import { Helmet } from 'react-helmet-async'
import Certificates from './Certificates'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Overview from './Overview'
import Skill from './Skill'
import WhatIsDo from './WhatIsDo'
import Portfolio from './Portfolio'

const config = { mass: 50, tension: 3000, friction: 600 }
const optionsAnimate = () => ({
  config,
  from: {
    opacity: 0,
    y: 100,
  },
  to: {
    opacity: 1,
    y: 0,
  },
})

const springOptionOverview = {
  config,
  from: {
    opacity: 0,
    y: -700,
    scale: 0,
    blur: 20,
  },
  to: {
    opacity: 1,
    y: 0,
    scale: 1,
    blur: 10,
  },
  delay: 600
}

const springOptionDo = {
  config,
  from: {
    opacity: 0,
    y: 100,
  },
  to: {
    opacity: 1,
    y: 0,
  },
  delay: 750
}

const rootMargin = { rootMargin: '-45% 0%', once: true }
const rootMargin2 = { rootMargin: '-15% 0%', once: true }

const About = () => {
  const [springsDo] = useSpring(springOptionDo, [])
  const [spring] = useSpring(springOptionOverview, [])
  const [refExp, springsExp] = useInView(optionsAnimate, rootMargin)
  const [refPor, springsPor] = useInView(optionsAnimate, rootMargin)
  const [refSki, springsSki] = useInView(optionsAnimate, rootMargin)
  const [refCer, springsCer] = useInView(optionsAnimate, rootMargin)
  const [refEdu, springsEdu] = useInView(optionsAnimate, rootMargin)
  const [refForm, springsForm] = useInView(optionsAnimate, rootMargin2)


  return (
    <>
      <Helmet>
        <title>Nguyễn Minh Luân</title>
      </Helmet>

      <animated.div id={idSections.overview} className='flex flex-col md:flex-row m-auto md:max-w-[1140px]' style={spring} >
        <Overview />
      </animated.div>

      <animated.div id={idSections.whatIsDo} className='flex flex-col mt-5' style={springsDo}>
        <WhatIsDo />
      </animated.div>

      <animated.div id={idSections.experience} className='flex flex-1 flex-col max-w-full' ref={refExp} style={springsExp}>
        <Experience />
      </animated.div>

      <animated.div id={idSections.portfolio} className='flex basis-[100%] xl:basis-[40%] flex-col lg:ml-10' ref={refPor} style={springsPor}>
        <Portfolio />
      </animated.div>


      <animated.div id={idSections.skill} className='flex flex-col lg:flex-row md:gap-24 w-full gap-y-10' ref={refSki} style={springsSki}>
        <Skill />
      </animated.div>

      <animated.div id={idSections.education} className='flex flex-0 lg:flex-1 flex-col' ref={refEdu} style={springsEdu}>
        <Education />
      </animated.div>

      <animated.div id={idSections.certificate} className='flex flex-1 flex-col ml-0 md:ml-12' ref={refCer} style={springsCer}>
        <Certificates />
      </animated.div>


      <animated.div id={idSections.contact} className='flex w-full flex-col lg:flex-row gap-x-8 gap-y-12 mb-10' ref={refForm} style={springsForm}>
        <Contact />
      </animated.div>
    </>
  )
}

export default About
