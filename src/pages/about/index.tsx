import { Helmet } from 'react-helmet-async'
import Certificates from './Certificates'
import Education from './Education'
import Overview from './Overview'
import WhatIsDo from './WhatIsDo'
import Experience from './Experience'
import Contact from './Contact'

const About = () => {
  return (
    <>
      <Helmet>
        <title>Nguyễn Minh Luân</title>
      </Helmet>
      <Overview />
      <WhatIsDo />
      <Education />
      <Certificates />
      <Experience />
      <Contact />
    </>
  )
}

export default About
