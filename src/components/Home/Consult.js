import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


export default function Consult() {
  return (
    <div className='consult-sect' data-aos="fade-up" data-aos-duration="2000">
        <div className='row'>
            <div className='col-12 col-md-6 col-lg-6'>
                <div className='consult-st'>
                    <p className='title-2'>If you have any project, please consult with me.</p>
                    <a href='mailto:kapriazeem@gmail.com' type='email'>Hire me!</a>
                </div>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
                <div className='consult-img'>
                    <img src='../../images/project.png' className='img-fluid' />
                </div>
            </div>
        </div>
        <img src="../../images/leaf-orange.png" class="img-fluid consult-img1" />
    </div>
  )
}
