import React from 'react'
import './intro.css';
import candle1 from '../assets/candle1.jpg'
import candle2 from '../assets/candle2.jpg'
import candle3 from '../assets/candle3.jpg'

const Intro = () => {
    return (
        <div className='app__intro'>
            <div className='app__intro-text'>
                <h1>SILK</h1>
                <h2>Luxury Scented Candle Co.</h2>
            </div>
            <div className='app__intro-image'>
                <img className='intro_image' src={candle3}></img>
            </div>
        </div >
    )
}

export default Intro