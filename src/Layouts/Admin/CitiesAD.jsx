import React from 'react'
import TitleHeader from '../../Components/TitleHeader'
import { CitiesPage } from '../../Pages/AllPages'

const CitiesAD = () => {
       return (
              <>
                     <div className="flex flex-col items-center gap-y-4">
                            <TitleHeader text={"Cities"} spaceBottom={3} />
                            <CitiesPage />
                     </div>
              </>
       )
}

export default CitiesAD