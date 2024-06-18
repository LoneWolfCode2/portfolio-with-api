import React from 'react'
import ArrowIcon from './ArrowIcon'
import Head from 'next/head'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='md:fixed absolute top-0 left-0 right-0 p-4 bg-[#333333] font-share z-20'>
        {/* <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet"/>
        </Head> */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex gap-4'>
                <div className='text-red-main font-extrabold cursor-pointer'>Joe Kertz</div>
                <div className='flex gap-4'>    
                    <Link href="/#projects"><div className='text-white font-extrabold cursor-pointer hover:text-red-main/35 '>Past Work</div></Link>
                    <Link href="/#skills"><div className='text-white font-extrabold cursor-pointer hover:text-red-main/35 '>Skills</div></Link>
                    <Link href="/#testimonials"><div className='text-white font-extrabold cursor-pointer hover:text-red-main/35 '>Testimonials</div></Link>
                </div>
            </div>
            <Link href="/#contact"><div className='flex gap-4 items-center hover:text-red-main/35 cursor-pointer hover:font-extrabold hover:stroke-red-main/35 stroke-red-main stroke-2'>
                <div>Hire Me</div>
                <ArrowIcon className="hover:stroke-2" height={32} width={32}/>
            </div></Link>
        </div>
    </div>
  )
}

export default Navbar