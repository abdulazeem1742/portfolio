import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function () {
  return (
    <div className='about-sect' data-aos="fade-up" data-aos-duration="3000">
        <p className='title'>About Me</p>
        <div className='row'>
            <div className='col-12 col-md-8 col-lg-8'>
                <div className='ab-left-sect'>
                    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className='paragraph'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <p className='paragraph'>Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
                </div>
            </div>
            <div className='col-12 col-md-4 col-lg-4'>
                <div className='about-right'>
                    <div className='about-img'>
                        <img src='../../images/author.jpeg' className='img-fluid' />
                    </div>
                    <p className='user-name'>Abdul Azeem</p>
                    
                </div>
            </div>
        </div>
        <img src="../../images/dots-orange.png" class="img-fluid about-img1" />
    </div>
  )
}
