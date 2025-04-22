import React from 'react'
import ecomIamge from './image/e-commerce.png'

function Project() {
  const projects=[
    {
      image: Image,
      discription:'A e-commerce website.built with react framework.',
      link:'https://e-commerce-website-dev.netlify.app/'
    },
  ]

  return (
    <div>
      <section className='flex flex-col py-20 px-5 justify-center bg-cyan-600 text-white' id='project'>
        <div className='w-full flex justify-center'>
          <div className='flex flex-col py-5 px-8'>
            <h1 className='text-5xl text-fuchsia-400 mb-5 w-[150px] flex justify-center font-bold'>Project</h1>
            <p className=''>these are some of my projects.I have built thes with React,mern and tailwind css,material ui.check them out.</p>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex flex-col justify-evenly md:flex-row px-10 gap-5'>
            {projects.map((project)=>(
            <div className='relative'>
              <img className='h-[300px] w-[500px]' src={ecomIamge} alt='project details in cotent' />
              <div className='project-desc flex items-center'>
                <p className='text-center px-6 py-5'>{project.discription} </p><br/>
                <div className='flex justify-center items-center '><a target='blank' className='btn ' href={project.link}>view</a></div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project