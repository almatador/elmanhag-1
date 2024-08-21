import React from 'react'
import { useNavigate } from 'react-router-dom';
import HeaderPageSection from '../../Components/HeaderPageSection';
import { AddCategoryPage } from '../../Pages/AllPages';

const AddCategoryLayout = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1, { replace: true });
  };
  return (
    <>
      <HeaderPageSection handleClick={handleGoBack} name="Add" />
      <AddCategoryPage />
    </>
  )
}

export default AddCategoryLayout