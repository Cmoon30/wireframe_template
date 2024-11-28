import React from 'react'

function Footer() {
   const TableTitle = () => (
      <div className="pb-4 text-start font-semibold">Some text</div>
   )

   const TableColumnOne = ({ className }) => (
      <section className={className}>
         <TableTitle />

         <div className="flex flex-col gap-4">
            {Array(3).fill().map((_, index) => (
               <div className="grid grid-cols-[auto_1fr] items-center gap-x-3" key={index}>
                  <div className="w-5 h-5 border-2 border-gray-400 rounded"></div>
                  <p className="leading-none"><b>Some text</b> some text some text some text</p>
               </div>
            ))}
         </div>
      </section>
   )

   const TableColumnTwo = ({ className }) => (
      <section className={className}>
         <TableTitle />
         <div className="flex flex-col gap-2">
            {Array(3).fill().map((_, index) => (
               <div className="grid grid-rows-[1fr_auto] grid-cols-[auto_1fr] items-start gap-x-1 gap-y-2 w-fit" key={index}>
                  <div className="row-span-2 col-span-1 w-20 h-full border-double border-4 border-gray-500  bg-white rounded"></div>
                  <p className="leading-none"><b>Some text</b> some text some text some text</p>

                  <button className="row-span-1 col-span-1 w-fit">Some text</button>
               </div>
            ))}
         </div>
      </section>
   )

   const TableColumnThree = ({ className }) => (
      <section className={className}>
         <TableTitle />
         <div className="flex flex-col gap-2">
            {Array(2).fill().map((_, index) => (
               <div className="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-2" key={index}>
                  <p className="row-span-1 col-span-2 leading-none">some text some text some text some text some text</p>
                  <div className="row-span-1 col-span-1 w-5 h-1 bg-black"></div>
                  <button className="w-fit">Some text</button>
               </div>
            ))}
         </div>
      </section>
   )

   const TableColumnFour = ({ className }) => (
      <section className={className}>
         <TableTitle />
         <div className="flex gap-2">
            {Array(4).fill().map((_, index) => (
               <div key={index} className="row-span-2 col-span-1 w-14 h-12 border-double border-4 border-gray-500 rounded bg-white"></div>
            ))}
         </div>
      </section>
   )

   const CopyRight = () => (
      <section className="row-span-1 col-span-4 grid grid-cols-[1fr,auto,auto,auto,auto,auto,auto,auto] items-center border-t-2 border-gray-400  px-20 py-4">
         <p className="text-sm">some text some text some text</p>

         {Array(7).fill().map((_, index) => (
            <span className="border-l-2 border-gray-400 h-fit px-2 text-sm last:border-r-2" key={index}>some text</span>
         ))}
      </section>
   )

   const columns = [TableColumnOne, TableColumnTwo, TableColumnThree, TableColumnFour];

   return (
      <footer className="grid grid-rows-[auto,auto] grid-cols-[auto,auto,auto,auto] place-content-center bg-gray-500 gap-4 text-white">
         {columns.map((Column, index) => (
            <Column
               key={index}
               className={`footer_tables flex flex-col rows-span-1 cols-span-1 p-4 ${index === 0 ? "pl-20" : index === 3 ? "pr-20" : ""
                  }`}
            />
         ))}
         <CopyRight />
      </footer>
   )
}

export default Footer
