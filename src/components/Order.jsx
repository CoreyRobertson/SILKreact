import React from 'react'
import './order.css';

const Order = () => {
    return (
        <div className='app__order app__bg' id='order'>
            <div className='app__order-container'>
                <div className='app__order-text'>
                    <h2>Place An Order</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='app__order-form'>
                    <form action="https://formsubmit.co/coreystephenr@gmail.com" method="POST">
                        <input className='text' type="text" name='Name' placeholder='Your Name' required></input>
                        <input className='text' type="text" name='Phone Number' placeholder='Your Phone Number (Optional)'></input>
                        <input className='text' type="email" name="email" placeholder="Email Address" required></input>
                        <input className='text' type="text" name='order' placeholder='Order Details' required></input>
                        <input className='button' type="submit"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Order