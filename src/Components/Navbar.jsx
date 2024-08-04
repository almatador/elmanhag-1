import React from 'react'
import { IoSearch } from 'react-icons/io5';

import { useAuth } from '../Context/Auth'

const Navbar = () => {
       const auth = useAuth()

       return (
              <>
                     <div className="flex items-center justify-between py-2 px-4 bg-white border-b-2">
                            <div className='w-4/12 flex items-center justify-start'>
                                   {/* image profile */}
                                   <div className="w-3/12">
                                          <img src="/assets/Images/profile.jpg" className='w-14 h-14 rounded-full object-cover object-center' alt="Profile" />
                                   </div>
                                   {/* Name Admin */}
                                   <div className="w-7/12">
                                          <span className='text-2xl text-mainColor font-bold'>Hello, {auth.user.firstName}</span>
                                   </div>
                            </div>
                            <div className='w-5/12 relative'>
                                   <input type="text" name="search" className='w-full h-full pl-12 py-3 rounded-3xl bg-thirdBgColor outline-none font-medium text-thirdColor' placeholder='Search' />
                                   <IoSearch className='absolute top-3 left-4 text-mainColor font-bold text-xl' />

                            </div>
                            <div className='w-2/12'>Navbar</div>
                     </div>
              </>
       )
}

export default Navbar