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
        <meta property="og:title" content="Nguyễn Minh Luân"></meta>
        <meta property="og:description" content="Henry Nguyen is a Frontend Developer who builds accessible, comprehensive digital products and experiences for the web."></meta>
      </Helmet>
      <Overview />
      <WhatIsDo />
      <Experience />
      <Education />
      <Certificates />
      <Skill />
      <Portfolio />
      <Contact />
    </>
  )
}

export default About
