import React from 'react'

const Contact = () => {
    return (
        <div className='container w-ful mt-20 ' id='contact'>
            <h2 className='text-2xl font-semibold border-solid border-b-2 border-b-slate-950 w-[50px] '>Contact</h2>
            <p className='p-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>


            <section >
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="contact-col  grid grid-cols-1 gap-x-5 gap-y-8 lg:grid-cols-5">
                        {/* Address */}
                        <div className="con-width lg:col-span-2 lg:py-12  rounded-lg bg-gray-200  shadow-lg">
                            <div className="flex items-center  p-4 sm:p-6 lg:p-4">
                                <svg className="con-svg w-10 h-10 p-2 text-white bg-slate-900 rounded-full " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                                </svg>


                                <div className='ml-2'>
                                    <h3 className="font-medium sm:text-lg ">
                                        Addres
                                    </h3>

                                    <p className=" text-gray-700">
                                        thora Street,syria-swida
                                    </p>


                                </div>
                            </div>
                            {/* call us */}
                            <div className="flex items-center  p-4 sm:p-6 lg:p-4">
                                <svg className="con-svg w-10 h-10 p-2 text-white bg-slate-900 rounded-full " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                                </svg>



                                <div className='ml-2'>
                                    <h3 className="font-medium sm:text-lg ">
                                        Call Us
                                    </h3>

                                    <p className=" text-gray-700">
                                        +963 935694650
                                    </p>


                                </div>
                            </div>
                            {/* Email us */}
                            <div className="flex items-center  p-4 sm:p-6 lg:p-4">
                                <svg className="con-svg w-10 h-10 p-2 text-white bg-slate-900 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                                </svg>



                                <div className='ml-2'>
                                    <h3 className="font-medium sm:text-lg ">
                                        Email Us
                                    </h3>

                                    <p className=" text-gray-700">
                                        odesamara99@gmail.com
                                    </p>


                                </div>
                            </div>
                            {/* maps */}
                            <div className='flex items-center  p-4 sm:p-6 lg:p-4'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53718.42862625177!2d36.61754015733072!3d32.7019495935233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151bd56f8dade971%3A0x208cd813f56c273a!2z2KfZhNiz2YjZitiv2KfYodiMINiz2YjYsdmK2Kc!5e0!3m2!1sar!2s!4v1726745514677!5m2!1sar!2s" width="400" height="300" className='con-maps '></iframe>
                            </div>


                        </div>
                        {/* form */}
                        <div className="con-width rounded-lg bg-gray-200 p-8 shadow-lg  lg:col-span-3 lg:p-12">
                            <form action="#" className="space-y-12">


                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label >Email</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label >Phone</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label >Name</label>
                                    <input type="text" className='w-full rounded-lg border-gray-200 p-3 text-sm' />
                                </div>


                                <div>
                                    <label >Message</label>

                                    <textarea
                                        className="w-full h-[200px] rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Message"

                                        id="message"
                                    ></textarea>
                                </div>

                                <div className="mt-4 text-center">
                                    <button
                                        type="submit"
                                        className="inline-block w-full  rounded-lg bg-slate-900 px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Send Enquiry
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
