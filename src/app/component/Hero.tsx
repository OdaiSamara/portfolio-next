import React from 'react'
const Hero = () => {
    return (
        <div className='relative '>
              {/* @typescript-eslint/no-unused-vars */}
            <div className='bg-sky-950  absolute -top-20  left-0 -z-55  w-full h-full '></div>
            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="  max-w-xl flex flex-col justify-center items-center ml-[50%]  ">
                    <h1 className="text-3xl  font-extrabold text-white sm:text-5xl">
                        Odai Samara
                    </h1>
                    <p className="typeone mt-4 text-white font-semibold sm:text-3xl/relaxed">
                        I'am <span className='typetext '>Front-End</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Hero
