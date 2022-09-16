import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import "./index.css";
import App from "./routes/App";
import Blog from "./routes/Blog";
import Layout from "./routes/Layout";

const childrenRoutes: RouteObject[] = [
  {
    id: "app",
    path: "/",
    element: <App />,
  },
  {
    id: "blog",
    path: "/blog",
    element: <Blog />,
  },
  {
    id: "github",
    path: "/github",
    element: <div>Github</div>,
  },
];

const routes = [
  {
    path: "/",
    element: <Layout childrenRoutes={childrenRoutes} />,
    children: childrenRoutes,
  },
];

export const routers = createBrowserRouter(routes);
createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>
);
