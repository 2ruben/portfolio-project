import React from 'react'
import {
    AiFillLinkedin,
  } from "react-icons/ai";
  
export const Banner = () => {
  return (
    <div className="text-center p-10 py-10">
    <h2 className="text-5xl py-2 font-medium dark:text-green-500 md:text-6xl">
      Rubén Guarín
    </h2>
    <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
      Frontend Developer
    </h3>
    <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
      Freelancer providing services for programming and design content
      needs. Join me down below and let's get cracking!
    </p>
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
      <a href="https://www.linkedin.com/in/rub%C3%A9n-guar%C3%ADn-273ba41a8/" target="_blank"><AiFillLinkedin/></a>
    </div>
    <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
      {/* <Image src={code} layout="fill" objectFit="cover" /> */}
    </div>
  </div>

  )
}
