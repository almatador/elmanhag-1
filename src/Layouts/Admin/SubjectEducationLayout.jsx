import React from 'react'
import { SubjectPage } from '../../Pages/AllPages'
import TitleHeader from '../../Components/TitleHeader'

const SubjectEducationLayout = () => {
  return (
    <>
      <div className="flex flex-col items-center h-full gap-y-4">
        <TitleHeader text={"Subject"} spaceBottom={3} />
        <SubjectPage />
      </div>
    </>
  )
}

export default SubjectEducationLayout