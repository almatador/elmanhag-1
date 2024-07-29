import React from 'react'
import Logo from '../Assets/Images/logoSidebar'
import { Link } from 'react-router-dom'

const HeaderHome = () => {
       return (
              <>
                     <div className="w-5/6 m-auto flex flex-row-reverse items-center justify-between">

                            <div className="w-1/4">
                                   <Logo Width="100%" />
                            </div>
                            {/* <div className=""></div> */}
                            <div className="p-3 text-xl text-secoundColor bg-mainBgColor rounded-2xl"><Link to={"./login"}>login</Link></div>
                     </div>
              </>
       )
}

export default HeaderHome