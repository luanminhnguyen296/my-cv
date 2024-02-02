import { Helmet } from 'react-helmet-async'
import Certificates from './Certificates'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Overview from './Overview'
// import Portfolio from './Portfolio'
import Skill from './Skill'
import WhatIsDo from './WhatIsDo'


const About = () => {
  return (
    <>
      <Helmet>
        <title>Nguyễn Minh Luân</title>
      </Helmet>
      <Overview />
      <WhatIsDo />
      <Experience />
      <Skill />
      <Education />
      <Certificates />
      {/* <Portfolio /> */}
      <Contact />
    </>
  )
}

export default About
