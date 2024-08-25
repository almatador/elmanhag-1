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
        <HeaderPageSection handleClick={handleGoBack} name="Add Cities" />
        <AddCityPage />
    </>  
    )
}

export default AddCityLayout