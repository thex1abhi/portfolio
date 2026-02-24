import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react"
const Navbar = () => { 
const sideMenuRef=useRef()  
const [isScroll, setisScroll] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);


const openMenu = ()=>{
    sideMenuRef.current.style.transform="translateX(0)" 
    setIsMenuOpen(true);
} 
const closeMenu = ()=>{
    sideMenuRef.current.style.transform="translateX(100%)" 
    setIsMenuOpen(false);
} 


useEffect(()=>{
window.addEventListener('scroll',()=>{
    if(scrollY >50){
        setisScroll(true)
    }else{
        setisScroll(false)
    }
})
},[])

    return (
        <> 
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]" > 
            <Image src={assets.header_bg_color} alt="" className="w-full " />
        </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ?"bg-white bg-opacity-50 backdrop-blur-lg":"" } `} >
                <a href="#top">
                    <Image src={assets.logo} className="w-28 cursor-pointer mr-14" alt="Logo" />
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  
                    ${isScroll ? "  ":" bg-white shadow-sm bg-opacity-50 "} `  } >
                    <li> <a href="#top"> Home  </a> </li>
                    <li> <a href="#about "> About me  </a> </li>
                    <li> <a href="#skills"> Skills </a> </li>
                    <li> <a href="#projects"> Projects  </a> </li>
                    <li> <a href="#contact"> Contact me  </a> </li>
                </ul> 
                <div className=" flex items-center gap-4" > 
                  
                    <motion.a 
                    
                        whileHover={{scale:1.05}}
          transition={{duration:0.3}}
                    href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5  border border-gray-500 rounded-full ml-4 " >Contact  <Image alt="" src={assets.arrow_icon}
                        className="w-3" /> </motion.a> 
                        <button className="block md:hidden ml-3" >
                            <Image onClick={openMenu} src={assets.menu_black}  alt="" className="  w-6 "/> 
                        </button> 
                </div> 
            
            {/* Backdrop Overlay */}
            {isMenuOpen && (
                <div 
                    onClick={closeMenu} 
                    className="fixed inset-0 bg-transparent  bg-opacity-50 z-40 md:hidden"
                />
            )}
            
            {/* navbar for mobiles */} 
            <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 w-64 h-screen z-50 bg-rose-50 transition-transform duration-500 overflow-y-auto" style={{transform: "translateX(100%)"}} > 
                <div onClick={closeMenu} className="absolute right-6 top-6" > <Image src={assets.close_black} alt="cross-icon" className="w-5 cursor-pointer" /> </div>
                 <li> <a href="#top" onClick={closeMenu} > Home  </a> </li>
                    <li> <a href="#about " onClick={closeMenu} > About me  </a> </li>
                    <li> <a href="#skills" onClick={closeMenu} > Skills  </a> </li>
                    <li> <a href="#projects" onClick={closeMenu} > Projects  </a> </li>
                    <li> <a href="#contact" onClick={closeMenu} > Contact me  </a> </li>
            </ul>
            </nav>
        </>
    )
};

export default Navbar; 
