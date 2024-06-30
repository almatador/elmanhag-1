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

const token = localStorage.getItem('token');

const AppLayout = () => (
       <>
              <div className="relative flex gap-x-4">
                            <Sidebar />
                     <div className="contentSection w-4/5 min-h-screen">
                            <Header />
                            <Outlet />
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
