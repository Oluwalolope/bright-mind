import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {useRef} from 'react';



const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <>
            <nav ref={navRef}>
                <div className="nav--items">
                    <a href="#">Home</a>
                    <a href="#">Product</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contact</a>
                </div>

                <div className="login--cta">
                    <a href="#">Login</a>
                    <a href="#" className='cta-btn'>Join Us</a>
                </div>

                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>

            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </>
    )
}

export default Navbar;