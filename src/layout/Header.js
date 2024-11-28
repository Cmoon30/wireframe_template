import React from 'react'

function Header() {
   const Logo = ({ title, parag }) => (
      <div className="row-span-2 col-span-1 flex items-center gap-2 select-none">
         <h1 className="text-4xl leading-0">{title}</h1>
         <span>{parag}</span>
      </div>
   );

   const Icons = () => (
      <div className="... flex justify-end items-center">
         <section className="flex gap-3">
            {Array(3).fill().map((_, index) => (
               <div key={index} className="flex-1 w-7 h-6 rounded border-gray-400 border-2"></div>
            ))}
         </section>
      </div>
   )

   return (
      <header className="grid grid-rows-2 grid-cols-[1fr_auto] gap-2 px-20 py-4 border-b-2 border-gray-400">
         <Logo title="Sometext" parag="sometext sometext sometext" />
         <Icons />
         <span className="...">sometext sometext sometext</span>
      </header>
   )
}

export default Header
