// src/App.js
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import ImageSlider from "./Component/ImageSlider";
import NewHero from "./Component/NewHero";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
   font-family: "Source Serif 4", serif;
  }
  body.modal-open {
  overflow: hidden;
    /* position: relative; */
}
`;
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ImageSlider />
      {/* <NewHero /> */}
    </div>
  );
}

export default App;
