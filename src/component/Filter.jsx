import React from 'react'

const Filter = ({ search, setSearch, category, setCategory, sortOrder, setSortOrder, products}) => {
    const allcat=["all", ...new Set(products.map((c)=>c.category))]
  return (
    <div className='flex max-md:gap-2 gap-10 flex-wrap justify-center items-center  w-full'>
        <input
        className="px-3 py-2    border max-md:px-2 max-md:text-xs border-gray-300 rounded-xl bg-white text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500/50 focus:rounded-4xl focus:border-gray-100 focus:drop-shadow-lg  hover:drop-shadow-md focus:transform focus:scale-[1.05] "
        placeholder='Search'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        type="text"/>

{/* category */}
<select  className="px-3   py-2 border max-md:px-2 max-md:text-xs border-gray-300 rounded-xl bg-white text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:rounded-4xl focus:ring-teal-500/50  focus:border-white focus:drop-shadow-lg   hover:drop-shadow-md focus:transform focus:scale-[1.05] " value={category} onChange={(e)=>setCategory(e.target.value)}>
    {allcat.map((curr,ind)=>(<option key={ind} value={curr}>{curr}</option>))}
</select>
{/* sort */}
<select className="px-3 py-2  border max-md:px-2 max-md:text-xs border-gray-300 rounded-xl bg-white text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:rounded-4xl focus:ring-teal-500/50  focus:border-white focus:drop-shadow-lg focus:transform hover:drop-shadow-md focus:scale-[1.05] " value={sortOrder} onChange={(e)=>{setSortOrder(e.target.value)}}>
<option  value="">Sort By</option>
<option value="price-asc">Price Low - High</option>
<option value="price-desc">Price High - Low</option>
        <option value="name-asc">Name A - Z</option>
        <option value="name-desc">Name Z - A</option>
</select>

    </div>
  )
}

export default Filter