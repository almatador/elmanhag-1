import React from 'react'
import HeaderPageSection from '../../Components/HeaderPageSection'
import { EditPaymentMethodPage } from '../../Pages/AllPages'

const EditPaymentMethodLayout = () => {
       const handleGoBack = () => {
              navigate(-1, { replace: true });
       };
       return (
              <>
                     <HeaderPageSection handleClick={handleGoBack} name="Edit" />
                     <EditPaymentMethodPage />
              </>
       )
}

export default EditPaymentMethodLayout    