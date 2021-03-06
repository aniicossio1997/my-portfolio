import { lazy } from "react";
import { IRoute } from "../ts/interfaces/Iroutes";

const LazyContact = lazy(
  () => import(/* webpackChunkName: "Contact" */ "../pages/Contact")
);
const LazyHome = lazy(
  () => import(/* webpackChunkName: "Home" */ "../pages/Home")
);
const LazyProjects = lazy(
  () => import(/* webpackChunkName: "Pojects" */ "../pages/Projects")
);
const LazyTools = lazy(
  () => import(/* webpackChunkName: "Tools" */ "../pages/Tools")
);

export const basicRoutes: IRoute[] = [
  {
    to: "/",
    path: "",
    Component: LazyHome,
    name: "HOME",
  },
  {
    to: "/projects",
    path: "projects",
    Component: LazyProjects,
    name: "PROJECTS",
  },
  {
    to: "/tools",
    path: "tools",
    Component: LazyTools,
    name: "TOOLS",
  },

  {
    to: "/contact",
    path: "contact",
    Component: LazyContact,
    name: "CONTACT",
  },
];
