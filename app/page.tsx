'use client';
import Image from 'next/image'
import React from 'react'
import { FaBeer } from 'react-icons/fa';
import {FaLinkedin} from "react-icons/fa";
import {BiPhoneCall} from "react-icons/bi";
import {AiTwotoneMail} from "react-icons/ai";
import { Hero } from '@/Components';
import About from '@/Components/About';
import Skills from '@/Components/Skills';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';
import Projects from '@/Components/Projects';
import Transition from '@/Components/Transition';









export default function Home() {
  return (
    <main>
      
    
       <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />


        
    </main>
  
  )
}
