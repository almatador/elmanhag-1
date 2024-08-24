import React, { createContext, useEffect, useState } from 'react'
import HeaderPageSection from '../../Components/HeaderPageSection'
import { EditCountryPage } from '../../Pages/AllPages'
import { useNavigate, useParams } from 'react-router-dom';
export const countryEditContext = createContext()

const EditCountryLayout = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1, { replace: true });
  };
  const [countryEdit,setCountryEdit] = useState(null)

  const { countryId } = useParams();


  useEffect(() => {
    const countries = JSON.parse(localStorage.getItem('Countries')) || [];
    console.log('Countries from local storage:', countries); // Debugging log

    if (countries.length > 0) {
        const country = countries.find(c => c.id === parseInt(countryId));
        console.log('Selected Country:', country); // Debugging log

        setCountryEdit(country)
    } else {
        console.warn('No countries available in local storage.'); // Warn if no countries are found
    }
}, [countryId]);
  return (
    <>
    <div className="flex flex-col items-center gap-y-9">
      <HeaderPageSection handleClick={handleGoBack} name="Edit Countries" />
      <countryEditContext.Provider value={countryEdit}>
        <EditCountryPage />
      </countryEditContext.Provider>
    </div>
    </>
  )
}

export default EditCountryLayout