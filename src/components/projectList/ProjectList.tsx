import { useTranslation } from "react-i18next";
import { IProject } from "../../ts/interfaces/IProject";
import ContainerCenter from "../common/ContainerCenter";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProjectList = () => {
  const { t } = useTranslation(["projects"]);
  //esto es el JSON
  const projects: IProject[] = t("projects", { returnObjects: true });
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Utilizar window.scrollY en lugar de window.screenY
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Eliminar window.scrollY del arreglo de dependencias

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  return (
    <ContainerCenter>
      {projects.map((data) => (
        <Card project={data} key={data.to} />
      ))}
      
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679; 
        </button>
      )}
    </ContainerCenter>
  );
};
export default ProjectList;
