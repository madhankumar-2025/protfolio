import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";

function Main() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <div>
                <nav className="bg-cyan-700 border-gray-200 dark:bg-gray-900 relative w-full z-10 top-0 left-0">
                    <div className="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-4">
                        <span className="self-center text-2xl font-bold whitespace-nowrap text-white">MADHANKUMAR D</span>
                        
                        <button
                            className='flex text-black md:hidden'
                            onClick={toggleMenu}
                        >
                            <TiThMenu size={30} />
                        </button>

                        <div className='hidden md:block'>
                            <ul className="font-medium text-white flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse">
                                <li><a href='/'>Home</a></li>
                                <li><a href='#about'>About</a></li>
                                <li><a href='#project'>Project</a></li>
                                <li><a href='#contact'>Contact</a></li>
                            </ul>
                        </div>

                        {isMenuOpen && (
                            <div className='absolute top-16 left-0 right-0 flex justify-center backdrop-blur-lg bg-cyan-700 p-4 md:hidden'>
                                <ul onClick={toggleMenu} className="font-bold text-teal-400 flex justify-center flex-col space-y-4">
                                    <li><a href='/'>Home</a></li>
                                    <li><a href='#about'>About</a></li>
                                    <li><a href='#project'>Project</a></li>
                                    <li><a href='#contact'>Contact</a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Main;
