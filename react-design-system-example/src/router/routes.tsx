import { RouteObject } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../pages/Home";
import { Dataset } from "../pages/Dataset";
import { NotFoundPage } from "../pages/NotFoundPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dataset/:persistentId",
        element: <Dataset />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
