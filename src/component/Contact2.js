import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact2() {
    const form = useRef(); 

    const sendEmail = (e) => {
        e.preventDefault();
  
        emailjs
        .sendForm('service_43drdop', 'template_c1w2x04', form.current, {
            publicKey: 'TAEzw4kB2WLb1ehmQ',
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <>
            <div className='flex max-w-screen' id='contact'>
                <div className='flex flex-col md:flex-row md:space-x-6 justify-around space-y-6 md:space-y-0 bg-cyan-800 w-full max-w-full px-8 sm:p-12 text-white overflow-hidden'>
                    <div className='flex flex-col space-y-6 justify-around'>
                        <div>
                            <h1 className='font-bold text-5xl text-fuchsia-400 tracking-wide'>Contact Us</h1>
                            <p className='pt-6 text-cyan-100 text-sm '>if you want to discuss more in details,please contact me</p>
                        </div>
                        <div className='flex flex-col space-y-6'>
                            <div className='inline-flex space-x-2 items-center'>
                                <ion-icon name="call" className='text-teal-300 text-xl'></ion-icon>
                                <span>+91 7904857050</span>
                            </div>
                            <div className='inline-flex space-x-2 items-center'>
                                <ion-icon name="mail" className='text-teal-300 text-xl'></ion-icon>
                                <span>madhandknm347@gmail.com</span>
                            </div>
                            <div className='inline-flex space-x-2 items-center'>
                                <ion-icon name="pin" className='text-teal-300 text-xl'></ion-icon>
                                <span>Salem,TamilNadu</span>
                            </div>
                        </div>
                        <div className='flex space-x-4 text-3xl'>
                            <a href='https://www.linkedin.com/in/madhankumar-d-686907292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><ion-icon name="logo-linkedin"></ion-icon></a>
                            <a href='https://www.instagram.com/urqspdl_madhan_44?igsh=MTE1Y2g0YmltZWJrOA==&utm_source=ig_contact_invite'><ion-icon name="logo-instagram"></ion-icon></a>
                            <a href='https://github.com/madhankumar-2025'><ion-icon name="logo-github"></ion-icon></a>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28'></div>
                        <div className='absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16'></div>
                        <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-150 sm:pb-4'>
                            <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
                                <div>
                                    <label htmlFor='' className='text-sm'>Your name</label>
                                    <input type='text' name='name' placeholder='your name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
                                </div>

                                <div>
                                    <label htmlFor='' className='text-sm'>E-mail Address</label>
                                    <input type='email' name='email' placeholder='E-mail address' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
                                </div>

                                <div>
                                    <label htmlFor='' className='text-sm'>Message</label>
                                    <textarea placeholder='message' name='message' rows={4} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
                                </div>
                                <button type='submit' className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact2;
