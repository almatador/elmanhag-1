import React from 'react'
import { CategoriesPage } from '../../Pages/AllPages'
import TitleHeader from '../../Components/TitleHeader';

const CategoriesEducation = () => {
  return (
    <>
      <div className="flex flex-col items-center h-full gap-y-4">
        <TitleHeader text={"Categories"} spaceBottom={3} />
        <CategoriesPage />
      </div>
    </>
  )
}

export default CategoriesEducation