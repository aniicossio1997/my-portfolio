import { IconType } from "react-icons";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { ITool } from "../ts/interfaces/ITool";

const DataTools: ITool[] = [
  {
    name: "ReactJS",
    IconValue: FaReact,
  },
  {
    name: "React-Native",
    IconValue: FaReact,
  },
  {
    name: "css",
    IconValue: FaCss3Alt,
  },
  {
    name: "javascript",
    IconValue: FaJs,
  },
  {
    name: "bootstrap",
    IconValue: FaBootstrap,
  },
  {
    name: "Github",
    IconValue: FaGithub,
  },
  {
    name: "Vuejs",
    IconValue: FaVuejs,
  },
];
export default DataTools;
