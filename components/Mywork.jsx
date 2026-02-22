import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Mywork = () => {
    return (
        <>
            <section id="projects" className="w-full py-16 px-4 md:px-10 scroll-mt-20 ">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Projects I built
                    </h2>
                    <p className="text-gray-700 mb-10 text-sm md:text-base">
                        Welcome to my  Portfolio . Explore  projects showcasing my expertise in development
                    </p>

                    <div className="grid grid-cols-auto  my-10 gap-5 "  >
                        {workData.map((projects, index) => (
                            <div key={index}
                                className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
                                style={{ backgroundImage: `url(${projects.bgImage})` }} >

                                <div  
                                className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
                                -translate-x-1/2 py-3 px-5 flex items-center justify-between  duration-500 group-hover:bottom-7" >
                                    <div>
                                        <h2>{projects.title} </h2>
                                        <p>{projects.description} </p>
                                    </div>
                                    <div>
                                        <Image src={assets.send_icon} alt="send-icon" className="w-5" />
                                    </div>
                                </div>
                            </div> 
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
};

export default Mywork;
