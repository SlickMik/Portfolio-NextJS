'use client';
import React from 'react'
import {motion} from 'framer-motion'


const Transition = () => {
  return (

    <div>
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-white'
      initial = {{x:"100%", width:"100%"}}
      animate = {{x:"0%",width:"0%"}}
      transition={{delay:0.2, duration:0.8, ease:"easeInOut"}}
      />



<motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-red-500'
      initial = {{x:"100%", width:"100%"}}
      animate = {{x:"0%",width:"0%"}}
      transition={{duration:0.8, ease:"easeInOut"}}
      />

</div>
  )
}

export default Transition