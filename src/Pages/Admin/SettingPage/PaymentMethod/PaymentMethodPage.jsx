import React from 'react'

const PaymentMethodPage = () => {
       return (
              <>
                     <div className="w-full flex flex-col h-full gap-y-3">
                            <div className="sm:w-full xl:w-1/12">
                                   <Link to="add">
                                          <ButtonAdd Text={"Add"} BgColor={"white"} Color={"thirdColor"} iconColor="mainColor" Size={"xl"} />
                                   </Link>
                            </div>
                     </div>
              </>
       )
}

export default PaymentMethodPage