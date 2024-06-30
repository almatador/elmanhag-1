import React from "react";
import LogoSidebar from "../assets/Images/logoSidebar"
import MenuSide from "./MenuSide.jsx";
const Sidebar = () => {
       return (
              <>
                     <aside className="w-[20%] h-full overflow-hidden sticky top-0 flex flex-col items-center justify-between bg-mainColor ">
                            <LogoSidebar Width="100%" />
                            <MenuSide />
                     </aside>
              </>
       );
};

export default Sidebar;
