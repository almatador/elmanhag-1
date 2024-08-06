import React, { useEffect, useState } from 'react'

import Loading from '../../Components/Loading';
import { useAuth } from '../../Context/Auth';

import CartStudent from '../../Components/CartStudent'
import TitleHeader from '../../Components/TitleHeader'
import SearchBar from '../../Components/SearchBar'
import { ButtonAdd } from '../../Components/Button'
import { IoIosArrowDown } from 'react-icons/io'
import SettingFilter from '../../Components/Icons/AdminIcons/SettingFilter'
import EditIcon from '../../Components/Icons/AdminIcons/EditIcon'
import DeleteIcon from '../../Components/Icons/AdminIcons/DeleteIcon'
import axios from 'axios';

const StudentUser = () => {
       const auth = useAuth();
       const [isloading, setIsLoading] = useState(false);
       const [student, setStudent] = useState(null);

       const [search, setSearch] = useState('');
       const [selectedOptionCountry, setSelectedOptionCountry] = useState('Filter By Country');
       const [selectedOptionCity, setSelectedOptionCity] = useState('Filter By City ');
       const [selectedOptionType, setSelectedOptionType] = useState('Filter By Free/Paid');


       const [openCountry, setOpenCountry] = useState(false);
       const [openCity, setOpenCity] = useState(false);
       const [openType, setOpenType] = useState(false);


       const handleOptionCountry = (e) => {
              setSelectedOptionCountry(e.target.innerText);
              setOpenCountry(false)
              setOpenCity(false)
              setOpenType(false)
       };
       const handleOptionCity = (e) => {
              setSelectedOptionCity(e.target.innerText);
              setOpenCountry(false)
              setOpenCity(false)
              setOpenType(false)
       };
       const handleOptionType = (e) => {
              setSelectedOptionType(e.target.innerText);

              setOpenCountry(false)
              setOpenCity(false)
              setOpenType(false)
       };


       const handelOpenCountry = () => {
              setOpenCountry(!openCountry)
              setOpenCity(false)
              setOpenType(false)
       };
       const handelOpenCity = () => {
              setOpenCountry(false)
              setOpenCity(!openCity)
              setOpenType(false)
       };
       const handelOpenType = () => {
              setOpenCountry(false)
              setOpenCity(false)
              setOpenType(!openType)
       };


       useEffect(() => {
              const fetchStudents = async () => {
                     setIsLoading(true);
                     try {
                            const response = await axios.get('https://bdev.elmanhag.shop/admin/student', {

                                   'headers': {
                                          // 'Bearer ' +
                                          'Authorization': 'Bearer ' + auth.user.token,
                                          // 'Access-Control-Allow-Origin': '*',

                                          // "Content-Type": "application/json",

                                   },
                            });
                            if (response.status === 200) {
                                   console.log("response", response)
                                   setStudent(response.data);
                            }
                     } catch (error) {
                            console.error('Error fetching student data:', error);
                     } finally {
                            setIsLoading(false);
                     }
              };

              fetchStudents();
       }, [auth.user.token]);


       if (isloading) {
              return (
                     <div className="w-1/4 h-screen flex items-center justify-center m-auto">
                            <Loading />
                     </div>
              )
       }




       return (
              <>
                     <div className="flex flex-col items-center gap-y-4">
                            <TitleHeader text={"Student"} spaceBottom={3} />
                            <div className="w-full flex flex-wrap gap-y-4 items-center justify-between">
                                   <CartStudent name={"Total students"} count={100} />
                                   <CartStudent name={"Free students"} count={150} />
                                   <CartStudent name={"Paid students"} count={200} />
                                   <CartStudent name={"banned students"} count={140} />
                            </div>
                            <div className="w-full">
                                   {/* Search && Filter */}
                                   <div className="w-full flex flex-wrap items-center justify-between gap-4">
                                          <div className="w-1/5 mx-auto">
                                                 <SearchBar bg={"white"} />
                                          </div>
                                          <div className="w-1/5 mx-auto relative">
                                                 <button className='flex items-center justify-between w-full h-full px-4 py-3 rounded-3xl  outline-none font-medium text-thirdColor bg-secoundColor' onClick={handelOpenCountry}>
                                                        <SettingFilter />{selectedOptionCountry}<IoIosArrowDown className={`${openCountry ? "rotate-180" : "rotate-0"} text-mainColor text-xl transition-all duration-300`} />

                                                 </button>
                                                 <div className={`${openCountry ? "block" : "hidden"} scrollSec absolute w-full min-h-10 max-h-32 top-14 bg-white rounded-xl drop-shadow-sm overflow-y-scroll`}>
                                                        <div className='flex items-center py-1  gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300	' onClick={handleOptionCountry}>
                                                               Country
                                                        </div>
                                                        <div className='flex items-center py-1  gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300	' onClick={handleOptionCountry}>
                                                               Country
                                                        </div>
                                                        <div className='flex items-center py-1  gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300	' onClick={handleOptionCountry}>
                                                               Country
                                                        </div>
                                                        <div className='flex items-center py-1  gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300	' onClick={handleOptionCountry}>
                                                               Country
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="w-1/5 mx-auto relative">
                                                 <button className='flex items-center justify-between w-full h-full px-4 py-3 rounded-3xl  outline-none font-medium text-thirdColor bg-secoundColor' onClick={handelOpenCity}>
                                                        <SettingFilter />{selectedOptionCity}<IoIosArrowDown className={`${openCity ? "rotate-180" : "rotate-0"} text-mainColor text-xl transition-all duration-300`} />

                                                 </button>
                                                 <div className={`${openCity ? "block" : "hidden"} scrollSec absolute w-full min-h-10 max-h-32 top-14 bg-white rounded-xl drop-shadow-sm overflow-y-scroll`}>
                                                        <div className='flex items-center py-1  gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300	' onClick={handleOptionCity}>
                                                               City
                                                        </div>
                                                        <div className='flex items-center py-1  gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300	' onClick={handleOptionCity}>
                                                               City
                                                        </div>
                                                        <div className='flex items-center py-1  gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300	' onClick={handleOptionCity}>
                                                               City
                                                        </div>
                                                        <div className='flex items-center py-1  gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300	' onClick={handleOptionCity}>
                                                               City
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="w-1/5 mx-auto relative">
                                                 <button className='flex items-center justify-between w-full h-full px-4 py-3 rounded-3xl  outline-none font-medium text-thirdColor bg-secoundColor' onClick={handelOpenType}>
                                                        <SettingFilter />{selectedOptionType}<IoIosArrowDown className={`${openType ? "rotate-180" : "rotate-0"} text-mainColor text-xl transition-all duration-300`} />

                                                 </button>
                                                 <div className={`${openType ? "block" : "hidden"} scrollSec absolute w-full min-h-10 max-h-32 top-14 bg-white rounded-xl drop-shadow-sm overflow-y-scroll`}>
                                                        <div className='flex items-center py-1  gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300	' onClick={handleOptionType}>
                                                               Type
                                                        </div>
                                                        <div className='flex items-center py-1  gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300	' onClick={handleOptionType}>
                                                               Type
                                                        </div>
                                                        <div className='flex items-center py-1  gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300	' onClick={handleOptionType}>
                                                               Type
                                                        </div>
                                                        <div className='flex items-center py-1  gap-1 justify-center text-xl font-medium text-mainColor hover:cursor-pointer hover:bg-mainColor hover:text-secoundColor transition-all duration-300	' onClick={handleOptionType}>
                                                               Type
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="w-1/12 mx-auto">
                                                 <ButtonAdd Text={"Add"} BgColor={"mainColor"} Color={"secoundColor"} Size={"xl"} />
                                          </div>
                                   </div>
                                   {/* Table */}
                                   <div className="w-full flex items-center justify-center mt-4">
                                          <table className='w-full '>
                                                 <thead>

                                                        <tr className='border-b-2'>
                                                               <th className='text-mainColor text-center font-medium text-xl pb-3'>#</th>
                                                               <th className='text-mainColor text-center font-medium text-xl pb-3'>Name Phone</th>
                                                               <th className='text-mainColor text-center font-medium text-xl pb-3'>County City</th>
                                                               <th className='text-mainColor text-center font-medium text-xl pb-3'>Category</th>
                                                               <th className='text-mainColor text-center font-medium text-xl pb-3'>Free / Paid</th>
                                                               <th className='text-mainColor text-center font-medium text-xl pb-3'>Status</th>
                                                               <th className='text-mainColor text-center font-medium text-xl pb-3'>Action</th>
                                                        </tr>
                                                 </thead>
                                                 <tbody>
                                                        <tr className='border-b-2'>
                                                               <td className='py-2 text-center text-thirdColor text-xl overflow-hidden'>0</td>
                                                               <td className='py-2 text-center text-thirdColor text-xl overflow-hidden'>Ahmed Wagih <br /> 01200908090</td>
                                                               <td className='py-2 text-center text-thirdColor text-xl overflow-hidden'>Egypt <br />Alexandria</td>
                                                               <td className='py-2 text-center text-thirdColor text-xl overflow-hidden'>Category</td>
                                                               <td className='py-2 text-center text-thirdColor text-xl overflow-hidden'>Free</td>
                                                               <td className='py-2 text-center text-thirdColor text-xl overflow-hidden'>Active</td>
                                                               <td className='py-2 text-center text-thirdColor text-xl overflow-hidden'>
                                                                      <div className="flex items-center justify-center gap-x-3">
                                                                             <button type='button'><EditIcon /></button>
                                                                             <button type='button'><DeleteIcon /></button>
                                                                      </div>
                                                               </td>
                                                        </tr>
                                                 </tbody>
                                                 {/* {data.map((val, key) => {
                                                 return (
                                                        <tr key={key}>
                                                               <td>{val.name}</td>
                                                               <td>{val.age}</td>
                                                               <td>{val.gender}</td>
                                                        </tr>
                                                 )
                                          })} */}
                                          </table>
                                   </div>

                            </div>
                     </div>
              </>
       )
}

export default StudentUser