import React from 'react'
import Button from './Button'
// import logo from '../assets/lwclogo.webp'
import logo from '../public/assets/lwclogo.webp'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <section id='about'>
        <div className="container mx-auto px-10 py-12 flex flex-col md:flex-row items-center font-share">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hi, I&apos;m Joe.
                    <br className="hidden lg:inline-block" />I love to build amazing
                    apps.
                </h1>
                <p className='mb-8 leading-relaxed'>
                Turning innovative ideas into functional and engaging user experiences
                </p>
                <div>
                    <Link href="/#contact"><Button>Work With Me</Button></Link>
                    <Link href="/#projects"><Button>Past Work</Button></Link>
                </div>
            </div>
            <div>
                <Image width={400} height={100} src={logo} className='lg:max-w-lg lg:w-full mx-auto md:w-1/2 w-5/6' alt='lone wolf code logo'/>
            </div>
        </div>
    </section>
  )
}

export default About