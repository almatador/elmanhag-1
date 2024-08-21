import React from 'react'
import HeaderPageSection from '../../Components/HeaderPageSection'
import { AddCountryPage } from '../../Pages/AllPages'
import { useNavigate } from 'react-router-dom';



const AddCountryLayout = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1, { replace: true });
  };
  return (
    <>
    <div className="flex flex-col items-center gap-y-9">
      <HeaderPageSection handleClick={handleGoBack} name="Add Countries" />
      <AddCountryPage />
    </div>
    </>
  )
}

export default AddCountryLayout