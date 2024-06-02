import React, { Fragment } from "react";
import { routes } from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultPage from "./components/Default/DefaultPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((item) => {
            const Page = item.page;
            const Layout = item.isShowHeader ? DefaultPage : Fragment;
            return (
              <Route
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
