import React from 'react'
import HeaderPageSection from '../../Components/HeaderPageSection'
import { Link, useNavigate } from 'react-router-dom'
import { PaymentMethodPage } from '../../Pages/AllPages'
import { ButtonAdd } from '../../Components/Button'

const PaymentMethodLayout = () => {
       const navigate = useNavigate();
       const handleGoBack = () => {
              navigate(-1); // This navigates back to the previous page
       };
       return (
              <>
                     <div className="w-full flex items-start flex-col gap-y-3">
                            <HeaderPageSection handleClick={handleGoBack} name={'PaymentMethod'} />

                            <div className="sm:w-full xl:w-1/12">
                                   <Link to="add">
                                          <ButtonAdd Text={"Add"} BgColor={"white"} Color={"thirdColor"} iconColor="mainColor" Size={"xl"} />
                                   </Link>
                            </div>

                            <PaymentMethodPage />
                     </div>
              </>
       )
}

export default PaymentMethodLayout