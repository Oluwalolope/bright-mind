import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { useState } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2024);

  let presentYear = new Date().getFullYear();

  if (currentYear != presentYear) {
    setCurrentYear(new Date().getFullYear());
  }

  return (
    <footer>
      <div className="footer--wrapper">
        <div className="info--header">
          <h5>Company Info</h5>
          <a href="#" className="info--link">
            About us
          </a>
          <a href="#" className="info--link">
            Carrier
          </a>
          <a href="#" className="info--link">
            We are hiring
          </a>
          <a href="#" className="info--link">
            Blog
          </a>
        </div>

        <div className="info--header">
          <h5>Legal</h5>
          <a href="#" className="info--link">
            About us
          </a>
          <a href="#" className="info--link">
            Carrier
          </a>
          <a href="#" className="info--link">
            We are hiring
          </a>
          <a href="#" className="info--link">
            Blog
          </a>
        </div>

        <div className="info--header">
          <h5>Features</h5>
          <a href="#" className="info--link">
            Business Marketing
          </a>
          <a href="#" className="info--link">
            User Analytics
          </a>
          <a href="#" className="info--link">
            Live Chat
          </a>
          <a href="#" className="info--link">
            Unlimited Support
          </a>
        </div>

        <div className="info--header">
          <h5>Resources</h5>
          <a href="#" className="info--link">
            IOS & Android
          </a>
          <a href="#" className="info--link">
            Watch a Demo
          </a>
          <a href="#" className="info--link">
            Customers
          </a>
          <a href="#" className="info--link">
            API
          </a>
        </div>

        <div className="company--location">
          <h5>Get in Touch</h5>
          <div className="contact--info">
            <FaPhone />
            <a href="#" className="contact--link">
              (480) 555-0103
            </a>
          </div>
          <div className="contact--info">
            <IoLocationOutline />
            <a href="#" className="contact--link">
              4517 Washinton Ave, London
            </a>
          </div>
          <div className="contact--info">
            <IoIosMail />
            <a href="#" className="contact--link">
              hello@brightmind.com
            </a>
          </div>
        </div>
      </div>

      <div className="attribution">
        <p className="copyright">
          All Rights Reserved &copy; Bright Mind {currentYear}
        </p>

        <div className="social--links">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
