import React from 'react'

function Services() {
   const TextSample = () => (
      <>
         <h3 className="font-semibold leading-none">Some text</h3>
         <p>some text some text some text</p>
      </>
   )

   const CardServices = () => (
      <section className="row-span-1 col-span-2 grid grid-cols-3 place-content-center gap-20">
         {Array(3).fill().map((_, index) => (
            <div className="flex flex-col gap-2" key={index}>
               <div className="w-fill h-32 border-double border-4 border-gray-400"></div>
               <TextSample />
            </div >
         ))
         }
      </section >
   )

   return (
      <div className="px-20 grid grid-rows-[50px_210px_100px] items-center grid-cols-[1fr_auto]">
         <h2 className="row-span-1 col-span-2 font-bold">Some text</h2>
         <CardServices />

         <div className="row-span-1 col-span-1">
            <TextSample />
         </div>

         <button className="row-span-1 col-span-1 bg-gray-600 text-white px-3 py-1 rounded">Some text</button>
      </div>
   )
}

export default Services
