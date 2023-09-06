import React from 'react'
import Image from 'next/image'

const About = () => {
  return (


    <section id='About'>

    <div className='w-screen h-screen bg-gray-100'>
    

      <div className='flex justify-center h-full'>


    <div className='max-w-[1240px] sm:flex sm:flex-col lg:grid lg:grid-cols-2 '>
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
          Lorem ipsum dolor sit amet. Qui maxime quibusdam aut quisquam totam eos voluptas voluptatem cum nostrum aliquigd ex dolore harum et voluptatem odio. Qui doloremque aliquam eos quasi magni 33 quis modi in accusamus odit ea fugiat veniam. Cum quidem dicta et voluptates velit et animi quos.
          </p>

         
            <a href='#Projects' className='py-2 text-slate-600 font-bold underline cursor-pointer'>
              Check out some of my latest projects.
          </a>
       </div>
        </div>
        <div className='lg:w-[400px] sm:w-[40px] m-auto shadow-xl shadow-gray-400 rounded-full flex items-center justify-center hover:scale-105 ease-in duration-300 hover:-rotate-12 overflow-hidden bg-gradient-to-r from-slate-800 to-red-500'>
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