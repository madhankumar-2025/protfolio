import React, { useEffect, useRef } from 'react';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoMdCodeDownload } from "react-icons/io";
import Typed from 'typed.js';
import jsPDF from 'jspdf';

function Hero() {
  const resumeRef = useRef();

  useEffect(() => {
    const typingeffect = new Typed(".typedtext", {
      strings: ['web developer', 'frontend developer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
    });

    return () => {
      typingeffect.destroy();
    };
  }, []);

  const social = {
    instagram: 'https://www.instagram.com/urqspdl_madhan_44?igsh=MTE1Y2g0YmltZWJrOA==&utm_source=ig_contact_invite',
    linkedin: 'https://www.linkedin.com/in/madhankumar-d-686907292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/madhankumar-2025',
    whatsapp: 'https://whatsapp.com/dl/',
  }

  const generatePDF = async () => {
    const imageUrl = 'https://i.ibb.co/3YRJSXHG/Whats-App-Image-2025-03-21-at-4-48-14-PM.jpg';
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Enable CORS
  
    img.onload = () => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (img.height * imgWidth) / img.width;
  
      pdf.addImage(img, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save('Madhankumar_Resume.pdf');
    };
  
    img.src = imageUrl;
  };
  

  return (
    <div>
      <section ref={resumeRef} className='relative flex flex-col md:flex-row py-16 bg-cyan-600 space-x-10 justify-center overflow-hidden'>
        <div className='md:w-1/2 z-10 flex sm:pl-16 flex-col'>
          <h1 className='text-white pt-16 text-6xl font-hero-font'>
            Hi, I'm <br /><span className="text-cyan-950">MADHANKUMAR</span>
            <p className='text-4xl'>I am <span className='typedtext text-cyan-950'></span></p>
          </h1>
          <div className='flex py-10'>
            <a href={social.instagram} aria-label="Instagram" className='pr-5 hover:text-red-700'>
              <FaSquareInstagram size={40} />
            </a>
            <a href={social.linkedin} aria-label="LinkedIn" className='pr-5 hover:text-blue-700'>
              <FaLinkedin size={40} />
            </a>
            <a href={social.github} aria-label="GitHub" className='pr-5 hover:text-white'>
              <FaGithubSquare size={40} />
            </a>
            <a href={social.whatsapp} aria-label="WhatsApp" className='hover:text-green-700'>
              <FaWhatsappSquare size={40} />
            </a>
          </div>

          <div className='flex space-x-4 py-6'>
            <button
              onClick={() => generatePDF()}
              className='bg-cyan-400 flex flex-row items-center text-teal-950 border-2 rounded-3xl border-cyan-500 backdrop-blur-lg px-4 py-2 font-bold hover:bg-cyan-300 transition'
            >
              Download CV <IoMdCodeDownload size={24} className='ml-2' />
            </button>
            <button
              className='bg-white flex flex-row items-center text-cyan-800 border-2 rounded-3xl border-cyan-400 px-4 py-2 font-bold hover:bg-gray-200 transition'
            ><a href='https://i.ibb.co/3YRJSXHG/Whats-App-Image-2025-03-21-at-4-48-14-PM.jpg'>
              View CV
            </a>
            </button>
          </div>
        </div>

        <div className='relative'>
          <img className='relative z-10 md:w-2/3 sm:p-4 lg:ml-32' src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png" alt="developer" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
