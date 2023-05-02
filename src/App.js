import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Omoss from "./Components/omoss";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/omoss" element={<Omoss />} />
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
