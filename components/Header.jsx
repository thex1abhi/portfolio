import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return   (
    <> 
    <div>
        <div>
            <Image  alt=" " src={assets.profile_img} className="rounded-full w-32 " /> 
        </div> 
           <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 " > Hii , I'm Abhishek Yadav <Image src={assets.hand_icon} alt=" error " className="w-6" /> </h3>  
           <h1>
            Full-Stack Developer 
           </h1>
           <p> 

           </p>
    </div>

    </>
  )
};

export default Header;
