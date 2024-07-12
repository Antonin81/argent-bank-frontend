import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { Provider } from "react-redux";
import { store } from "./store";
import Logout from "./components/Logout/logout";

function AppRouter() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Layout>
                  <LandingPage />
                </Layout>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <Layout>
                  <LoginPage />
                </Layout>
              }
            />
            <Route
              exact
              path="/profile"
              element={
                <Layout>
                  <ProfilePage />
                </Layout>
              }
            />
            <Route exact path="/logout" element={<Logout />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default AppRouter;
