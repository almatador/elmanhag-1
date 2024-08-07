import React, { useEffect, useState } from "react";

import {
       AffiliateIcon,
       DashboardIcon,
       EducationIcon,
       ExamsIcon,
       FinancialIcon,
       HomeWorkIcon,
       LiveIcon,
       MarketingIcon,
       NoticeBoardIcon,
       ReportsIcon,
       RevisionIcon,
       SettingsIcon,
       SupportIcon,
       UserIcon,
} from "./Icons/All_Icons";
import { Link } from "react-router-dom";


const LinksSidebar = () => {
       const savedState = JSON.parse(localStorage.getItem('sidebarState')) || {};

       // Define the initial state values using the saved state or fallback to default values
       const [isActiveDashboard, setIsActiveDashboard] = useState(savedState.isActiveDashboard ?? true);
       const [isActiveUser, setIsActiveUser] = useState(savedState.isActiveUser ?? false);
       /* Childern User */
       const [openListUser, setOpenListUser] = useState(savedState.openListUser ?? false);
       const [isActiveStudent, setIsActiveStudent] = useState(savedState.isActiveStudent ?? false);
       const [isActiveParent, setIsActiveParent] = useState(savedState.isActiveParent ?? false);
       const [isActiveTeacher, setIsActiveTeacher] = useState(savedState.isActiveTeacher ?? false);
       const [isActiveAdmin, setIsActiveAdmin] = useState(savedState.isActiveAdmin ?? false);
       /* ///Childern User */
       /* Childern Education */
       const [isActiveEducation, setIsActiveEducation] = useState(savedState.isActiveEducation ?? false);
       const [openListEducation, setOpenListEducation] = useState(savedState.openListEducation ?? false);
       const [isActiveCategories, setIsActiveCategories] = useState(savedState.isActiveCategories ?? false);
       const [isActiveSubject, setIsActiveSubject] = useState(savedState.isActiveSubject ?? false);
       const [isActiveBundles, setIsActiveBundles] = useState(savedState.isActiveBundles ?? false);
       const [isActiveQuestionsBank, setIsActiveQuestionsBank] = useState(savedState.isActiveQuestionsBank ?? false);
       /* ///Childern Education */
       const [isActiveHomeWork, setIsActiveHomeWork] = useState(savedState.isActiveHomeWork ?? false);
       const [isActiveRevision, setIsActiveRevision] = useState(savedState.isActiveRevision ?? false);
       const [isActiveExams, setIsActivExams] = useState(savedState.isActiveExams ?? false);
       const [isActiveLive, setIsActiveLive] = useState(savedState.isActiveLive ?? false);
       const [isActiveMarketing, setIsActiveMarketing] = useState(savedState.isActiveMarketing ?? false);
       const [isActiveFinancial, setIsActiveFinancial] = useState(savedState.isActiveFinancial ?? false);
       const [isActiveAffiliate, setIsActiveAffiliate] = useState(savedState.isActiveAffiliate ?? false);
       const [isActiveSupport, setIsActiveSupport] = useState(savedState.isActiveSupport ?? false);
       const [isActiveReports, setIsActiveReports] = useState(savedState.isActiveReports ?? false);
       const [isActiveSetting, setIsActiveSetting] = useState(savedState.isActiveSetting ?? false);
       const [isActiveNoticeBoard, setIsActiveNoticeBoard] = useState(savedState.isActiveNoticeBoard ?? false);

       useEffect(() => {
              const sidebarState = {
                     isActiveDashboard,
                     isActiveUser,
                     openListUser,
                     isActiveStudent,
                     isActiveParent,
                     isActiveTeacher,
                     isActiveAdmin,
                     isActiveEducation,
                     openListEducation,
                     isActiveCategories,
                     isActiveSubject,
                     isActiveBundles,
                     isActiveQuestionsBank,
                     isActiveHomeWork,
                     isActiveRevision,
                     isActiveExams,
                     isActiveLive,
                     isActiveMarketing,
                     isActiveFinancial,
                     isActiveAffiliate,
                     isActiveSupport,
                     isActiveReports,
                     isActiveSetting,
                     isActiveNoticeBoard,
              };
              localStorage.setItem('sidebarState', JSON.stringify(sidebarState));
       }, [isActiveDashboard, isActiveUser, openListUser, isActiveStudent, isActiveParent, isActiveTeacher, isActiveAdmin, isActiveEducation, openListEducation, isActiveCategories, isActiveSubject, isActiveBundles, isActiveQuestionsBank, isActiveHomeWork, isActiveRevision, isActiveExams, isActiveLive, isActiveMarketing, isActiveFinancial, isActiveAffiliate, isActiveSupport, isActiveReports, isActiveSetting, isActiveNoticeBoard]);


       const handleClickDashboard = () => {
              setIsActiveDashboard(true);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickUser = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(true);
              setOpenListUser(true);
              setIsActiveStudent(true);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       /* Childern User */
       const handleClickStudent = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(true);
              setOpenListUser(true);
              setIsActiveStudent(true);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickParent = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(true);
              setOpenListUser(true);
              setIsActiveStudent(false);
              setIsActiveParent(true);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickTeacher = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(true);
              setOpenListUser(true);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(true);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickAdmin = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(true);
              setOpenListUser(true);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(true);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       /* ///Childern User */
       const handleClickEducation = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(true)
              setIsActiveCategories(true)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(false)
              setOpenListEducation(true)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       /* Childern Education */
       const handleClickCategories = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(true)
              setOpenListEducation(true)
              setIsActiveCategories(true)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickSubject = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(true)
              setOpenListEducation(true)
              setIsActiveCategories(false)
              setIsActiveSubject(true)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickBundles = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(true)
              setOpenListEducation(true)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(true)
              setIsActiveQuestionsBank(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickQuestionsBank = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(true)
              setOpenListEducation(true)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       /* ///Childern Education */
       const handleClickHomeWork = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(true)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickRevision = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(true)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickExams = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(true)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickLive = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(true)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickMarketing = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(true)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickFinancial = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(true)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickAffiliate = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(true)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickSupport = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(true)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickReports = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(true)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(false)
       };
       const handleClickSetting = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(true)
              setIsActiveNoticeBoard(false)
       };
       const handleClickNoticeBoard = (e) => {
              setIsActiveDashboard(false);
              setIsActiveUser(false);
              setOpenListUser(false);
              setIsActiveStudent(false);
              setIsActiveParent(false);
              setIsActiveTeacher(false);
              setIsActiveAdmin(false);
              setIsActiveEducation(false)
              setOpenListEducation(false)
              setIsActiveCategories(false)
              setIsActiveSubject(false)
              setIsActiveBundles(false)
              setIsActiveQuestionsBank(true)
              setOpenListEducation(false)
              setIsActiveHomeWork(false)
              setIsActiveRevision(false)
              setIsActivExams(false)
              setIsActiveLive(false)
              setIsActiveMarketing(false)
              setIsActiveFinancial(false)
              setIsActiveAffiliate(false)
              setIsActiveSupport(false)
              setIsActiveReports(false)
              setIsActiveSetting(false)
              setIsActiveNoticeBoard(true)
       };
       return (
              <>
                     <div className="LinksSidebar w-full h-full flex flex-col items-center justify-start">
                            <Link to="/dashboardAdmin" onClick={handleClickDashboard} className={`${isActiveDashboard ? 'active' : ''} w-full flex items-center justify-start pl-6 py-[9px] gap-x-5`}>
                                   <DashboardIcon isActive={isActiveDashboard} />
                                   <span className={`${isActiveDashboard ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}>Dashboard</span>
                            </Link>
                            <Link to="student" onClick={handleClickUser} className={`${isActiveUser ? 'active' : ''} w-full flex items-center justify-start pl-6 py-[9px] gap-x-5`}>
                                   <UserIcon Width={25} Height={23} isActive={isActiveUser} />
                                   <span className={`${isActiveUser ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}>User</span>
                            </Link>
                            <div className={`${openListUser ? "h-36" : "h-0 overflow-hidden"} w-full transition-all duration-500`}>
                                   <ul className={`${openListUser ? "h-full overflow-hidden" : "h-0 overflow-hidden"} listUser ml-[20%] bg-blacks transition-all duration-700 flex flex-col gap-y-2`} >
                                          <li className={`${isActiveStudent ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}><Link to={"student"} onClick={handleClickStudent}>Student</Link></li>
                                          <li className={`${isActiveParent ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}><Link to={"parent"} onClick={handleClickParent}>Parent</Link></li>
                                          <li className={`${isActiveTeacher ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}><Link to={"teacher"} onClick={handleClickTeacher}>Teacher</Link></li>
                                          <li className={`${isActiveAdmin ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}><Link to={"admin"} onClick={handleClickAdmin}>Admin</Link></li>
                                   </ul>
                            </div>
                            <Link to="categories" onClick={handleClickEducation} className={` ${isActiveEducation ? 'active' : ''} w-full flex items-center justify-start pl-6 py-[9px] gap-x-5`}>
                                   <EducationIcon Width={25} Height={23} isActive={isActiveEducation} />
                                   <span className={`${isActiveEducation ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}>Education</span>
                            </Link>
                            <div className={`${openListEducation ? "h-36" : "h-0 overflow-hidden"} w-full transition-all duration-500`}>
                                   <ul className={`${openListEducation ? "h-full overflow-hidden" : "h-0 overflow-hidden"} listUser ml-[20%] bg-blacks transition-all duration-700 flex flex-col gap-y-2`} >
                                          <li className={`${isActiveCategories ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}><Link to={"categories"} onClick={handleClickCategories}>Categories</Link></li>
                                          <li className={`${isActiveSubject ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}><Link to={"subject"} onClick={handleClickSubject}>Subject</Link></li>
                                          <li className={`${isActiveBundles ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}><Link to={"bundles"} onClick={handleClickBundles}>Bundles</Link></li>
                                          <li className={`${isActiveQuestionsBank ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}><Link to={"questionsbank"} onClick={handleClickQuestionsBank}>Questions Bank</Link></li>
                                   </ul>
                            </div>
                            <Link to="homework" onClick={handleClickHomeWork} className={`${isActiveHomeWork ? 'active' : ''} w-full flex items-center justify-start pl-6 py-[9px] gap-x-5`}>
                                   <HomeWorkIcon Width={25} Height={23} isActive={isActiveHomeWork} />
                                   <span className={`${isActiveHomeWork ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}>H.W</span>
                            </Link>
                            <Link to="revision" onClick={handleClickRevision} className={`${isActiveRevision ? 'active' : ''} w-full flex items-center justify-start pl-6 py-[9px] gap-x-5`}>
                                   <RevisionIcon Width={25} Height={23} isActive={isActiveRevision} />
                                   <span className={`${isActiveRevision ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}>Revision</span>
                            </Link>
                            <Link to="exams" onClick={handleClickExams} className={`${isActiveExams ? 'active' : ''} w-full flex items-center justify-start pl-6 py-[9px] gap-x-5`}>
                                   <ExamsIcon Width={25} Height={23} isActive={isActiveExams} />
                                   <span className={`${isActiveExams ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}>Exams</span>
                            </Link>
                            <Link to="live" onClick={handleClickLive} className={`${isActiveLive ? 'active' : ''} w-full flex items-center justify-start pl-6 py-[9px] gap-x-5`}>
                                   <LiveIcon Width={25} Height={23} isActive={isActiveLive} />
                                   <span className={`${isActiveLive ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}>Live</span>
                            </Link>
                            <Link to="marketing" onClick={handleClickMarketing} className={`${isActiveMarketing ? 'active' : ''} w-full flex items-center justify-start pl-6 py-[9px] gap-x-5`}>
                                   <MarketingIcon Width={25} Height={23} isActive={isActiveMarketing} />
                                   <span className={`${isActiveMarketing ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}>Marketing</span>
                            </Link>
                            <Link to="financial" onClick={handleClickFinancial} className={`${isActiveFinancial ? 'active' : ''} w-full flex items-center justify-start pl-6 py-[9px] gap-x-5`}>
                                   <FinancialIcon Width={25} Height={23} isActive={isActiveFinancial} />
                                   <span className={`${isActiveFinancial ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}>Financial</span>
                            </Link>
                            <Link to="affiliate" onClick={handleClickAffiliate} className={`${isActiveAffiliate ? 'active' : ''} w-full flex items-center justify-start pl-6 py-[9px] gap-x-5`}>
                                   <AffiliateIcon Width={25} Height={23} isActive={isActiveAffiliate} />
                                   <span className={`${isActiveAffiliate ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}>Affiliate</span>
                            </Link>
                            <Link to="support" onClick={handleClickSupport} className={`${isActiveSupport ? 'active' : ''} w-full flex items-center justify-start pl-6 py-[9px] gap-x-5`}>
                                   <SupportIcon Width={25} Height={23} isActive={isActiveSupport} />
                                   <span className={`${isActiveSupport ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}>Support</span>
                            </Link>
                            <Link to="reports" onClick={handleClickReports} className={`${isActiveReports ? 'active' : ''} w-full flex items-center justify-start pl-6 py-[9px] gap-x-5`}>
                                   <ReportsIcon Width={25} Height={23} isActive={isActiveReports} />
                                   <span className={`${isActiveReports ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}>Reports</span>
                            </Link>
                            <Link to="setting" onClick={handleClickSetting} className={`${isActiveSetting ? 'active' : ''} w-full flex items-center justify-start pl-6 py-[9px] gap-x-5`}>
                                   <SettingsIcon Width={25} Height={23} isActive={isActiveSetting} />
                                   <span className={`${isActiveSetting ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}>Setting</span>
                            </Link>
                            <Link to="noticeboard" onClick={handleClickNoticeBoard} className={`${isActiveNoticeBoard ? 'active' : ''} w-full flex items-center justify-start pl-6 py-[9px] gap-x-5`}>
                                   <NoticeBoardIcon Width={25} Height={23} isActive={isActiveNoticeBoard} />
                                   <span className={`${isActiveNoticeBoard ? "text-mainColor" : "text-thirdColor"} hover:text-mainColor text-lg font-[400]`}>Notice Board</span>
                            </Link>
                            <Link to="add" className={`w-full flex items-center justify-start pl-6 py-[9px] gap-x-5`}>
                                   <NoticeBoardIcon Width={25} Height={23} isActive={isActiveNoticeBoard} />
                                   <span className={`text-mainColor  hover:text-mainColor text-lg font-[400]`}>Notice Board</span>
                            </Link>

                     </div >
              </>
       );
};

export default LinksSidebar;
