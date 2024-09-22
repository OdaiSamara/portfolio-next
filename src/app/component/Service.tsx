import React from 'react'

const Service = () => {
    return (
        <div className='container  w-full  mt-20' id='service'>
            <h2 className='text-2xl font-semibold border-solid border-b-2 border-b-slate-950 w-[50px] '>service</h2>
            <p className='p-5'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>

            {/* card srvice */}
            <div >
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                    {/* one */}
                    <div className=" card rounded-lg bg-slate-200 flex items-start p-2 ">

                        <svg className="w-36 h-10 text-slate-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01" />
                        </svg>
                        <div className='ml-5'>
                            <h3 className="text-lg/tight font-medium text-slate-900">Title goes here</h3>
                            <p className="mt-0.5 text-slate-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
                                nesciunt quas non animi.
                            </p>
                        </div>

                    </div>
                    {/* two */}
                    <div className=" card rounded-lg bg-slate-200 flex items-start p-2">

                        <svg className="w-36 h-10 text-slate-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                        </svg>

                        <div className='ml-5'>
                            <h3 className="text-lg/tight font-medium text-slate-900">Title goes here</h3>
                            <p className="mt-0.5 text-slate-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
                                nesciunt quas non animi.
                            </p>
                        </div>

                    </div>
                    {/* three */}
                    <div className=" card rounded-lg bg-slate-200 flex items-start p-2">
                        <svg className="w-36 h-10 text-slate-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
                        </svg>


                        <div className='ml-5'>
                            <h3 className="text-lg/tight font-medium text-slate-900">Title goes here</h3>
                            <p className="mt-0.5 text-slate-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
                                nesciunt quas non animi.
                            </p>
                        </div>
                    </div>
                    {/* one */}
                    <div className=" card rounded-lg bg-slate-200 flex items-start p-2">

                        <svg className="w-36 h-10 text-slate-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z" />
                        </svg>

                        <div className='ml-5'>
                            <h3 className="text-lg/tight font-medium text-slate-900">Title goes here</h3>
                            <p className="mt-0.5 text-slate-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
                                nesciunt quas non animi.
                            </p>
                        </div>

                    </div>
                    {/* two */}
                    <div className=" card rounded-lg bg-slate-200 flex items-start p-2">

                        <svg className="w-36 h-10 text-slate-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                        </svg>
                        <div className='ml-5'>
                            <h3 className="text-lg/tight font-medium text-slate-900">Title goes here</h3>
                            <p className="mt-0.5 text-slate-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
                                nesciunt quas non animi.
                            </p>

                        </div>
                    </div>
                    {/* three */}
                    <div className="card p-2 rounded-lg bg-slate-200 flex items-start ">
                        <svg className="w-36 h-10 text-slate-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                        </svg>
                        <div className='ml-5'>
                            <h3 className="text-lg/tight font-medium text-slate-900">Title goes here</h3>
                            <p className="mt-0.5 text-slate-900">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
                                nesciunt quas non animi.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            {/* card srvice */}
        </div >
    )
}

export default Service
