import { Helmet } from 'react-helmet-async'
import Certificates from './Certificates'
import Education from './Education'
import Overview from './Overview'
import WhatIsDo from './WhatIsDo'
import Experience from './Experience'
import Contact from './Contact'
import Skill from './Skill'
import Portfolio from './Portfolio'


const Hr = () => <hr className='w-full border-gray-600' />
const About = () => {
  return (
    <>
      <Helmet>
        <title>Nguyễn Minh Luân</title>
      </Helmet>
      <Overview />
      <WhatIsDo />
      {/* <Hr /> */}
      <Education />
      <Certificates />
      <Skill />
      {/* <Hr /> */}
      <Experience />
      {/* <Hr /> */}
      <Portfolio />
      {/* <Hr /> */}
      {/* <Hr /> */}
      <Contact />
    </>
  )
}

export default About
