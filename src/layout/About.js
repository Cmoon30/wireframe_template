import React from 'react'

function About() {
   const title = ["Some text Some text Some text Some text Some text"];

   const parag = ["some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text"];

   const CardAboutList = () => (
      <section className="px-20 py-4 grid grid-cols-3 place-items-center gap-20">
         {Array(3).fill().map((_, index) => (
            <div className="flex flex-col items-center justify-center gap-1 text-center" key={index}>
               <div className="w-16 h-16 rounded-full border-2 border-gray-400"></div>
               <h2 className="text-2xl font-semibold">some text some text</h2>
               <p>some text some text some text some text some text some text some text some text</p>
               <button className="mt-4">some text</button>
            </div>
         ))}
      </section>
   )

   return (
      <div className="border-2 border-gray-400 border-l-0 border-r-0">
         <section className="px-20 py-4 text-center border-b-2 border-gray-400">
            <h2 className="font-semibold text-2xl">{title}</h2>
            <p>{parag}</p>
         </section>

         <CardAboutList />
      </div>
   )
}

export default About
