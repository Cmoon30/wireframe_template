import React from 'react'

function Navbar() {
   const HeaderLinks = () => (
      <div className="flex">
         {Array(7).fill().map((_, index) => (
            <div className="header_links text-center py-3 border-r-2 px-2 border-gray-400 first:border-l-2 font-semibold" key={index}>some text</div>
         ))}
      </div>
   )

   const HeaderSearch = () => (
      <div className="header_search border-2 border-gray-400 h-fit w-fit rounded flex items-center">
         <input className="h-7 w-40 border-r-2 px-2 py-3 border-gray-400 rounded" type="text" />
         <div className="button_search border-2 border-gray-400 rounded h-4 w-4 my-1 mx-2"></div>
      </div>
   )

   return (
      <nav className="sticky top-0 grid grid-cols-[1fr_auto] items-center px-20 border-b-2 border-gray-400 bg-white z-10">
         <HeaderLinks />
         <HeaderSearch />
      </nav>
   )
}

export default Navbar
