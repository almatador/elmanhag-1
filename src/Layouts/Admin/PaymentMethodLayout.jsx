import React from "react";
import TitleHeader from "../../Components/TitleHeader";
import { ButtonAdd } from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { PaymentMethodPage } from "../../Pages/AllPages";
import HeaderPageSection from "../../Components/HeaderPageSection";

const PaymentMethodLayout = () => {
       const navigate = useNavigate();
  const handleGoBack = () => {
         navigate(-1); // This navigates back to the previous page
  };
       return (
              <>
              <div className="w-full flex items-start flex-col gap-y-3">
                     <HeaderPageSection handleClick={handleGoBack} name={'Payment Method'} />

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




