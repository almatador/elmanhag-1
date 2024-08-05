import React from 'react'
import CartStudent from '../../Components/CartStudent'
import TitleHeader from '../../Components/TitleHeader'

const StudentUser = () => {
       return (
              <>
                     <div className="flex flex-col items-center">
                            <TitleHeader text={"Student"} />
                            <div className="w-full flex flex-wrap gap-y-4 items-center justify-between">
                                   <CartStudent name={"Total students"} count={100} />
                                   <CartStudent name={"Free students"} count={150} />
                                   <CartStudent name={"Paid students"} count={200} />
                                   <CartStudent name={"banned students"} count={140} />
                            </div>
                            <div className="">
                                   {/* Search && Filter */}
                                   
                            </div>
                     </div>
              </>
       )
}

export default StudentUser