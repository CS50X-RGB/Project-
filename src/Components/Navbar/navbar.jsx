import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.svg';

const Navbar = () => {
    const [toggle, settoggle] = useState(false)
    return (
        <div className='gpt2__navbar'>
            <div className='gpt2__navbar-links'>
                <div className='gpt2__navbar-links-logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='gpt2__navbar-links_container'>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#recipes">Recipes</a></p>
                    <p><a href="#pricings">Pricings</a></p>
                    <p><a href="#features">Features</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
            </div>
            <div className='gpt2__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='gpt2__navbar-menu'>
                {toggle
                    ? <RiCloseLine color="#fff" size={27} onClick={() => settoggle(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => settoggle(true)} />}
                {toggle && (
                    <div className='gpt2__navbar-menu_container scale-up-center'>
                        <div className='gpt2__navbar-menu_container-links'>
                            <p><a href="#home">Home</a></p>
                            <p><a href="#wgpt3">What is GPT3</a></p>
                            <p><a href="#possibilities">Open AI</a></p>
                            <p><a href="#features">Features</a></p>
                            <p><a href="#blog">Library</a></p>
                            <div className='gpt2__navbar-menu_container-menu-sign'>
                                <p>Sign in</p>
                                <button type='button'>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar