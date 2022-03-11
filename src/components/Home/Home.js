import React from 'react'
import About from './About'
import Banner from './Banner'
import Consult from './Consult'
import Contact from './Contact'
import Faq from './Faq'
import Portfolio from './Portfolio'
import Services from './Services'

export default function Home() {
  return (
    <div>
        <div className='main-home-wrap'>
            <div className='container'>
            <Banner />
            </div>
        </div>
        <div className='main-home-wrap2'>
            <div className='container'>
                <About />
            </div>
        </div>
        <div className='main-home-wrap3'>
            <div className='container'>
                <Services />
            </div>
        </div>
        <div className='main-home-portfolio'>
            <div className='container'>
                <Portfolio />
            </div>
        </div>
        <div className='main-home-faq-wrap'>
            <div className='container'>
                <Faq />
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
