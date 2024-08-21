import React from 'react'
import TitleHeader from '../../Components/TitleHeader'
import { CountriesPage } from '../../Pages/AllPages'
import { ButtonAdd } from '../../Components/Button'
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeaderPageSection from "../../Components/HeaderPageSection";




const CountriesLayout = () => {

       const navigate = useNavigate();

       const handleGoBack = () => {
              navigate(-1); // This navigates back to the previous page
       };
       return (
              <>

                     <div className="w-full flex items-start flex-col gap-y-3">
                            <HeaderPageSection handleClick={handleGoBack} name={'Countries'} />

                            <div className="sm:w-full xl:w-1/12">
                                   <Link to="add">
                                          <ButtonAdd Text={"Add"} BgColor={"white"} Color={"thirdColor"} iconColor="mainColor" Size={"xl"} />
                                   </Link>
                            </div>

                            <CountriesPage />
                     </div>
              </>
       )
}

export default CountriesLayout