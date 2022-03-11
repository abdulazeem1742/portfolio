import React from 'react'

export default function Banner() {
  return (
      <div>
        <div className='banner-section'>
            <div className='row'>
                <div className='col-12 col-md-8 col-lg-8'>
                    <div className='banner-st1'>
                        <p className='banner-title'>
                            Hi!
                            <span>I am Abdul Azeem</span>
                            <span>Frontend Developer</span>
                        </p>
                    </div>
                </div>
            </div>
            <img src='../../images/leaf-orange.png' className='img-fluid banner-img1' />
            <img src='../../images/dots-orange.png' className='img-fluid banner-img2' />
            <img src='../../images/leaf-yellow.png' className='img-fluid banner-img3' />
            <img src='../../images/dots-group-orange.png' className='img-fluid banner-img4' />
            <img src='../../images/leaf-pink-round.png' className='img-fluid banner-img5' />
            <img src='../../images/leaf-cyan-2.png' className='img-fluid banner-img6' />
            <img src='../../images/leaf-cyan.png' className='img-fluid banner-img7' />
        </div>
      </div>
  )
}
