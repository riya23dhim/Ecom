import { useEffect, useState } from 'react'
import Filter from './component/Filter.jsx'
import './App.css'
import api from './api.jsx'
import Productcard from './component/Productcard.jsx'
import { NavItem } from 'react-bootstrap-v5'
function App() {
  //state to store all products
  const [products,setproducts]=useState([])
  const [category,setcategory]=useState("all")
  const [sortproducts,setsortproducts]=useState("")
  const [search,setsearch]=useState("")
  const [filter,setfilter]=useState([])
  //this one is good for showing cards as it will able to keep the whole data or change acc to filter
  //fetch data
  const fetchData=async()=>{
    try{
    const res=await api.get()
    setproducts(res.data)
    setfilter(res.data)
    console.log(res.data)
    }
    catch(e){
console.log(e.message)
    }
  }

  
  useEffect(()=>{
   fetchData()
  },[])
  //filter
useEffect(()=>{
  //serach
  let data=[...products]
  if(search){
    data=data.filter((curr)=>
    curr.title.toLowerCase().includes(search.toLowerCase()))
  }
  if(category!=="all"){
    data= data.filter((item)=>item.category===category)
  }
  //sort
  if(sortproducts==="price-asc"){
    data.sort((a,b)=>a.price-b.price)
  
} else if (sortproducts === "price-desc") {
  data.sort((a, b) => b.price - a.price);
} else if (sortproducts === "name-asc") {
  data.sort((a, b) => a.title.localeCompare(b.title));
} else if (sortproducts === "name-desc") {
  data.sort((a, b) => b.title.localeCompare(a.title));
}
setfilter(data)
},[search, category, sortproducts, products])


  return(
    <div className='mt-10 mx-0 md:mx-18 mb-10 '>
      <div className='my-6 flex flex-col  justify-center items-center gap-4 '>
<h1 className=' sm:text-4xl md:text-6xl text-gray-400 tracking-tight '>Products</h1>
<Filter className=""
search={search}
setSearch={setsearch}
category={category}
setCategory={setcategory}
sortOrder={sortproducts}
setSortOrder={setsortproducts}
products={products}/>
      </div>
      <div className='grid  w-full gap-4 mt-15 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        
 {filter.map((curr,ind)=>(<Productcard key={ind} curr={curr} />))}

      </div>
    </div>
  )
}

export default App
