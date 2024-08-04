import React from 'react'
import LinksSidebar from './LinksSidebar'
import TextTitle from './TextTitle'

const Sidebar = () => {
       return (
              <aside className="w-2/12  border-r-2 h-screen overflow-hidden flex flex-col items-center bg-white gap-y-6">
                     <div className="">
                            <TextTitle text={"Elmanhag"} color={"mainColor"} font={"bold"} />
                     </div>
                     <LinksSidebar />
              </aside>
       )
}

export default Sidebar