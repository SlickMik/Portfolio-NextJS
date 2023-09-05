import React from 'react'
import Image from 'next/image'
import portfolio_1 from '../public/Portfolio_1.jpg'

const Projects = () => {
  return (

    <section id='Projects'>
    <div className='w-screen h-max flex justify-center p-14 bg-gray-100'>
        
        <div className='w-max-[1240px] justify-center text-center'>

            <p className='font-extrabold text-red-500 text-3xl uppercase pb-12'>Projects</p>
            
            <div className='grid grid-cols-2 gap-8'>
       



{/* 
       <div className='rounded-lg w-max'>
        
          <Image src={portfolio_1} alt ='/'className=' hover:blur-lg'/>
          <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <p className=' font-extrabold text-3xl'> Project 1</p>
          </div>

       </div> */}


       <div className='relative flex items-center justify-center h-auto w-full  rounded-xl group hover:bg-blur-md'>
    <Image className='rounded-xl group-hover:blur-3xl ease-in-out duration-300' src={portfolio_1} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <p className='text-2xl font-extrabold text-red-500 tracking-wider text-center uppercase'>Project 1</p>
        <p className='pb-4 pt-2 text-black text-center'>Sample Product Description Blah Blah Blah Blah Blah Blah</p>
        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">View Demo</button>
      
    </div>
 </div>



 <div className='relative flex items-center justify-center h-auto w-full  rounded-xl group hover:bg-blur-md'>
    <Image className='rounded-xl group-hover:blur-3xl ease-in-out duration-300' src={portfolio_1} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <p className='text-2xl font-extrabold text-red-500 tracking-wider text-center uppercase'>Project 2</p>
        <p className='pb-4 pt-2 text-black text-center'>Sample Product Description Blah Blah Blah Blah Blah Blah</p>
        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">View Demo</button>
      
    </div>
 </div>



 <div className='relative flex items-center justify-center h-auto w-full  rounded-xl group hover:bg-blur-md'>
    <Image className='rounded-xl group-hover:blur-3xl ease-in-out duration-300' src={portfolio_1} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <p className='text-2xl font-extrabold text-red-500 tracking-wider text-center uppercase'>Project 3</p>
        <p className='pb-4 pt-2 text-black text-center'>Sample Product Description Blah Blah Blah Blah Blah Blah</p>
        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">View Demo</button>
      
    </div>
 </div>


 <div className='relative flex items-center justify-center h-auto w-full rounded-xl group'>
    <Image className='rounded-xl group-hover:blur-3xl ease-in-out duration-300' src={portfolio_1} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <p className='text-2xl font-extrabold text-red-500 tracking-wider text-center uppercase'>Project 4</p>
        <p className='pb-4 pt-2 text-black text-center'>Sample Product Description Blah Blah Blah Blah Blah Blah</p>
        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">View Demo</button>
      
    </div>
 </div>

{/* 
       <div className='rounded-lg w-max object-cover'>  <Image src={portfolio_1} alt ='/'className=' hover:blur-lg'/></div>



       <div className='rounded-lg w-max object-cover'>  <Image src={portfolio_1} alt ='/'className=' hover:blur-lg'/></div> */}

       
              {/* <div className='bg-gray-100 shadow-md rounded-lg p-5 justify-center items-center max-w-[550px]'> 
              <div className='items-center flex justify-center'>  
          <img src='Man.jpg' className='rounded-lg w-max'/>
          </div>
          <div className=' text-left text-black'>
          <p className='pt-2 font-extrabold'>Project 1</p>
            <p>Lorem ipsum dolor sit amet. Eum consequatur totam qui deserunt asperiores eum earum voluptatem id officiis expedita id minus galisum?</p>
            <p>Lorem ipsum dolor sit amet. Eum consequatur </p>

            <div className='pt-5'>

            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">View Demo</button>
            </div>
          
          </div>

              </div>


              <div className='bg-gray-100 shadow-md rounded-lg p-5 justify-center items-center max-w-[550px]'> 
              <div className='items-center flex justify-center'>  
          <img src='Man.jpg' className='rounded-lg w-max'/>
          </div >
          <div className=' text-left text-black'>
            <p className='pt-2 font-extrabold'>Project 2</p>
            <p>Lorem ipsum dolor sit amet. Eum consequatur totam qui deserunt asperiores eum earum voluptatem id officiis expedita id minus galisum?</p>
            <p>Lorem ipsum dolor sit amet. Eum consequatur </p>

            <div className='pt-5'>
           
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">View Demo</button>
            </div>
          
          </div>

              </div>



              <div className=' bg-gray-100 shadow-md rounded-lg p-5 justify-center items-center max-w-[550px] s'> 
              <div className='items-center flex justify-center'>  
          <img src='Man.jpg' className='rounded-lg w-max'/>
          </div>
          <div className=' text-left text-black'>
          <p className='pt-2 font-extrabold'>Project 3</p>
            <p>Lorem ipsum dolor sit amet. Eum consequatur totam qui deserunt asperiores eum earum voluptatem id officiis expedita id minus galisum?</p>
            <p>Lorem ipsum dolor sit amet. Eum consequatur </p>

            <div className='pt-5'>
            
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">View Demo</button>
            </div>
          
          </div>

              </div>



              <div className='bg-gray-100 shadow-md rounded-lg p-5 justify-center items-center max-w-[550px]'> 
              <div className='items-center flex justify-center'>  
          <img src='Man.jpg' className='rounded-lg w-max'/>
          </div>
          <div className=' text-left text-black'>
          <p className='pt-2 font-extrabold'>Project 4</p>
            <p>Lorem ipsum dolor sit amet. Eum consequatur totam qui deserunt asperiores eum earum voluptatem id officiis expedita id minus galisum?</p>
            <p>Lorem ipsum dolor sit amet. Eum consequatur </p>

            <div className='pt-5'>
           
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">View Demo</button>
            </div>
          
          </div>

              </div> */}


            </div>
            </div>


        </div>
        </section>
  )
}

export default Projects