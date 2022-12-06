import React from 'react'
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';


const Contact = () => {
    return (
        <div className='app__contact' id='contact'>
            <div className='app__contact-links'>
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#products'>Products</a></li>
                    <li><a href='#order'>Orders</a></li>
                    <li><a href='#gallery'>Gallery</a></li>
                    <li><a href='#care'>Care</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
            <div className='app__contact-text'>
                <h1>SILK</h1>
                <h2>Luxury Scented Candle Co.</h2>
                <ul>
                    <li>Phone: 0432 665 556</li>
                    <li>Address: 123 Kangaroo Lane Melbourne</li>
                    <li>Email: xyz@gmail.com</li>
                </ul>
            </div>
            <div className='app__contact-icons'>
                <a><HiOutlineMail /></a>
                <a><AiOutlineFacebook /></a>
                <a><AiOutlineInstagram /></a>
            </div>
        </div>
    )
}

export default Contact