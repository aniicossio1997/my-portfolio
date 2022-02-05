import { Contact, Home, Projects, Tools } from "../pages";
import { IRoute } from "../ts/interfaces/Iroutes";

export const basicRoutes: IRoute[] = [
  {
    to: "/",
    path: "",
    Component: Home,
    name: "HOME",
  },
  {
    to: "/projects",
    path: "projects",
    Component: Projects,
    name: "PROJECTS",
  },
  {
    to: "/tools",
    path: "tools",
    Component: Tools,
    name: "TOOLS",
  },

  {
    to: "/contact",
    path: "contact",
    Component: Contact,
    name: "CONTACT",
  },
];
