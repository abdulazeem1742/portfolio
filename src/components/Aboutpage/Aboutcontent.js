import React from 'react'
import About from '../Home/About'
import Consult from '../Home/Consult'
import Contact from '../Home/Contact'
import Abouthero from './Abouthero'
import Aboutskills from './Aboutskills'

export default function Aboutcontent() {
  return (
    <div className='about-content-wrap'>
        <div className='main-about-wrap'>
            <div className='container'>
            <Abouthero />
            </div>
        </div>
        <div className='main-home-wrap2'>
            <div className='container'>
                <About />
            </div>
        </div>
        <div className='about-skill-wrap'>
            <div className='container'>
                <Aboutskills />
            </div>
        </div>
        <div className='main-home-consult-wrap'>
            <div className='container'>
                <Consult />
            </div>
        </div>
        <div className='main-home-wrap4'>
            <div className='container'>
                <Contact />
            </div>
        </div>
    </div>
  )
}
