import React, { createContext, useEffect, useState } from 'react'
import HeaderPageSection from '../../Components/HeaderPageSection'
import { EditPaymentMethodPage } from '../../Pages/AllPages'
import { useNavigate, useParams } from 'react-router-dom';
export const paymentMethodEditContext = createContext()

const EditPaymentMethodLayout = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1, { replace: true });
  };
  const [paymentMethodEdit,setPaymentMethodEdit] = useState(null)

  const { paymentMethodId } = useParams();

  useEffect(() => {
    const paymentMethods = JSON.parse(localStorage.getItem('PaymentMethod')) || [];
    console.log('Payment Method from local storage:', paymentMethods); // Debugging log

    if (paymentMethods.length > 0) {
        const payment_Method = paymentMethods.find(c => c.id === parseInt(paymentMethodId));
        console.log('Selected Payment Methods:', payment_Method); // Debugging log

        setPaymentMethodEdit(payment_Method)
    } else {
        console.warn('No Payment Method available in local storage.'); // Warn if no countries are found
    }
}, [paymentMethodId]);

  return (
    <> 
      <HeaderPageSection handleClick={handleGoBack} name="Edit Payment Method" />
      <paymentMethodEditContext.Provider value={paymentMethodEdit}>
        <EditPaymentMethodPage />
      </paymentMethodEditContext.Provider>
    </>  )
}

export default EditPaymentMethodLayout
