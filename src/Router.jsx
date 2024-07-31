import { Outlet, createBrowserRouter } from "react-router-dom";

import App from "./App";

import {
       Curricula,
       Duties,
       LiveClasses,
       MonthsReviews,
       FinalReviews,
       SolveExams,
       AdminDB,
} from "./Layouts/AllLayouts";

import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import SidebarSuperAdmin from "./Components/SidebarSuperAdmin";

import SidebarAdmin from "./Components/SidebarAdmin";

import SidebarTeacher from "./Components/SidebarTeacher";
import SidebarAffiliate from "./Components/SidebarAffiliate";
import SidebarParent from "./Components/SidebarParent";
import SidebarStudent from "./Components/SidebarStudent";
import HeaderSuperAdmin from "./Components/HeaderSuperAdmin";

import HeaderAdmin from "./Components/HeaderAdmin";

import HeaderTeacher from "./Components/HeaderTeacher";
import HeaderAffiliate from "./Components/HeaderAffiliate";
import HeaderParent from "./Components/HeaderParent";
import HeaderStudent from "./Components/HeaderStudent";

import { createContext } from "react";

import UserContext from "./Context/UserContext";
import LoginPage from "./Pages/RegisterPage/LoginPage";
import SignUpPage from "./Pages/RegisterPage/SignUpPage";

import { HomePage } from "./Pages/AllPages";

import HeaderHome from "./Components/HeaderHome";
import FooterHome from "./Components/FooterHome";
import LevelsPage from "./Pages/LevelsPage/LevelsPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import ConectUsPage from "./Pages/ConectUsPage/ConectUsPage";

import { ContextProvider } from "./Context/Auth";
import ProtectedRoute from "./Components/Protected Data/ProtectedRoute";
import Unauthorized from "./Pages/Unauthorized/Unauthorized";
import ProtectedLogin from "./Components/Protected Data/ProtectedLogin";


export const ContextNumper = createContext()

const AppLayoutHomePage = () => (
       <>
              <div className="flex flex-col">
                     <HeaderHome />
                     <Outlet />
                     <FooterHome />
              </div>
       </>
);

const AppLayoutSuperAdmin = () => (
       <>
              <div className="relative flex gap-x-4">
                     <SidebarSuperAdmin />
                     <div className="contentSection w-4/5 min-h-screen ">
                            <HeaderSuperAdmin />
                            <UserContext>
                                   <Outlet />
                            </UserContext>
                     </div>
              </div>
       </>
);
const AppLayoutAdmin = () => (
       <>
              <div className="">
                     {/* <ContextProvider> */}

                     {/* <SidebarAdmin />
                     <div className="contentSection w-4/5 min-h-screen ">
                            <HeaderAdmin />
                            <UserContext> */}
                     <Outlet />
                     {/* </UserContext>
                     </div> */}
                     {/* </ContextProvider> */}
              </div>
       </>
);
const AppLayoutTeacher = () => (
       <>
              <div className="relative flex gap-x-4">
                     <SidebarTeacher />
                     <div className="contentSection w-4/5 min-h-screen ">
                            <HeaderTeacher />
                            <UserContext>
                                   <Outlet />
                            </UserContext>
                     </div>
              </div>
       </>
);
const AppLayoutAffiliate = () => (
       <>
              <div className="relative flex gap-x-4">
                     <SidebarAffiliate />
                     <div className="contentSection w-4/5 min-h-screen ">
                            <HeaderAffiliate />
                            <UserContext>
                                   <Outlet />
                            </UserContext>
                     </div>
              </div>
       </>
);
const AppLayoutParent = () => (
       <>
              <div className="relative flex gap-x-4">
                     <SidebarParent />
                     <div className="contentSection w-4/5 min-h-screen ">
                            <HeaderParent />
                            <UserContext>
                                   <Outlet />
                            </UserContext>
                     </div>
              </div>
       </>
);
const AppLayoutStudent = () => (
       <>
              <div className="relative flex gap-x-4 directionAR">
                     <SidebarStudent />
                     <div className="contentSection w-4/5 min-h-screen ">
                            <HeaderStudent />
                            <UserContext>
                                   <Outlet />
                            </UserContext>
                     </div>
              </div>
       </>
);

export const router = createBrowserRouter([
       {
         element: <AppLayoutHomePage />,
         path: "/",
         children: [
           {
             index: true, // This makes it the default route for "/"
             element: <HomePage />,
           },
           {
             path: "Levels",
             element: <LevelsPage />,
           },
           {
             path: "AboutUs",
             element: <AboutUsPage />,
           },
           {
             path: "ConectUs",
             element: <ConectUsPage />,
           },
         ],
       },
       {
         path: "/signUp",
         element: <SignUpPage />,
       },
       {
         path: '/login',
         element: <ProtectedLogin />, // ProtectedLogin will handle the logic to redirect
         children: [
           {
             path: '',
             element: <LoginPage />,
           },
         ],
       },
       {
         element: <AppLayoutSuperAdmin />,
         path: '/DashboardSuperAdmin',
         children: [
           {
             path: 'Dashboard',
             element: <App />,
           }
         ],
       },
       {
         element: <ProtectedRoute allowedRoles={['admin', 'super admin']} />,
         path: '/Dashboard',
         children: [
           {
             path: '',
             element: <AppLayoutAdmin />,
             children: [
               {
                 index: true,
                 element: <AdminDB />,
               },
             ],
           },
         ],
       },
       {
         element: <AppLayoutTeacher />,
         children: [
           {
             path: '/DashboardTeacher',
             element: <App />,
           }
         ],
       },
       {
         element: <AppLayoutAffiliate />,
         children: [
           {
             path: '/DashboardAffiliate',
             element: <App />,
           }
         ],
       },
       {
         element: <AppLayoutParent />,
         children: [
           {
             path: '/DashboardParent',
             element: <App />,
           }
         ],
       },
       {
         element: <AppLayoutStudent />,
         children: [
           {
             path: '/DashboardStudent',
             element: <App />,
           },
           {
             path: "/Curricula",
             element: <Curricula />,
           },
           {
             path: "/Duties",
             element: <Duties />,
           },
           {
             path: "/LiveClasses",
             element: <LiveClasses />,
           },
           {
             path: "/MonthsReviews",
             element: <MonthsReviews />,
           },
           {
             path: "/FinalReviews",
             element: <FinalReviews />,
           },
           {
             path: "/SolveExams",
             element: <SolveExams />,
           },
         ],
       },
       {
         path: "/unauthorized",
         element: <Unauthorized />,
       },
       {
         path: "*",
         element: <NotFoundPage />,
       },
     ]);
     
