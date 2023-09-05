import React from 'react'
import {AiOutlineArrowUp} from "react-icons/ai"
import Link from 'next/link'
import Transition from './Transition'

const Top_Finder = () => {
  return (
    <div>
      <a href='#Hero' className=''>
      <div className='fixed w-[70px] h-[70px] rounded-full bg-red-500 z-20 bottom-8 right-8 flex justify-center items-center'> 
      <AiOutlineArrowUp  size="2.5em"/>
      </div>
      </a>
    </div>
  )
}

export default Top_Finder