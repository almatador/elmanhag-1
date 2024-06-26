import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import {
       Curricula,
       Duties,
       LiveClasses,
       Monthsreviews,
       FinalReviews,
       SolveExams
} from "./Layouts/AllLayouts"

import NotFoundPage from "./Pages/NotFoundPage";

export const router = createBrowserRouter([
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
       }
]);