import { Helmet } from 'react-helmet-async'
import Certificates from './Certificates'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Overview from './Overview'
import Portfolio from './Portfolio'
import Skill from './Skill'
import WhatIsDo from './WhatIsDo'
import thumbnail from '@/assets/thumbnail-share.png'


const About = () => {
  return (
    <>
      <Helmet>
        <title>Nguyễn Minh Luân</title>
        <meta property='og:image' content={thumbnail} />
      </Helmet>
      <Overview />
      <WhatIsDo />
      <Experience />
      <Certificates />
      <Education />
      <Skill />
      <Portfolio />
      <Contact />
    </>
  )
}

export default About
