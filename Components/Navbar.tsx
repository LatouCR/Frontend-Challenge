import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header className='w-full h-[72px] px-2 bg-secondary '>
            <nav className='w-full h-full px-8 flex container mx-auto lg:justify-start sm:justify-center'>
                <div className='flex gap mr-4'>
                    <Link href="/" className='flex items-center'>
                        <svg width="52" height="52" viewBox="0 0 425 425" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M371.167 315.917L342.302 325.656C334.333 328.312 327.958 334.51 325.302 342.656L315.563 371.521C307.24 396.49 272.177 395.958 264.386 370.99L231.625 265.625C225.25 244.729 244.552 225.25 265.271 231.802L370.813 264.562C395.604 272.354 395.958 307.594 371.167 315.917Z" fill="white" />
                            <path d="M371.875 203.646C371.875 211.26 371.344 218.875 370.458 226.312C369.75 231.625 364.261 234.813 359.125 233.219L273.24 206.479C254.115 200.635 233.75 205.594 219.583 219.583C205.417 233.75 200.281 254.469 206.302 273.594L232.865 359.125C234.458 364.26 231.094 369.75 225.781 370.458C218.344 371.344 211.083 371.875 203.646 371.875C109.083 371.875 32.9376 294.135 35.4168 198.865C37.8959 111.031 111.031 37.8958 198.865 35.4167C294.136 32.9375 371.875 109.083 371.875 203.646Z" fill="white" />
                        </svg>
                        <p className='text-3xl text-white font-semibold'>Short.url</p>
                    </Link>
                </div>
                <ul className='flex items-center gap-3 justify-end '>
                    <li className='text-white font-medium hover:text-primary p-2 hover:text-primary/70'>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className='text-white font-medium hover:text-primary hover:text-primary/70'>
                        <Link href="/top">
                            Leaderboard
                        </Link>
                    </li>
                    <li className='text-white font-medium hover:text-primary hover:text-primary/70'>
                        <Link href="/api/short">
                            API
                        </Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar