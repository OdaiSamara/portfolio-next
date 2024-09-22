import React from 'react'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Image from 'next/image'
import bgapp1 from "../../../puplic/portfolio/app-1.jpg"
import bgapp2 from "../../../puplic/portfolio/app-2.jpg"
import bgapp3 from "../../../puplic/portfolio/app-3.jpg"
import bgbooks1 from "../../../puplic/portfolio/books-1.jpg"
import bgbooks2 from "../../../puplic/portfolio/books-2.jpg"
import bgbooks3 from "../../../puplic/portfolio/books-3.jpg"
import bgbrand1 from "../../../puplic/portfolio/branding-1.jpg"
import bgbrand2 from "../../../puplic/portfolio/branding-2.jpg"
import bgbrand3 from "../../../puplic/portfolio/branding-3.jpg"
import bgproduct1 from "../../../puplic/portfolio/product-1.jpg"
import bgproduct2 from "../../../puplic/portfolio/product-2.jpg"
import bgproduct3 from "../../../puplic/portfolio/product-3.jpg"



const categories = [
    {
        name: 'All',
        posts: [
            {
                id: 1,
                picture: bgapp1,
                title: 'Does drinking coffee make you smarter?',

            },
            {
                id: 2,
                picture: bgapp2,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 3,
                picture: bgapp3,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 4,
                picture: bgbooks1,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 5,
                picture: bgbooks2,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 6,
                picture: bgbooks3,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 7,
                picture: bgbrand1,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 8,
                picture: bgbrand2,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 9,
                picture: bgbrand3,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 10,
                picture: bgproduct1,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 11,
                picture: bgproduct2,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 12,
                picture: bgproduct3,
                title: "So you've bought coffee... now what?",

            },
        ],
    },
    {
        name: 'App',
        posts: [
            {
                id: 1,
                picture: bgapp1,
                title: 'Does drinking coffee make you smarter?',

            },
            {
                id: 2,
                picture: bgapp2,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 3,
                picture: bgapp3,
                title: "So you've bought coffee... now what?",

            },
        ],
    },
    {
        name: 'Product',
        posts: [
            {
                id: 10,
                picture: bgproduct1,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 11,
                picture: bgproduct2,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 12,
                picture: bgproduct3,
                title: "So you've bought coffee... now what?",

            },
        ],
    },
    {
        name: 'Branding',
        posts: [
            {
                id: 7,
                picture: bgbrand1,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 8,
                picture: bgbrand2,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 9,
                picture: bgbrand3,
                title: "So you've bought coffee... now what?",

            },
        ],
    },
    {
        name: 'Books',
        posts: [
            {
                id: 4,
                picture: bgbooks1,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 5,
                picture: bgbooks2,
                title: "So you've bought coffee... now what?",

            },
            {
                id: 6,
                picture: bgbooks3,
                title: "So you've bought coffee... now what?",

            },
        ],
    },
]



const Portfolio = () => {
    return (
        <div className='container w-ful mt-20' id='Portfolio'>
            <h2 className='text-2xl font-semibold border-solid border-b-2 border-b-slate-950 w-[50px] '>Portfolio</h2>
            <p className='p-5'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div className="portfolio-col flex  w-full justify-center pt-24 ">
                <div className=" w-full ">
                    <TabGroup>
                        <TabList className="portfolio-gap flex justify-center gap-4">
                            {categories.map(({ name }) => (
                                <Tab
                                    key={name}
                                    className="portfolio-padding rounded-full py-1 px-3 text-sm/6 font-semibold text-slate-900 focus:outline-none "
                                >
                                    {name}
                                </Tab>
                            ))}
                        </TabList>
                        <TabPanels className="mt-3">
                            {categories.map(({ name, posts }) => (
                                <TabPanel key={name} >
                                    <ul className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 ' >
                                        {posts.map((post) => (

                                            <li key={post.id} >

                                                <Image src={post.picture} alt='8*8' className="animated " />

                                                {post.title}
                                            </li>
                                        ))}
                                    </ul>
                                </TabPanel>
                            ))}
                        </TabPanels>
                    </TabGroup>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
