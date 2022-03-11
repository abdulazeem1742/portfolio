import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


export default function Contact() {
  return (
    <div className='contact-wrap'>
        <p className='small-title'>Get In Touch</p>
        <p className='title'>Contact Info</p>
        <div className='row'>
            <div className='col-12 col-md-12 col-lg-12'>
                <div className='contact' data-aos="fade-up" data-aos-duration="1000">
                    <p className='title-2'>Contact Form</p>
                    <div className='contact-sect'>
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="inputName" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Message</label>
                                <textarea type="text"></textarea>
                            </div>
                            <div className="col-12">
                                <a href='mailto:kapriazeem@gmail.com' type='mail' className="send-btn">Submit</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <img src="../../images/leaf-cyan-2.png" class="img-fluid contact-img1" />
    </div>
  )
}
