import React from 'react'
import { IoSearch } from 'react-icons/io5'

const SearchBar = ({ bg }) => {
       return (
              <div className='w-full relative'>
                     <input type="text" name="search" className={`bg-${bg} w-full h-full pl-12 py-3 rounded-3xl outline-none font-medium text-thirdColor`} placeholder='Search' />
                     <IoSearch className='absolute top-3 left-4 text-mainColor font-bold text-xl' />

              </div>
       )
}

export default SearchBar