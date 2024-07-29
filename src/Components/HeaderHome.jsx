import React from 'react'
import Logo from '../Assets/Images/logoSidebar'
import { Link } from 'react-router-dom'
import LinksHomeDS from './LinksHomeDS'

const HeaderHome = () => {
       return (
              <>
                     <div className="w-full m-auto flex flex-row-reverse items-center justify-around">

                            <div className="w-1/4 flex items-center justify-center">
                                   <Logo />
                            </div>
                            <div className="w-2/4 flex items-center justify-center"><LinksHomeDS /></div>
                            <div className="w-1/4 flex items-center justify-center"><Link to={"./login"} className="p-3 text-xl text-secoundColor bg-mainBgColor rounded-2xl">login</Link></div>
                     </div>
              </>
       )
}

export default HeaderHome