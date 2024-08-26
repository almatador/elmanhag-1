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
      <HeaderPageSection handleClick={handleGoBack} name="Add Countries" />
      <AddCountryPage />
    </>
  )
}

export default AddCountryLayout