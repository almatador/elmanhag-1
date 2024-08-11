import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const EditProfilePage = () => {
       return (
              <>
                     {/* <div className="w-11/12 mx-auto"> */}
                            <div className="LinksProfile flex flex-wrap w-full justify-between mb-8 pt-5">
                                   <NavLink to={"profile"} className="w-1/6 text-thirdColor text-center text-2xl font-medium">profile</NavLink>
                                   <NavLink to={"parent"} className="w-1/6 text-thirdColor text-center text-2xl font-medium">parent</NavLink>
                                   <NavLink to={"Purchases"} className="w-1/6 text-thirdColor text-center text-2xl font-medium">Purchases</NavLink>
                                   <NavLink to={"Progress"} className="w-1/6 text-thirdColor text-center text-2xl font-medium">Progress</NavLink>
                                   <NavLink to={"loginHistory"} className="w-1/6 text-thirdColor text-center text-2xl font-medium">loginHistory</NavLink>
                            </div>
                            <Outlet />
                     {/* </div> */}
              </>
       )
}

export default EditProfilePage