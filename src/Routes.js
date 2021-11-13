import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./Pages/Register";
import AddContent from "./Pages/AddContent";
import Navbar from "../src/components/Layout/Header/Navbar";

const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Navbar />
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/addcontent"
          element={
            <PrivateRoute>
              <Navbar />
              <AddContent />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default PageRouter;
