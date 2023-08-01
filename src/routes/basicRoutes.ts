import { lazy } from "react";
import { IRoute } from "../ts/interfaces/Iroutes";
import { ImHome } from "react-icons/im";
import { BiBriefcase } from "react-icons/bi";
import {FaTools} from "react-icons/fa"
import {IoCall} from 'react-icons/io5'
//MdOutlineWork
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
    name: "home",
    icon:ImHome
  },
  {
    to: "/projects",
    path: "projects",
    Component: LazyProjects,
    name: "projects",
   icon:BiBriefcase
  },
  {
    to: "/tools",
    path: "tools",
    Component: LazyTools,
    name: "tools",
    icon:FaTools
  },

  {
    to: "/contact",
    path: "contact",
    Component: LazyContact,
    name: "contact",
    icon:IoCall
  },
];
