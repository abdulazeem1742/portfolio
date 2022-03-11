import React from 'react'
import { ProgressBar } from 'react-bootstrap'

export default function Aboutskills() {
  return (
    <div className='ab-skill-sect'>
    <p className='title'>My Skills</p>
    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='row'>
        <div className='col-12 col-md-6 col-lg-6'>
            <div className='skill-content'>
            <div className='progress-wrap'>
                    <div className='progress-label'>
                        <p className='label-text'>HTML5</p>
                        <p className='label-text'>85%</p>
                    </div>
                    <ProgressBar now={85} />
                </div>
                <div className='progress-wrap'>
                    <div className='progress-label'>
                        <p className='label-text'>CSS/CSS3</p>
                        <p className='label-text'>85%</p>
                    </div>
                    <ProgressBar now={85} />
                </div>
                <div className='progress-wrap'>
                    <div className='progress-label'>
                        <p className='label-text'>BOOTSTRAP</p>
                        <p className='label-text'>75%</p>
                    </div>
                    <ProgressBar now={75} />
                </div>
                <div className='progress-wrap'>
                    <div className='progress-label'>
                        <p className='label-text'>JAVASCRIPT</p>
                        <p className='label-text'>50%</p>
                    </div>
                    <ProgressBar now={50} />
                </div>
                <div className='progress-wrap'>
                    <div className='progress-label'>
                        <p className='label-text'>REACT JS</p>
                        <p className='label-text'>50%</p>
                    </div>
                    <ProgressBar now={50} />
                </div>
            </div>
        </div>
            <div className='col-12 col-md-6 col-lg-6'>
                <div className='progress-wrap'>
                    <div className='progress-label'>
                        <p className='label-text'>BRANDING</p>
                        <p className='label-text'>90%</p>
                    </div>
                    <ProgressBar now={90} />
                </div>
                <div className='progress-wrap'>
                    <div className='progress-label'>
                        <p className='label-text'>WEB DEVELOPMENT</p>
                        <p className='label-text'>90%</p>
                    </div>
                    <ProgressBar now={90} />
                </div>
                <div className='progress-wrap'>
                    <div className='progress-label'>
                        <p className='label-text'>UI/UX</p>
                        <p className='label-text'>90%</p>
                    </div>
                    <ProgressBar now={90} />
                </div>
            </div>
        </div>
    </div>
  )
}
