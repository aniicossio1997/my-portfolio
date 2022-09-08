import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DelayedFallback } from "./components/common/loading/DelayedFallback";
import { SpinnerGrid } from "./components/common/loading/SpinnerGrid";
import Layout from "./layout";
import { NotFound } from "./pages";
import { basicRoutes } from "./routes/basicRoutes";
function App() {
  return (
    <>
      <Layout>
        <Suspense
          fallback={
            <DelayedFallback>
              <SpinnerGrid />
            </DelayedFallback>
          }
        >
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
