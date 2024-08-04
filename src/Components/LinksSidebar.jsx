import React, { useState } from "react";

import {
       DashboardIcon,
       UserIcon,
} from "./Icons/All_Icons";
import { Link, NavLink } from "react-router-dom";


const LinksSidebar = () => {
       const [isActiveDashboard, setIsActiveDashboard] = useState(true);
       const [isActiveUser, setIsActiveUser] = useState(false);

       const handleClickDashboard = () => {
              isActiveDashboard(!isActiveDashboard);
              setIsActiveUser(false);
       };
       const handleClickUser = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(!isActiveUser);
       };
       return (
              <>
                     <div className="LinksSidebar w-10/12  h-full flex flex-col items-center justify-start ">
                            <Link to="/dashboardAdmin" onClick={handleClickDashboard} className={`${isActiveDashboard ? 'active' : ''} w-full flex items-center justify-start pl-10 py-3 gap-x-5`}>
                                   <DashboardIcon isActive={isActiveDashboard} />
                                   <span className={`${isActiveDashboard ? "text-mainColor" : "text-thirdColor"} text-xl font-medium`}>Dashboard</span>
                            </Link>
                            <Link to="user" onClick={handleClickUser} className={`${isActiveUser ? 'active' : ''} w-full flex items-center justify-start pl-10 py-3 gap-x-5`}>
                                   <UserIcon Width={30} Height={28}  isActive={isActiveUser} />
                                   <span className={`${isActiveUser ? "text-mainColor" : "text-thirdColor"} text-xl font-medium`}>User</span>
                            </Link>

                     </div>
              </>
       );
};

export default LinksSidebar;
