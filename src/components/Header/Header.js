import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Demo1 from './Demo1'

export default function Header() {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
  return (
    <div className='main-header'>
        <div className='container'>
            <div className='header'>
                <div className='logo-img'>
                    <a href='#!'>Abdul.azeem</a>
                </div>
                <div className='header-nav'>
                    <ul>
                        <li>
                            <Link to='/' className={splitLocation[1] === "" ? "active" : ""}>Home</Link>
                        </li>
                        <li>
                            <Link to='/aboutpage' className={splitLocation[1] === "aboutpage" ? "active" : ""}>About</Link>
                        </li>
                        <li>
                        <Link to='/contact' className={splitLocation[1] === "contact" ? "active" : ""}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='mobile-responsive'>
                    <Demo1 />
                </div>
            </div>
        </div>
    </div>
  )
}
