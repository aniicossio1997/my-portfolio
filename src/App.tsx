import { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/common/loading/Loading";
import { SpinnerGrid } from "./components/common/loading/SpinnerGrid";
import Layout from "./layout";
import { NotFound } from "./pages";
import { basicRoutes } from "./routes/basicRoutes";
const delay = 2;
function App() {
  const [showSpinner, setShowSpinner] = useState(true);
  useEffect(() => {
    let timer1 = setTimeout(() => setShowSpinner(false), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, [setShowSpinner]);

  return (
    <>
      <Layout>
        {showSpinner ? (
          <Loading />
        ) : (
          <Suspense fallback={null}>
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
        )}
      </Layout>
    </>
  );
}

export default App;
