import React from 'react';
import Consult from '../Home/Consult';
import Contact from '../Home/Contact';
import Contactbanner from './Contactbanner';

export default function Contactpage() {
  return (
    <div className='contact-main'>
      <div className='contact-wrap1'>
          <div className='container'>
            <Contactbanner />
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
