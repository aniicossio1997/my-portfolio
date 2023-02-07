import { Box, Center, Stack, useMediaQuery, VStack } from "@chakra-ui/react";
import Header from "../components/header/Header";
import Footer from "../components/footer";
import "./style.css"
const Layout = ({ children }: any) => {
  const [isHeightMinThan800] = useMediaQuery("(max-height: 800px)");
  const [isWidthMinThan900] = useMediaQuery("(max-width: 990px)");
  return (
    <>
      <div>
        <div className="header"></div>
          <Header />
      <main className={ `main ${isWidthMinThan900 ? "margin-top-min" : "margin-top-max"}`}
      
      >{children}
      </main>
      <Footer/>
      </div>
    </>
  );
};

export default Layout;
