import { useMediaQuery } from "@chakra-ui/react";
import Header from "../components/header/Header";
import Footer from "../components/footer";
import "./style.css";
import { LayoutResponsive } from "./LayoutResponsive";
import { LayoutDesktop } from "./LayoutDesktop";
const Layout = ({ children }: any) => {
  const [isWidthMinThan] = useMediaQuery("(max-width: 990px)");
  return (
    <>
    {
      isWidthMinThan ? <LayoutResponsive children={children}/> : <LayoutDesktop children={children} />
    }
    </>
  );
};

export default Layout;
