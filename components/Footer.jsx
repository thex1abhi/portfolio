import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <>
            <div className="mt-20 " >
                <div className="text-center" >
                    <Image src={assets.logo} alt="logo" className="w-36  mb-2 mx-auto" />
                    <div className="w-max flex items-center gap-2 mx-auto" >
                        <Image src={assets.mail_icon} alt="logo" className="w-6  " />
                        yabhishekk480@gmail.com 
                    </div>
                </div>
                <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6  " >
                    <p>©  Abhishek Yadav 2026. All rights reserved  </p>
                    <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0" >
                        <li> <a target="_blank" href="https://github.com/thex1abhi"> Github </a> </li>
                        <li> <a target="_blank" href="https://www.linkedin.com/in/abhishek-yadav-888648329/"> LinkedIn </a>   </li>
                        <li>  <a target="_blank" href="https://www.instagram.com/yadav.jsx/">Instagram  </a>  </li> 
                       
                        
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Footer;
