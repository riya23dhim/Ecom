import React from 'react'
import { FaSearch } from "react-icons/fa";
const Filter = ({ search, setSearch, category, setCategory, sortOrder, setSortOrder, products}) => {
    const allcat=["all", ...new Set(products.map((c)=>c.category))]
  return (
    <div className='flex  max-lg:flex-col justify-center lg:justify-between items-center  w-full'>

        <div className='relative px-3 md:py-7 max-md:py-6 rounded-full w-60 md:w-120  hover:shadow-[0_0_13px_rgba(0,0,0,0.3)] transition-all duration-300 bg-gray-300/60 focus:transform focus:scale-[1.02]'>
        <span className='absolute left-4 top-4 text-md max-md:hidden text-gray-400 tracking-wide'>Search for products</span>
        <input
        className="absolute top-[6px]  md:right-2  px-3 py-[8px] md:w-70 shadow-sm border mafocus:outline-nonx-md:px-2 max-md:text-xs border-gray-300 rounded-4xl bg-white text-gray-400 text-sme focus:outline-none focus:rounded-4xl focus:border-gray-100 focus:drop-shadow-lg  hover:drop-shadow-md  "
        placeholder='Search'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        type="text"/>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
        <FaSearch />
    </span>
        
        </div>

{/* category */}
<div className='max-lg:mt-5 relative '>
<div className='relative px-3 py-7   hover:shadow-[0_0_13px_rgba(0,0,0,0.3)] transition-all duration-300 rounded-full w-80 md:w-120 bg-gray-300/60 focus:transform focus:scale-[1.02]'>
<span className='absolute left-4 top-4 text-md max-md:hidden text-gray-400 tracking-wide'>Filter Products</span>
<div className='flex md:gap-2 gap-6 absolute right-2 top-2'>

<select  className="  py-[9px] border px-2 max-md:text-xs border-gray-300 rounded-4xl bg-white text-gray-400 text-sm focus:outline-none  focus:border-white focus:drop-shadow-lg   hover:drop-shadow-md focus:transform focus:scale-[1.05] " value={category} onChange={(e)=>setCategory(e.target.value)}>
    {allcat.map((curr,ind)=>(<option key={ind} value={curr}>{curr}</option>))}
</select>
{/* sort */}
<select className=" py-[9px]  border px-2 max-md:text-xs border-gray-300 rounded-4xl bg-white text-gray-400 text-sm focus:outline-none focus:border-white focus:drop-shadow-lg focus:transform hover:drop-shadow-md focus:scale-[1.05] " value={sortOrder} onChange={(e)=>{setSortOrder(e.target.value)}}>
<option  value="">Sort By</option>
<option value="price-asc">Price Low - High</option>
<option value="price-desc">Price High - Low</option>
        <option value="name-asc">Name A - Z</option>
        <option value="name-desc">Name Z - A</option>
</select>
</div>
</div>
</div>

    </div>
  )
}

export default Filter