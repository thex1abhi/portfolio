import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react"
const Mywork = () => {
    return (
        <>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}

                id="projects" className=" w-full px-[12%] py-10  scroll-mt-20 ">

                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}

                    className=" text-center text-3xl md:text-4xl font-bold mb-4">
                    Projects I built
                </motion.h2>
                <motion.p  
                   initial={{opacity:0}}
        whileInView={{opacity:1}} 
        transition={{duration:0.5, delay:0.7}}
                className=" text-center max-w-2xl mx-auto mt-5 mb-12 ">
                    Welcome to my  Portfolio . Explore  projects showcasing my expertise in development
                </motion.p>

                <motion.div  
                   initial={{opacity:0}}
        whileInView={{opacity:1}} 
        transition={{duration:0.3,delay:0.2     }}
                className="grid grid-cols-1  grid-cols-auto sm:grid-cols-2 md:grid-cols-3 my-5 gap-5"  >
                    {workData.map((projects, index) => (
                        <motion.div 
                         
                        whileHover={{scale:1.05}} 
                        transition={{duration:0.3}}
                        key={index}
                            className="aspect-square bg-no-repeat bg-contain  bg-center rounded-lg relative cursor-pointer  group   "
                            style={{ backgroundImage: `url(${projects.bgImage})` }} >

                            <Link href={projects.github}
                                target="_blank"
                                rel="noopener noreferrer"

                            >
                                <div className="bg-gray-200  w-10/12 rounded-md absolute bottom-5 left-1/2  -translate-x-1/2 py-3 px-5 flex items-center justify-between  duration-500 group-hover:bottom-7" >
                                    <div  >
                                        <h2>{projects.title} </h2>

                                    </div>
                                    <div>
                                        <Image src={assets.send_icon} alt="send-icon" width={20} height={20} />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                    ))}

                </motion.div>


            </motion.div>

        </>
    )
};

export default Mywork;
