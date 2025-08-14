import React from 'react'

const Productcard = ({curr}) => {
  return (
    <div className='bg-gray-200/40 backdrop-blur-5xl min-w-0 flex-shrink-1 rounded-sm hover:shadow-xl hover:shadow-gray-300 hover:transform hover:scale-[1.02] shadow-md shadow-gray-300 max-md:h-80 h-92  border-1 border-gray-300 flex flex-col items-center justify-center gap-3  '>
        <img className='drop-shadow-2xl drop-shadow-gray-400 max-md:h-46 h-59 max-md:w-[60%] w-[80%]' src={curr.image}/>
        <div className='max-md:w-[69%] w-[79%] mt-4'>
            <p className='text-sm  text-gray-400 tracking-tighter '> {curr.title}</p>
            <p className=' drop-shadow-sm animate-pulse drop-shadow-teal-400 px-2 py-1 mt-2 mb-2 w-18 rounded-2xl text-sm text-white bg-teal-400'> ${curr.price}</p>
        </div>
    </div>
  )
}

export default Productcard