import React from 'react'
import Image from 'next/image'
import {FaReact} from 'react-icons/fa'
import {BiLogoCss3} from "react-icons/bi"
import {AiOutlineHtml5} from 'react-icons/ai'
import {IoLogoJavascript} from 'react-icons/io'
import {TbBrandNextjs} from 'react-icons/tb'
import {TbBrandXamarin} from 'react-icons/tb'
import {BiLogoFlutter} from 'react-icons/bi'
import {SiTypescript} from 'react-icons/si'
import {BiLogoGithub} from 'react-icons/bi'


const Skills = () => {
  return (

<section id='Skills'> 
 
    <div id='skills' className='w-full h-[500px] p-2 text-center'>
 
          <p className='text-3xl uppercase pb-5 font-extrabold text-red-500 pt-11'>Skills</p>
          
       <div className='max-w-[1240px] mx-auto flex justify-center h-full'>
      

      
  
      <div className='pt-4 pb-12 grid grid-cols-4 text-gray-300  w-[1240px] mb-12'>

<div className='flex justify-center'>
  <div className=' hover:text-red-500 ease-in duration-100 items-center'>
       <FaReact size ="8em"/>
  </div>
</div>

<div className='flex justify-center'>
  <div className=' hover:text-red-500 ease-in duration-100 items-center'>
       <BiLogoCss3 size ="8em"/>
  </div>
</div>


<div className='flex justify-center'>
  <div className=' hover:text-red-500 ease-in duration-100 items-center'>
       <IoLogoJavascript size ="8em"/>
  </div>
</div>


<div className='flex justify-center'>
  <div className=' hover:text-red-500 ease-in duration-100 items-center'>
       <TbBrandNextjs size ="8em"/>
  </div>
</div>

<div className='flex justify-center'>
  <div className=' hover:text-red-500 ease-in duration-100 items-center'>
       <TbBrandXamarin size ="8em"/>
  </div>
</div>

<div className='flex justify-center'>
  <div className=' hover:text-red-500 ease-in duration-100 items-center'>
       <BiLogoFlutter size ="8em"/>
  </div>
</div>

<div className='flex justify-center'>
  <div className=' hover:text-red-500 ease-in duration-100 items-center'>
       <SiTypescript size ="8em"/>
  </div>
</div>

<div className='flex justify-center'>
  <div className=' hover:text-red-500 ease-in duration-100 items-center'>
       <AiOutlineHtml5 size ="8em"/>
  </div>
</div>











      </div>
       </div>
       
        </div>
        </section>
  )
}

export default Skills