import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Packages from './Packages'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


export default function Portfolio() {
  return (
    <div className='portfolio-sect-wrap' data-aos="fade-up" data-aos-duration="1000">
        <div className='row'>
            <div className='col-12 col-md-12 col-lg-12'>
                <div className='portfolio-tab-btn'>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Home">
                    <Packages />
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <Packages />
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <Packages />
                </Tab>
                </Tabs>
                </div>
            </div>
        </div>
    </div>
  )
}
