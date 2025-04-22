import React from 'react'

function About() {
  return (
    <div>  
        <section className='flex flex-col md:flex-row bg-cyan-800 px-5' id='about'>
            <div className='md:w-1/3 flex sm:justify-center py-3 m-10'>
                <img src='https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-business-portfolio-3d-character-illustration-png-image_10204176.png' alt='my details in about content'/>
            </div>
            <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center pl-14 text-white'>
                <h1 className='text-4xl text-fuchsia-400 mb-5 w-[180px] font-bold'>About me</h1>
                <p className='pb-5'>Hi, I'm Madhankumar , i'm frontend developer with a focus building dynamic and responsive web applicatins using react.js.</p> 
                <p className='pb-5'>I've honed my skills in html,css,javascript and react.as well as intergrating APIs to create seamless and interactive web expreiences.</p> 
                <p className='pb-5'>I'll useing react framework library components it likes tailwindui,material ui and bootstrap using create responsive website.</p>
                <p className='pb-5'>i'm alwaysstriving to up-to-date with the latest treands and best practices in frontend development and enjoy tackling challengings problems while constantly improving my codin skills.</p>
            </div>
            </div>
        </section>
    </div>
  )
}

export default About