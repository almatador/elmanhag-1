import React from 'react'
import TitleHeader from '../../Components/TitleHeader'
import { ParentRelationPage } from '../../Pages/AllPages'

const ParentRelationAD = () => {
       return (
              <>
                     <div className="flex flex-col items-center gap-y-4">
                            <TitleHeader text={"Parent Relation"} spaceBottom={3} />
                            <ParentRelationPage />
                     </div>
              </>
       )
}

export default ParentRelationAD