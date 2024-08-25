import React from 'react'
import HeaderPageSection from '../../Components/HeaderPageSection'
import { useNavigate } from 'react-router-dom';
import { AddPaymentMethodPage } from '../../Pages/AllPages';

const AddPaymentMethodLayout = () => {
       const navigate = useNavigate();
       const handleGoBack = () => {
              navigate(-1, { replace: true });
       };
       return (
              <>
                     <div className="flex flex-col items-center gap-y-9">
                            <HeaderPageSection handleClick={handleGoBack} name="Add PaymentMethod" />
                            <AddPaymentMethodPage />
                     </div>
              </>
       )
}

export default AddPaymentMethodLayout