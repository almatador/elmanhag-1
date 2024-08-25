import React, { createContext, useEffect, useState } from 'react'
import HeaderPageSection from '../../Components/HeaderPageSection'
import { EditCityPage } from '../../Pages/AllPages'
import { useNavigate, useParams } from 'react-router-dom';
export const cityEditContext = createContext()

const EditCityLayout = () => {

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1, { replace: true });
  };
  const [cityEdit,setCityEdit] = useState(null)

  const { cityId } = useParams();


  useEffect(() => {
    const cities = JSON.parse(localStorage.getItem('Cities')) || [];
    console.log('Cities from local storage:', cities); // Debugging log

    if (cities.length > 0) {
        const city = cities.find(c => c.id === parseInt(cityId));
        console.log('Selected City:', city); // Debugging log

        setCityEdit(city)
    } else {
        console.warn('No cities available in local storage.'); // Warn if no countries are found
    }
}, [cityId]);
  return (
    <>
      <HeaderPageSection handleClick={handleGoBack} name="Edit Cities" />
      <cityEditContext.Provider value={cityEdit}>
        <EditCityPage />
      </cityEditContext.Provider>
    </>
  )
}

export default EditCityLayout