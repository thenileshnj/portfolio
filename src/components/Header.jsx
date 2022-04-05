import React from 'react'

const Header = () => {
  return (
    <div className='bg-purple-700 text-white py-1 flex justify-start'>
      <div className='font-extrabold ml-3 text-2xl italic lg:text-3xl md:text-2xl sm:text-3xl xl:text-4xl'>
        <h1> &lt;NJ&gt;</h1>
      </div>
      <div className='flex bg-white shadow-sm rounded-2xl mx-2 px-3 items-center' >
        <div className='bg-lime-700  border-lime-600 p-1 rounded-full mr-1 shadow-2lg font-extrabold'></div>
        <p className='text-black font-bold'> Online </p>
      </div>
    </div>
  )
}

export default Header;