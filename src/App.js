import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import KontaktForm from "./Components/KontaktForm";
import Hoodies from "./Components/hoodies";
import Tshirts from "./Components/tshirts";
import Pants from "./Components/pants";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/tshirts" element={<Tshirts />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/hoodies" element={<Hoodies />} />
          <Route path="/KontaktForm" element={<KontaktForm />} />
          <Route path="/" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
