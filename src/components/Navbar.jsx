import React from 'react'
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        < nav className='app__navbar' >
            <div className='app__navbar-logo'>
                <h1>S</h1>
            </div>
            <ul className='app__navbar-links'>
                <li><a href='#about'>About</a></li>
                <li><a href='#products'>Products</a></li>
                <li><a href='#order'>Orders</a></li>
                <li><a href='#gallery'>Gallery</a></li>
                <li><a href='#care'>Care</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className='app__navbar-button'>
                <button type='button'>Get In Touch</button>
            </div>
            <div className='app__navbar-smallscreen'>
                <HiMenuAlt1 color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} className='menu_icon' />

                {toggleMenu && (
                    < div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                        <AiOutlineClose fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                        <ul className='app__navbar-smallscreen_links'>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#products'>Products</a></li>
                            <li><a href='#order'>Orders</a></li>
                            <li><a href='#gallery'>Gallery</a></li>
                            <li><a href='#care'>Care</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                )}

            </div>
        </nav >
    )
}

export default Navbar