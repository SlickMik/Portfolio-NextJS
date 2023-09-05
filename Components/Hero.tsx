'use client';

import Image from 'next/image'
import { FaBeer } from 'react-icons/fa';
import {FaLinkedin} from "react-icons/fa";
import {BiPhoneCall} from "react-icons/bi";
import {AiTwotoneMail} from "react-icons/ai";
import Typewriter from 'typewriter-effect';
import {PiCatDuotone} from 'react-icons/pi';
import { useEffect, useState } from 'react';
import {MdOutlineContactPage} from 'react-icons/md';
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition'






const Hero = () => {



  return (
    <section id ='Hero'>
    <div className='flex text-center w-full h-screen justify-center items-center bg-slate-900 '>




     <div className='flex max-w-[1240px] w-full h-full mx-auto p-5 items-center justify-center' >

      
   
    <div className=''>
     <p className='uppercase lg:text-sm lg:tracking-widest text-gray-600 lg:pb-4 '>Hello, Welcome to my portfolio</p>
     <h1 className='pb-4 sm:text-[19px]'>I'm <span className='text-red-500 '>Ibrahim</span></h1>

     <div className=''>



     <h1 className=' text-red-500 pb-4'>
     <Typewriter
  options={{
    strings: ['Front-End', 'Back-End','Full-Stack'],
    autoStart: true,
    loop: true,
    
  }}
/>
</h1>
     </div>
    
     
   

 <p className='uppercase border-b-8 border-red-500 font-extrabold text-8xl sm:text-xl'>developer<span>🚀</span></p>


      <div className='flex justify-between pt-9 text-red-500'>
  
      <div className='group rounded-lg border border-transparent px-2 py-1 transition-colors hover:scale-150 ease-in duration-300'>
        <a href='https://www.linkedin.com/in/ibrahim-khan-961236165'><FaLinkedin size ="2em"/></a>
      </div>
      <div className='group rounded-lg border border-transparent px-2 py-1 transition-colors hover:scale-150 ease-in duration-300'>
        <p><BiPhoneCall size ="2em"/></p>
      </div>
      <div className='group rounded-lg border border-transparent px-2 py-1 transition-colors hover:scale-150 ease-in duration-300'>
        <MdOutlineContactPage size ="2em"/>
      </div>
      <div className='group rounded-lg border border-transparent px-2 py-1 transition-colors hover:scale-150 ease-in-out duration-500'>
        <FaBeer size ="2em"/>
      </div>
     
  </div>
  
      


  </div>

  
<div className='z-0 max-w-[200px] overflow-visible'>
  {/* <motion.div className='animate-Cloud'>

  <img src='Cloud.png'/>

  </motion.div>
   */}



  {/* <div className=' absolute left-20  w-[500px] h-[500px] bg-orange-500 rounded-full hover:animate-Blob'></div>
  <div className=' absolute left-5  w-[500px] h-[500px] bg-blue-500 rounded-full hover:animate-bounce'></div>
  <div className=' absolute left-10 top-10 w-[500px] h-[500px] bg-red-500 rounded-full'></div> */}
  </div>
 

      </div>


  
     </div>
     </section>
  )
}

export default Hero