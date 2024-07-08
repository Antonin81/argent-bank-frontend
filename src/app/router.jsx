import React from "react";
import LandingPage from "../common/pages/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../common/components/Layout/Layout";
import LoginPage from "../common/pages/LoginPage/LoginPage";
import ProfilePage from "../common/pages/ProfilePage/ProfilePage";

function AppRouter() {
  return (
    <>
      <React.StrictMode>
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
          </Routes>
        </Router>
      </React.StrictMode>
    </>
  );
}

export default AppRouter;
