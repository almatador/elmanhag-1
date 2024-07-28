import { Outlet, createBrowserRouter } from "react-router-dom";

import App from "./App";

import {
       Curricula,
       Duties,
       LiveClasses,
       MonthsReviews,
       FinalReviews,
       SolveExams,
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
import StudentContext from "./Context/StudentContext";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";


export const ContextNumper = createContext()

const AppLayoutSuperAdmin = () => (
       <>
              <div className="relative flex gap-x-4">
                     <SidebarSuperAdmin />
                     <div className="contentSection w-4/5 min-h-screen ">
                            <HeaderSuperAdmin />
                            <StudentContext>
                                   <Outlet />
                            </StudentContext>
                     </div>
              </div>
       </>
);
const AppLayoutAdmin = () => (
       <>
              <div className="relative flex gap-x-4">
                     <SidebarAdmin />
                     <div className="contentSection w-4/5 min-h-screen ">
                            <HeaderAdmin />
                            <StudentContext>
                                   <Outlet />
                            </StudentContext>
                     </div>
              </div>
       </>
);
const AppLayoutTeacher = () => (
       <>
              <div className="relative flex gap-x-4">
                     <SidebarTeacher />
                     <div className="contentSection w-4/5 min-h-screen ">
                            <HeaderTeacher />
                            <StudentContext>
                                   <Outlet />
                            </StudentContext>
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
                            <StudentContext>
                                   <Outlet />
                            </StudentContext>
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
                            <StudentContext>
                                   <Outlet />
                            </StudentContext>
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
                            <StudentContext>
                                   <Outlet />
                            </StudentContext>
                     </div>
              </div>
       </>
);

export const router = createBrowserRouter([
       {
              path: "/",
              element: <RegisterPage />,
       },
       {
              element: <AppLayoutSuperAdmin />,
              children: [
                     {
                            path: '/DashboardSuperAdmin',
                            element: <App />,
                     }
              ],
       },
       {
              element: <AppLayoutAdmin />,
              children: [
                     {
                            path: '/DashboardAdmin',
                            element: <App />,
                     }
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
              path: "*",
              element: <NotFoundPage />,
       },

]);
