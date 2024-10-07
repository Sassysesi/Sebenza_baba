import React from 'react'
import './Navbar.css'
import logo from '../../assets/sebenzaBabaLogo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="image of the brand logo" className='logo' />
        
        <ul>
            <li>Home</li>
            <li>Partners</li>
            <li>For Employers</li>
        </ul>

        <button className='sign-in-btn'>
            SIGN IN
        </button>
    </div>
  )
}

export default Navbar
