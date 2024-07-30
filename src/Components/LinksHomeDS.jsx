import React, { useState } from "react";

import { NavLink } from "react-router-dom";


const LinksHomeDS = () => {
       const [isActiveHome, setIsActiveHome] = useState(true);
       const [isActiveLevels, setIsActiveLevels] = useState(false);
       const [isActiveAboutUs, setIsActiveAboutUs] = useState(false);
       const [isActiveConectUs, setIsActiveConectUs] = useState(false);

       const handleClickHome = () => {
              setIsActiveHome(!isActiveHome);
              setIsActiveLevels(false);
              setIsActiveAboutUs(false);
              setIsActiveConectUs(false);
       };
       const handleClickLevels = () => {
              setIsActiveHome(false);
              setIsActiveLevels(!isActiveLevels);
              setIsActiveAboutUs(false);
              setIsActiveConectUs(false);
       };
       const handleClickAboutUs = () => {
              setIsActiveAboutUs(!isActiveAboutUs);
              setIsActiveHome(false);
              setIsActiveLevels(false);
              setIsActiveConectUs(false);
       };
       const handleClickConectUs = () => {
              setIsActiveConectUs(!isActiveConectUs);
              setIsActiveHome(false);
              setIsActiveLevels(false);
              setIsActiveAboutUs(false);
       };
       return (
              <>
                     <div className="w-full LinksHomeDS flex flex-row-reverse items-center justify-between ">
                            <NavLink to="/" onClick={handleClickHome} className="w-full flex items-center justify-center gap-x-5 text-black text-xl font-primaryeRegular">
                                   <span>الرئيسيه</span>
                            </NavLink>
                            <NavLink to="/Levels" onClick={handleClickLevels} className="w-full flex items-center justify-center gap-x-5 text-black text-xl font-primaryeRegular">
                                   <span>المراحل</span>
                            </NavLink>
                            <NavLink to="/AboutUs" onClick={handleClickAboutUs} className="w-full flex items-center justify-center gap-x-5 text-black text-xl font-primaryeRegular">
                                   <span>من نحن </span>
                            </NavLink>
                            <NavLink to="/ConectUs" onClick={handleClickConectUs} className="w-full flex items-center justify-center gap-x-5 text-black text-xl font-primaryeRegular">
                                   <span>اتصل بنا </span>
                            </NavLink>
                     </div>
              </>
       );
};

export default LinksHomeDS;
