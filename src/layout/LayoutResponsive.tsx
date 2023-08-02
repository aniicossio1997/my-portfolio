import Footer from 'components/footer';
import Header from 'components/header/Header';
import React, { useEffect, useState } from 'react'

export const LayoutResponsive = ({children}:any) => {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) { // Utilizar window.scrollY en lugar de window.screenY
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
    <>
        <div>
        <Header />
        <main
          className={"margin-top-max" }
        >
          {children}
        </main>
        {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679; 
        </button>
      )}
        <Footer />
      </div>

    </>
  )
}
