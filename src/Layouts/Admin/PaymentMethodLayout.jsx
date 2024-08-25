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
                     <div className="flex flex-col items-center gap-y-4">
                            <TitleHeader text={"PaymentMethod"} spaceBottom={3} />
                            <PaymentMethodPage />
                     </div>
              </>
       )
}

export default PaymentMethodLayout




