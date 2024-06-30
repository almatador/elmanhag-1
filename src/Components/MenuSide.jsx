import React, { useState } from "react";

import {
       CurriculaIcon,
       DutiesIcon,
       FinalReviewsIcon,
       HomeIcon,
       LiveClassesIcon,
       MonthsReviewsIcon,
       SolveExamsIcon,
} from "./Icons/All_Icons.js";
import { NavLink } from "react-router-dom";


const MenuSide = () => {
       const [isActiveHome, setIsActiveHome] = useState(true);
       const [isActiveCurricula, setIsActiveCurricula] = useState(false);
       const [isActiveDuties, setIsActiveDuties] = useState(false);
       const [isActiveLiveClasses, setIsActiveLiveClasses] = useState(false);
       const [isActiveMonthsReviews, setIsActiveMonthsReviews] = useState(false);
       const [isActiveFinalReviews, setIsActiveFinalReviews] = useState(false);
       const [isActiveSolveExams, setIsActiveSolveExams] = useState(false);

       const handleClickHome = () => {
              setIsActiveHome(!isActiveHome);
              setIsActiveCurricula(false);
              setIsActiveDuties(false);
              setIsActiveLiveClasses(false);
              setIsActiveMonthsReviews(false);
              setIsActiveFinalReviews(false);
              setIsActiveSolveExams(false);
       };
       const handleClickCurricula = () => {
              setIsActiveHome(false);
              setIsActiveCurricula(!isActiveCurricula);
              setIsActiveDuties(false);
              setIsActiveLiveClasses(false);
              setIsActiveMonthsReviews(false);
              setIsActiveFinalReviews(false);
              setIsActiveSolveExams(false);
       };
       const handleClickDuties = () => {
              setIsActiveDuties(!isActiveDuties);
              setIsActiveHome(false);
              setIsActiveCurricula(false);
              setIsActiveLiveClasses(false);
              setIsActiveMonthsReviews(false);
              setIsActiveFinalReviews(false);
              setIsActiveSolveExams(false);
       };
       const handleClickLiveClasses = () => {
              setIsActiveLiveClasses(!isActiveLiveClasses);
              setIsActiveHome(false);
              setIsActiveCurricula(false);
              setIsActiveDuties(false);
              setIsActiveMonthsReviews(false);
              setIsActiveFinalReviews(false);
              setIsActiveSolveExams(false);
       };
       const handleClickMonthsReviews = () => {
              setIsActiveMonthsReviews(!isActiveMonthsReviews);
              setIsActiveHome(false);
              setIsActiveCurricula(false);
              setIsActiveDuties(false);
              setIsActiveLiveClasses(false);
              setIsActiveFinalReviews(false);
              setIsActiveSolveExams(false);
       };
       const handleClickFinalReviews = () => {
              setIsActiveFinalReviews(!isActiveFinalReviews);
              setIsActiveHome(false);
              setIsActiveCurricula(false);
              setIsActiveDuties(false);
              setIsActiveLiveClasses(false);
              setIsActiveMonthsReviews(false);
              setIsActiveSolveExams(false);
       };
       const handleClickSolveExams = () => {
              setIsActiveSolveExams(!isActiveSolveExams);
              setIsActiveHome(false);
              setIsActiveCurricula(false);
              setIsActiveDuties(false);
              setIsActiveLiveClasses(false);
              setIsActiveMonthsReviews(false);
              setIsActiveFinalReviews(false);
       };
       return (
              <>
                     <div className="w-full h-full mt-4 mb-8 flex justify-end">
                            <div className="MenuSide w-5/6 flex flex-col items-start gap-y-4">
                                   <NavLink to="/" onClick={handleClickHome} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium ">
                                          <HomeIcon isActive={isActiveHome} />
                                          <span>الرئيسيه</span>
                                   </NavLink>
                                   <NavLink to="/Curricula" onClick={handleClickCurricula} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <CurriculaIcon isActive={isActiveCurricula} />
                                          <span>مناهج</span>
                                   </NavLink>
                                   <NavLink to="/Duties" onClick={handleClickDuties} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <DutiesIcon isActive={isActiveDuties} />
                                          <span>واجبات</span>
                                   </NavLink>
                                   <NavLink to="/LiveClasses" onClick={handleClickLiveClasses} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <LiveClassesIcon isActive={isActiveLiveClasses} />
                                          <span>حصص لايف</span>
                                   </NavLink>
                                   <NavLink to="/MonthsReviews" onClick={handleClickMonthsReviews} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <MonthsReviewsIcon isActive={isActiveMonthsReviews} />
                                          <span>مراجعات شهور </span>
                                   </NavLink>
                                   <NavLink to="/FinalReviews" onClick={handleClickFinalReviews} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <FinalReviewsIcon isActive={isActiveFinalReviews} />
                                          <span>مراجعه نهائيه</span>
                                   </NavLink>
                                   <NavLink to="/SolveExams" onClick={handleClickSolveExams} className="w-full flex px-0 py-2 items-center justify-start gap-x-5 text-secoundColor text-xl font-medium">
                                          <SolveExamsIcon isActive={isActiveSolveExams} />
                                          <span>حل امتحانات</span>
                                   </NavLink>
                            </div>
                     </div>
              </>
       );
};

export default MenuSide;
