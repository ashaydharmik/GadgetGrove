import React from 'react'
import Contact from './Contact/Contact'
import "./footer.scss"
import {FaLocationArrow} from "react-icons/fa"
import {BsFillTelephoneFill} from "react-icons/bs"
import {GrMail} from "react-icons/gr"
import paymentImg from "../asset/payments.png"
import { useNavigate } from 'react-router-dom'

const Footer = ({categories}) => {

  const navigate = useNavigate();
  return (
    <div>
      <Contact/>

      <div className='footer-container'>
        <div className='footer'>
            <div className='col'>
                <div className='title'>About</div>
                <div className='text'>Our Mission

We're on a mission to reach out every customer needs. Whether it's finding the latest electronic trends, upgrading your personal accessories, or discovering innovative gadgets, we're here to help you make the best choices.

</div>
            </div>
            <div className='col'>
                <div className='title'>Contact</div>
                <div className='icon'>
                    <FaLocationArrow className='one'/>
                    <p>Bengaluru, Karnataka-45000</p>
                </div>
                <div className='icon'>
                    <BsFillTelephoneFill/>
                    <p>Phone : 9333240336</p>
                </div>
                <div className='icon'>
                    <GrMail/>
                    <p>ashaydharmik@gmail.com</p>
                </div>
            </div>
    
            <div className='col'>
                <div className='title'>Categories</div>
                <div className='text'>Earpods</div>
                <div className='text'>Headphones</div>
                <div className='text'>Smart Watches</div>
                <div className='text'>Wireless Speakers</div>
            </div>
               
            <div className='col'>
            <div className='title'>Pages</div>
                <div className='text'><a href="/">Home</a></div>
                <div className='text'>About</div>
                <div className='text'><a href="#comeToCategory">Category</a></div>
                <div className='text'>Contact Us</div>
            </div>
        </div>
      <div className='footer-bottom'>
        <div className='footer-final'>
            <p>© 2023 [GadgetGrove]. All Rights Reserved.The content and images on this website are protected by copyright law.</p>
            <div className='paymentImg'>

            <img src={paymentImg} alt=''/>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
