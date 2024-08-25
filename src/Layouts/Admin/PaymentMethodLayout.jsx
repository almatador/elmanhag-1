import React from 'react'
import { PaymentMethodPage } from '../../Pages/AllPages'
import TitleHeader from '../../Components/TitleHeader'

const PaymentMethodLayout = () => {
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