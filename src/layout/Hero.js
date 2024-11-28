import React from 'react'

function Hero() {
   return (
      <div className="hero flex flex-col items-start justify-center gap-1 px-20 text-white">
         <div className="bg-gray-400 pr-10 pl-3 py-2">some text</div>
         <div className="bg-gray-400 pr-60 pl-3 py-2">some text</div>
         <div className="mt-5 bg-gray-600 px-3 py-2">some text</div>

         <button className="bg-gray-400 px-2 py-1">{"<"}</button>
         <button className="bg-gray-600 px-2 py-1">{">"}</button>
      </div>
   )
}

export default Hero
