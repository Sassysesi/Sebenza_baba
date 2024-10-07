import React from 'react'


import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'

import './SignUpSection.css'
import bowingCartoon from '../../assets/bowingCartoon.jpg'
import pointer from '../../assets/pointer.jpg'

const SignUpSection = () => {
  return(
    <div className='wrapper' >
      <div className="form-box login">
        <form action="">
          <h1>Sign Up</h1>
          <p>Don't have an account? We got you!</p>

          <div className="input-box">
            <label htmlFor="firstname">First name</label>
            <input type="text" required />
          </div>

          <div className="input-box">
            <label htmlFor="lastname">Last name</label>
            <input type="text" required />
          </div>

          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input type="email" required />
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input type="password" required />
          </div>

          <div className="input-box">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" required />
          </div>

          <button className="submit-btn" type="submit" >Submit</button>

          <img src={bowingCartoon} alt="image of cartoon bowing" className='bowingCartoon' />
          <img src={pointer} alt="image of cartoon pointing" className='pointer' />

        


        </form>
      </div>
    
    </div>
  );
};

export default SignUpSection

