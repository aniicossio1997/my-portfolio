import { Container, Stack } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import { NotFound } from "./pages";
import { basicRoutes } from "./routes/basicRoutes";
function App() {
  return (
    <>
      <Layout>
        <Suspense fallback="cargando....">
          <Routes>
            {basicRoutes.map((route) => (
              <Route
                key={route.to}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
