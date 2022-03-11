import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Footer() {
  return (
    <div className='main-home-wrap5' data-aos="fade-up" data-aos-duration="1000">
        <div className='container'>
            <div className='footer-main'>
                <div className='row'>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <div className='ft-box'>
                            <p className='ft-title'>Email</p>
                            <a href='mailto:kapriazeem@gmail.com' type='email'>kapriazeem@gmail.com</a>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <div className='ft-box'>
                            <p className='ft-title'>Phone Number</p>
                            <a href='tel:+923473684186' type='number'>+923473684186</a>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <div className='ft-box'>
                            <p className='ft-title'>Address</p>
                            <a href='#!' type='text'>Karachi, Pakistan</a>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <p className='copy-right-text'>Copyright © 2022 All right reserved By Abdul Azeem</p>
                </div>
                <img src="../../images/dots-group-orange.png" class="img-fluid footer-img1" />
                <img src="../../images/leaf-orange.png" class="img-fluid footer-img2" />
                <img src="../../images/dots-orange.png" class="img-fluid footer-img3" />
            </div>
        </div>
    </div>
  )
}
