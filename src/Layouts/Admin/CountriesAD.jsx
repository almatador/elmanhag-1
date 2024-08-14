import React from 'react'
import TitleHeader from '../../Components/TitleHeader'
import { CountriesPage } from '../../Pages/AllPages'

const CountriesAD = () => {
       return (
              <>
                     <div className="flex flex-col items-center gap-y-4">
                            <TitleHeader text={"Countries"} spaceBottom={3} />
                            <CountriesPage />
                     </div>
              </>
       )
}

export default CountriesAD