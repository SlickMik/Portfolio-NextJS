import React from 'react'
import {CiLocationOn} from "react-icons/ci";
import Image from 'next/image';
import {BsPhone} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"

const Contact = () => {
  return (

<section id='Contact'>
<div className='w-full lg:h-screen p-2 bg-white justify-center flex flex-cols pb-24'>
    




    <div className='max-w-[1240px] flex flex-col justify-center items-center h-full'>
    <p className=' font-extrabold text-red-500 uppercase text-3xl pb-6 pt-10'>Contact</p>
    <div className='grid grid-cols-2 gap-5 max-w-[1240px] items-center'>
        <div className='p-6 mr-2 bg-gray-100 sm:rounded-lg'>
            <p className=' text-3xl font-extrabold pb-5 text-slate-800'>Get In Touch</p>
            <p className=' text-gray-500 text-2xl pb-7 font-extrabold'>Fill in the form to start a conversation </p>

            <div className='text-gray-500 flex items-center h-10'>
                <div className='w-10 h-10 tracking-widest'>
                <CiLocationOn size ="2em"/>
                </div>   
                <p className=' font-extrabold'>One Apple Park Way, Cupertino, CA 95014</p>
            </div>
            <div className='text-gray-500 flex items-center h-10'>
                <div className='w-10 h-10 tracking-widest'>
                <AiOutlineMail size ="1.9em"/>
                </div>   
                <p className=' font-extrabold'>muhibrahimkhan19@gmail.com</p>
            </div>
            <div className='text-gray-500 flex items-center h-10'>
                <div className='w-10 h-10 tracking-widest'>
                <BsPhone size ="1.9em"/>
                </div>   
                <p className=' font-extrabold'>+60-16-722-896-9</p>
            </div>
  

        </div>




        <div>

        <form className="p-6 flex flex-col justify-center">
                        <div className="flex flex-col">
                            <label  className="hidden">Full Name</label>
                            <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  text-gray-800 font-semibold border border-red-500 focus:outline-none" />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label className="hidden">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  text-gray-800 font-semibold border border-red-500 focus:outline-none" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <label className="hidden">Number</label>
                            <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white text-gray-800 font-semibold border border-red-500 focus:outline-none" />
                        </div>

                        <button type="submit" className="md:w-32  bg-red-500 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-green-500 transition ease-in-out duration-300">
                            Submit
                        </button>
                    </form>


        </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Contact