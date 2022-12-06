import React from 'react'
import './products.css';
import candleglass from '../assets/candleglass.jpg'
import diffuser from '../assets/diffuser.jpg'

const Products = () => {
    return (
        <div className='app__products' id='products'>
            <h1 className='app__products-title'>Our Products</h1>
            <div className='app__products-card_container'>
                <div className='product_card'>
                    <div className='card_circle'></div>
                    <div className='card_content'>
                        <h2>Scented Candles.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className='card_button'><a href=''>See More.</a></p>
                    </div>
                    <img src={candleglass}></img>
                </div>
                <div className='product_card'>
                    <div className='card_circle'></div>
                    <div className='card_content'>
                        <h2>Reed Diffusers.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className='card_button'><a href=''>See More.</a></p>
                    </div>
                    <img src={diffuser}></img>
                </div>
            </div>
        </div>
    )
}

export default Products