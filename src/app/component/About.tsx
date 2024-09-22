@typescript-eslint/no-unused-vars
import Image from 'next/image'
import React from 'react'
import card from '../../../puplic/bg.jpg'

const About = () => {
    return (
        <div className=' container w-ful mt-20  ' id='about'>
            <h2 className='text-2xl font-semibold border-solid border-b-2 border-b-slate-950 w-[50px] '>About</h2>
            <p className='about-p p-5'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem .</p>

            <div className='flex justify-center ' >

                <div className="about-section  flex  items-center gap-2   md:max-w-xl ">

                    <svg className="w-32 h-32 text-slate-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd" />
                    </svg>

                    <div className="flex flex-col justify-between  p-4 leading-sefont-semibold">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Graphic Designer & Web Developer.</h5>
                        <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                        <div className='about-tabel grid grid-cols-2 gap-20  '>
                            <div className='flex flex-col'>
                                <strong>Birthday:<span className='font-semibold ml-2'>1 Jun 1999</span></strong>
                                <strong>Website:<span className='font-semibold ml-2'>www.portfolio.com</span></strong>
                                <strong>Phone:<span className='font-semibold ml-2'>+963 935694650</span></strong>
                                <strong>City:<span className='font-semibold ml-2'>syria-swida</span></strong>
                            </div>
                            <div className='flex flex-col'>
                                <strong>Age:<span className='font-semibold ml-2'>25</span></strong>
                                <strong>Degree:<span className='font-semibold ml-2'>junior</span></strong>
                                <strong className='about-email'>Email:<span className='font-semibold ml-2 '>odesamara99@gmail.com</span></strong>
                                <strong>Freelance:<span className='font-semibold ml-2'>Availabel</span></strong>
                            </div>

                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default About
