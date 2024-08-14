import React from 'react'
import { EditProfilePage } from '../../Pages/AllPages'
import Taps from '../../Components/Taps'

const EditeProfileStudent = () => {
       return (
              <>
                     <div className="LinksProfile flex flex-wrap w-full justify-between mb-8 pt-5">

                            <Taps path={'profile'} name={"profile"} />
                            <Taps path={'parent'} name={"parent"} />
                            <Taps path={'Purchases'} name={"Purchases"} />
                            <Taps path={'Progress'} name={"Progress"} />
                            <Taps path={'loginHistory'} name={"loginHistory"} />
                     </div>
                     <EditProfilePage />
              </>
       )
}

export default EditeProfileStudent