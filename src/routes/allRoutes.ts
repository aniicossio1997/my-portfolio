import { NotFound } from "../pages";
import { basicRoutes } from "./basicRoutes";

export const allRoutes = [
  ...basicRoutes,
  {
    to: "/notFound",
    path: "notFound",
    Component: NotFound,
    name: "notFound",
  },
];
