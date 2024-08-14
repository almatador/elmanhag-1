import React from 'react'
import { OperationsPage } from '../../Pages/AllPages'
import TitleHeader from '../../Components/TitleHeader'

const OperationsAD = () => {
       return (
              <>
                     <div className="flex flex-col items-center gap-y-4">
                            <TitleHeader text={"Operations"} spaceBottom={3} />
                            <OperationsPage />
                     </div>
              </>
       )
}

export default OperationsAD