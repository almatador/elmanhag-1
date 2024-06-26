import { Outlet, createBrowserRouter } from "react-router-dom";

import App from "./App";

import {
       Curricula,
       Duties,
       LiveClasses,
       Monthsreviews,
       FinalReviews,
       SolveExams,
} from "./Layouts/AllLayouts";

import NotFoundPage from "./Pages/NotFoundPage";
import Sidebar from "./Components/Sidebar";

const AppLayout = () => (
       <>
              <div className="flex gap-x-4">

                     <Sidebar />
                     <Outlet />
              </div>
       </>
);

export const router = createBrowserRouter([
       {
              element: <AppLayout />,
              children: [
                     {
                            path: "/",
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
                            path: "/Monthsreviews",
                            element: <Monthsreviews />,
                     },
                     {
                            path: "/FinalReviews",
                            element: <FinalReviews />,
                     },
                     {
                            path: "/SolveExams",
                            element: <SolveExams />,
                     },
                     {
                            path: "*",
                            element: <NotFoundPage />,
                     },
              ],
       },
]);
