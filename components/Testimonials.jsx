import React from 'react'
import UsersIcon from './UsersIcon'
import { testimonials } from '../data'
import TerminalIcon from './TerminalIcon'
import Image from 'next/image'

const Testimonials = () => {

  return (
    <section id="testimonials">
      <div className="container md:mt-16 md:px-5 py-10 mx-auto text-center font-share">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap justify-center m-4">
            {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="p-4 md:w-1/2 w-full">
                    <div className="h-full bg-gray-800 bg-opacity-40 p-4 md:p-8 rounded">
                        <TerminalIcon className="block w-8 stroke-red-main text-gray-500 mb-4" />
                        <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                        <div className="inline-flex items-center">
                            <Image
                                alt="testimonial"
                                width={0}
                                height={0}
                                src={testimonial.image}
                                className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span className="flex-grow flex flex-col pl-4">
                                <span className="title-font font-medium text-white">
                                {testimonial.name}
                                </span>
                                <span className="text-gray-500 text-sm uppercase">
                                {testimonial.company}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </section>
  )
}

export default Testimonials