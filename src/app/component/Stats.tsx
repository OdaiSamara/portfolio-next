import React from 'react'

const Stats = () => {
    return (
        <div className='stats container mt-20 w-full'>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">


                    <p className="states-p mt-4 text-gray-500 sm:text-xl pb-20">
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                    </p>
                </div>

                <dl
                    className="mg-6 grid grid-cols-1 gap-4 divide-y divide-slate-600 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
                >
                    <div className="flex flex-col px-4 py-8 text-center">


                        <dt className="order-last text-lg font-medium text-gray-500 flex justify-center items-center">
                            <svg className="w-6 h-6 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h.01M8.99 9H9m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM6.6 13a5.5 5.5 0 0 0 10.81 0H6.6Z" />
                            </svg>
                            Happy Clients</dt>

                        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">232</dd>

                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500 flex justify-center items-center">
                            <svg className="w-6 h-6 text-sky-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m8-2h3m-3 3h3m-4 3v6m4-3H8M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 12v6h8v-6H8Z" />
                            </svg>


                            Projects </dt>

                        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">521</dd>
                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500 flex justify-center items-center">
                            <svg className="w-6 h-6 text-sky-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z" />
                            </svg>


                            Hours Of Support</dt>

                        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">1453</dd>
                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500 flex justify-center items-center">
                            <svg className="w-6 h-6 text-sky-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>


                            Hard Workers</dt>

                        <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">32</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default Stats
