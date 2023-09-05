import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='flex justify-center h-[190px] bg-[#282d32] w-screen'>
        

        <div className='flex justify-between w-[1240px] text-center'>
            <div className='flex justify-center items-center'>
           <p  className=' text-white text-2xl font-extrabold'>Created by Ibrahim With Love ❤️</p>
           </div>

           <div className='flex justify-between items-center w-[120px]'>
          
        <a href='https://www.linkedin.com/in/ibrahim-khan-961236165'><FaLinkedin size ="3em" color="white"/></a>
        <a href='https://github.com/SlickMik'><BsGithub size ="3em" color="white"/></a>
           </div>
        </div>
        
        
        </div>
    
  )
}

export default Footer