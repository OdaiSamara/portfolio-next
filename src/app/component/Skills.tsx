
const Skills = () => {
    return (
        <div className='container mt-20 w-ful skills' id='Skills'>
            <h2 className='text-2xl font-semibold border-solid border-b-2 border-b-slate-950 w-[50px] '>Skills</h2>
            <p className='p-5'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>

            <div >

                <div className="flex  items-center  md:flex-row md:max-w-xl ">

                    <div className="  flex flex-col justify-between p-4 leading-normal">

                        <div className='skills-protwo grid grid-cols-2  '>
                            <div className='flex flex-col  '>
                                {/* progrees */}
                                <span>Html</span>
                                <div className="skills-width w-96 bg-gray-900 rounded-full ">
                                    <div className=" progress bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full prog-100"> 100%</div>
                                </div>
                                <span className="mt-5">Css</span>
                                <div className="skills-width w-96 bg-gray-900 rounded-full ">
                                    <div className="progress bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full prog-90"> 90%</div>
                                </div>
                                <span className="mt-5">JavaScript</span>
                                <div className="skills-width w-96 bg-gray-900 rounded-full  ">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full prog-75"> 75%</div>
                                </div>
                                {/* progrees */}
                            </div>
                            <div className='skills-progress flex flex-col ml-60 '>
                                {/* progrees */}
                                <span>ReactJs</span>
                                <div className="skills-width w-96 bg-gray-900 rounded-full ">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full prog-80"> 80%</div>
                                </div>
                                <span className="mt-5">NextJs</span>
                                <div className="skills-width w-96 bg-gray-900 rounded-full ">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full prog-90"> 90%</div>
                                </div>
                                <span className="mt-5">PhotoShop</span>
                                <div className="skills-width w-96 bg-gray-900 rounded-full  ">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full prog-55"> 55%</div>
                                </div>
                                {/* progrees */}
                            </div>

                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default Skills
