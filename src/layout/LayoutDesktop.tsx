import { useMediaQuery } from '@chakra-ui/react';
import Footer from 'components/footer';
import Header from 'components/header/Header';
import React from 'react'

export const LayoutDesktop = ({children}:any) => {
    const [isWidthMinThan] = useMediaQuery("(max-width: 990px)");

  return (
    <>
    <div>
        <Header />
        <main
          className={`main ${
            isWidthMinThan ? "margin-top-min" : "margin-top-max"
          }`}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
