import React from 'react'
import HeaderPageSection from '../../Components/HeaderPageSection'
import { AddCityPage } from '../../Pages/AllPages'
import { useNavigate } from 'react-router-dom';

const AddCityLayout = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1, { replace: true });
  };
  return (
    <>
      <div className="flex flex-col items-center gap-y-9">
        <HeaderPageSection handleClick={handleGoBack} name="Add Cities" />
        <AddCityPage />
      </div>
    </>  )
}

export default AddCityLayout