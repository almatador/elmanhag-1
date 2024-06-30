import React from 'react'
import Button from "./Button"

const Header = () => {
       return (
              <>
                     <div className="w-full flex items-center
                     justify-between m-2 mr-2 p-4 shadow-md rounded-lg">
                            <div>
                                   {/* <UserImage Width=""     /> */}
                                   <span className='text-2xl font-medium text-mainColor'>أهلا بك محمد</span>
                            </div>
                            <Button Text="تسجيل خروج" BgColor="#D01025" Color="#fff" Size="xl" />
                     </div>
              </>
       )
}

export default Header