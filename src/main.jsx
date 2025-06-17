import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from "./App";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AvailableCars from "./pages/AvailableCars";
import CarDetails from "./pages/CarDetails";
import AddCar from "./pages/AddCar";
import MyCars from "./pages/MyCars";
import UpdateCar from "./pages/UpdateCar";
import MyBookings from "./pages/MyBookings";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

// Auth & Routing
import AuthProvider from "./Context/Provider/AuthProvider";
import PrivateRoute from "./Context/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "available", element: <AvailableCars /> },
      { path: "terms", element: <Terms /> },
      { path: "privacy", element: <Privacy /> },
      {
        path: "car/:id",
        element: (
          <PrivateRoute>
            <CarDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "addCar",
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      {
        path: "myCars",
        element: (
          <PrivateRoute>
            <MyCars />
          </PrivateRoute>
        ),
      },
      {
        path: "updateCar/:id",
        element: (
          <PrivateRoute>
            <UpdateCar />
          </PrivateRoute>
        ),
      },
      {
        path: "myBookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <>
          <RouterProvider router={router} />
          <ToastContainer position="top-center" autoClose={3000} />
        </>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
