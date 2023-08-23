import React from 'react'
import "./contact.scss"
import {FaFacebookF} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
const Contact = () => {
  return (
    <>
    <div className='contact-container' id='contact'>
        <div className='contact'>
            <div className='info'>
                <p>NEW ARRIVALS</p>
                <p>DISCOUNTS</p>
                <p>CONTACT US</p>
            </div>
            <span>Subscribe to get the latest on sales, new releases and more ...</span>
            <div className='form'>
                <input type='email' placeholder='Email Address'/>
                <button type='button'>Subscribe</button>
            </div>
            <span>Will be use in accordance with our Privacy Policy</span>
            <div className='icon'>
                <div className='icon-icon'><FaFacebookF size={20}/></div>
                <div className='icon-icon'><FaLinkedin size={20}/></div>
                <div className='icon-icon'><FaInstagram size={20}/></div>
                <div className='icon-icon'> <FaTwitter size={20}/></div>
                
                
                
               
            </div>
        </div>
    </div>

    </>
  )
}

export default Contact
