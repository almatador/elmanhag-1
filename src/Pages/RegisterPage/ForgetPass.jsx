import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Logo from "../../Assets/Images/logoBlack"
import TextTitle from '../../Components/Text';

const ForgetPass = () => {
       return (
              <>
                     <div className="flex flex-col lg:flex-row  items-center justify-center lg:justify-between w-full h-screen">

                            <div className="flex items-center justify-center w-full lg:w-6/12 h-full">
                                   <div className="flex flex-col items-center justify-start h-5/6 gap-8 w-10/12">
                                          <TextTitle text={'forget  password'} color={'mainColor'} font={'medium'} />
                                          <Outlet />
                                   </div>
                            </div>
                            <div className="hidden lg:flex items-center justify-center w-6/12">
                                   {/* <img src={Logo} alt="" /> */}
                                   <Logo Height='250' />
                            </div>
                     </div >
              </>
       )
}

export default ForgetPass