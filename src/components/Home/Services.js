import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function () {
  return (
    <div className='service-sect' data-aos="fade-up" data-aos-duration="3000">
        <p className='small-title'>What I am Expert In</p>
        <p className='title'>My Services</p>
        <div className='row mt-5'>
            <div className='col-12 col-md-4 col-lg-4'>
                <div className='service-card'>
                    <div className='serv-img'>
                        <img src='../../images/serv-img1.png' className='img-fluid' />
                    </div>
                    <p className='title-2'>Web Design</p>
                    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className='col-12 col-md-4 col-lg-4'>
                <div className='service-card'>
                    <div className='serv-img'>
                        <img src='../../images/serv-img2.png' className='img-fluid' />
                    </div>
                    <p className='title-2'>Web Development</p>
                    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className='col-12 col-md-4 col-lg-4'>
                <div className='service-card'>
                    <div className='serv-img'>
                        <img src='../../images/serv-img3.png' className='img-fluid' />
                    </div>
                    <p className='title-2'>Creative Design</p>
                    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className='col-12 col-md-4 col-lg-4'>
                <div className='service-card'>
                    <div className='serv-img'>
                        <img src='../../images/serv-img4.png' className='img-fluid' />
                    </div>
                    <p className='title-2'>Responsive Design</p>
                    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className='col-12 col-md-4 col-lg-4'>
                <div className='service-card'>
                    <div className='serv-img'>
                        <img src='../../images/serv-img5.png' className='img-fluid' />
                    </div>
                    <p className='title-2'>Branding Identity</p>
                    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className='col-12 col-md-4 col-lg-4'>
                <div className='service-card'>
                    <div className='serv-img'>
                        <img src='../../images/serv-img6.png' className='img-fluid' />
                    </div>
                    <p className='title-2'>24/Support</p>
                    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
        <img src="../../images/leaf-orange.png" class="img-fluid service-img1" />
        <img src="../../images/leaf-cyan.png" class="img-fluid service-img2" />
        <img src="../../images/dots-group-orange.png" class="img-fluid service-img3" />
    </div>
  )
}
