import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5';

import { useAuth } from '../Context/Auth'
import { CiGlobe } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";



const Navbar = () => {
       const auth = useAuth()
       const [selectedOption, setSelectedOption] = useState('EN');
       const [open, setOpen] = useState(false);


       const handleOptionClick = (value) => {
              setSelectedOption(value);
              setOpen(!open)
       };

       return (
              <>
                     <div className="flex items-center justify-between py-2 px-4 bg-white border-b-2">
                            <div className='w-4/12 flex items-center justify-start'>
                                   {/* image profile */}
                                   <div className="w-3/12">
                                          <img src={auth.user.image} className='w-14 h-14 rounded-full object-cover object-center' alt="Profile" />
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
                            <div className='w-2/12 flex items-center justify-around'>
                                   <div className="w-4/12 relative">
                                          <button className='flex items-center gap-1 justify-between text-2xl' onClick={() => setOpen(!open)}>
                                                 {selectedOption === 'EN' ? <CiGlobe className='text-mainColor text-2xl' /> : <CiGlobe className='text-mainColor 2xl' />} <span className='flex items-center text-mainColor font-medium'>{selectedOption}<IoIosArrowDown className={`${open ? "rotate-180" : "rotate-0"} mt-1 ml-1 transition-all duration-300`} /></span>

                                          </button>
                                          <div className={`${open ? "block" : "hidden"} absolute w-28 top-14 -left-3.5 bg-white rounded-xl border-2 overflow-hidden`}>
                                                 <div className='flex items-center py-1  gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300	' onClick={() => handleOptionClick('EN')}>
                                                        <CiGlobe /> EN
                                                 </div>
                                                 <div className='flex items-center py-1  gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300	' onClick={() => handleOptionClick('AR')}>
                                                        <CiGlobe /> AR
                                                 </div>
                                          </div>
                                   </div>
                                   <button type='button' className="">
                                          <IoNotifications className='text-mainColor text-2xl' />
                                   </button>
                            </div>
                     </div>
              </>
       )
}

export default Navbar