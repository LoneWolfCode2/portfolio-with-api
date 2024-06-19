import React from 'react';
import CodeIcon from "./CodeIcon";
import Image from 'next/image';
import { projects } from '../data';


export const Projects = () => {
    return (
        <section id="projects" className="text-gray-400  font-share">
            <div className="container px-5 md:mt-16 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4 stroke-red-main" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I&apos;ve Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Innovative Solutions Crafted with Passion and Precision
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.title}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <Image
                                    alt="gallery"
                                    width={0}
                                    height={0}
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-red-main mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects