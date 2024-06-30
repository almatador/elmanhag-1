import React from "react";
import LogoSidebar from "../assets/Images/logoSidebar"
import MenuSide from "./MenuSide.jsx";
const Sidebar = () => {
       return (
              <>
                     <aside className="w-1/5 fixed h-screen right-0 overflow-hidden flex flex-col items-center bg-mainColor gap-y-6">
                            <div className="h-1/5 mt-2">
                                   <LogoSidebar Width="100%" />
                            </div>
                            <MenuSide />
                     </aside>
              </>
       );
};

export default Sidebar;
