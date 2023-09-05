import React from 'react'
import Image from 'next/image'

const About = () => {
  return (


    <section id='About'>

    <div className='w-screen h-screen bg-gray-100'>
    

      <div className='flex justify-center h-full'>


    <div className='max-w-[1240px] sm:flex grid grid-cols-2 '>
        <div className=' content-center sm:col-auto items-center flex text-left'>

<div className=''>
          <p className='uppercase font-extrabold text-2xl tracking-widest text-[#ff4848]'>
            About
          </p>
          <p className='py-4 text-3xl font-extrabold bg-gradient-to-r from-red-500 to-slate-400 inline-block text-transparent bg-clip-text'>Who I Am</p>
          <p className='py-2 text-slate-600 font-bold'>
          A aspiring full-stack developer from the valleys of Lahore, <span className=' text-green-700'>Pakistan</span>. A true professional 😉that has a penchant for making light out of irredeemable situations. A creative problem solver at heart with an eye for desgin and all things <span className=' bg-gradient-to-r from-green-600 to bg-red-500 inline-block text-transparent bg-clip-text'> AESTHETIC</span> 
          </p>
          <p className='py-2 text-slate-600 font-bold'>
          You can usually find me on the weekends watching re-runs of Suits, or creating webistes that are seamless yet immersive experiences. As said by Dieter Rams " Good Design Is Honest" but I'd  preclude that quote with a preface: "Not All Honest Design Is Good". So, why not give me a shot, you'll enjoy having me as an employee.  PSA: I wish I was as handsome as the guy in the image
          </p>

         
            <a href='#Projects' className='py-2 text-slate-600 font-bold underline cursor-pointer'>
              Check out some of my latest projects.
          </a>
       </div>
        </div>
        <div className='lg:w-full sm:w-[40px] m-auto shadow-xl shadow-gray-400 rounded-full flex items-center justify-center hover:scale-105 ease-in duration-300 hover:-rotate-12 overflow-hidden bg-gradient-to-r from-slate-800 to-red-500'>
        <Image
         src="/Guy.png" 
         width={1000}
      height={1000}
         alt="Man  
          "/>
        </div>
      </div>

      </div>

      </div>
      </section>

  )
}

export default About