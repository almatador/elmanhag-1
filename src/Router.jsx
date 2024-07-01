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
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import { createContext } from "react";

const token = localStorage.getItem('token');

export const ContextNumper = createContext()

const AppLayout = () => (
       <>
              <div className="relative flex gap-x-4">
                     <Sidebar />
                     <div className="contentSection w-4/5 min-h-screen">
                            <Header />
                            <ContextNumper.Provider value="sdfsdf">
                                   <Outlet />
                            </ContextNumper.Provider>
                     </div>
              </div>
       </>
);

export const router = createBrowserRouter([
       {
              element: <AppLayout />,
              children: [
                     {
                            // path: `/:${token}`,
                            // path: '/token/:token',
                            path: '/',
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
