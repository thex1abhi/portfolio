import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return   (
    <> 
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 " >
        <div>
            <Image  alt=" " src={assets.profile_img} className="rounded-full w-32 " /> 
        </div> 
           <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 " > Hii , I’m Abhishek Yadav <Image src={assets.hand_icon} alt=" error " className="w-6" /> </h3>  
           <h1 className="text-3xl sm:text-6xl lg:text-[44px]" >
            Full-Stack Developer 
           </h1>
           <p  className=" max-w-2xl mx-auto " >  
I’m a Full Stack Developer who builds modern, scalable web applications from frontend to backend. I specialize in creating responsive UI, secure APIs, and efficient databases. 
           </p> 
           <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 " >
            <a href="#contact" className="px-10 py-3 border border-white bg-black rounded-full text-white  flex items-center gap-2" >Contact me <Image src={assets.right_arrow_white} alt=" error " className="w-4" /> </a> 
            <a href="/Resume.pdf" download  
             className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2" > My Resume  <Image src={assets.download_icon} alt=" error " className="w-4" /> </a>
           </div>
    </div>

    </>
  )
};

export default Header;
