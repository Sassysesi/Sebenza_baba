import React from 'react'
import './Features.css'
import sebenzaFind from '../../assets/sebenzaFind-cartoon-img.jpg'
import sebenzaBuild from '../../assets/sebenza-build-cartoon.jpg'
import sebenzaConnect from '../../assets/connectImage.jpg'

const Features = () => {
  return (
    <div className='features'>

        <div className='column'>
            <button className='sebenza-find-btn'>SebenzaFind</button>
            
            <img src={sebenzaFind} alt="image of job applications" className='sebenzaFind-img' />
            <p className='sebenzaFind-p'>Find and apply for jobs!</p>
            
        
        </div>

        <div className='column'>

            <button className='sebenzaBuild-btn'>SebenzaBuild</button>

            <img src={sebenzaBuild} alt="image of person 'build' another" className='sebenzaBuild-img'/>
            <p className='sebenzaBuild-p'>Build Yourself!</p>
            



        </div>

        <div className='column'>
            <button className='sebenzaConnect-btn'>SebenzaConnect</button>

            <img src={sebenzaConnect} alt="image of people connecting" className='sebenzaConnnect-img' />
            <p className='sebenzaConnect-p'>Join your community!</p>

        </div>
            


        
      
    </div>
  )
}

export default Features
