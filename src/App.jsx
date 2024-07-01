// src/App.js
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import ImageSlider from "./Component/ImageSlider";
import NewHero from "./Component/NewHero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* background-color: WHITE; */
    font-family: "Montserrat", sans-serif;
  }
  body.modal-open {
  overflow: hidden;
    /* position: relative; */
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Navbar />,
    children: [
      { index: true, element: <NewHero /> },
      { path: "version", element: <ImageSlider /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <GlobalStyle />

      <RouterProvider router={router} />
    </>
  );
};

export default App;
