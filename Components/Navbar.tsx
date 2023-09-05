
import Link from 'next/link'
import React from 'react'
import {PiCatDuotone} from 'react-icons/pi'
import Transition from './Transition'
import { Hero } from '.'
import { usePathname } from "next/navigation"
import Contact from './Contact'
import NextLink from 'next/link';

const handleClick = () => {

  <Transition />
}



const Navbar = () => {
  return (

    <div className='fixed h-[80px] bg-slate-900 text-red-500 z-10  w-full flex justify-center'>


      <div className='h-full flex items-center justify-between w-[1240px]'>



      <div>
      <a href="#Hero" className=''>
        <PiCatDuotone size ="4em" />
      </a>
</div>

<div>
        <ul className='w-[400px] p-6'>
          <div className='flex justify-between'>
          <a href='#About'>
            <li className=' text-1xl font-bold uppercase hover:border-b border-red-500'>About</li>
          </a>
          <a href='#Skills'>
            <li className=' text-1xl font-bold uppercase hover:border-b border-red-500'>Skills</li>
          </a>
          <a href="#Projects" onClick={handleClick}>
            <li className='text-1xl font-bold uppercase hover:border-b border-red-500'>Projects</li>
          </a>
          <a href="#Contact" onClick={handleClick}>
            <li className='text-1xl font-bold uppercase hover:border-b border-red-500'>Contact</li>
          </a>
          </div>
        </ul>

        </div>


        </div>


    </div>
  )
}

export default Navbar