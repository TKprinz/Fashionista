import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import KontaktForm from "./Components/KontaktForm";
import Hoodies from "./Components/hoodies";
import Tshirts from "./Components/tshirts";
import Pants from "./Components/pants";
import Results from "./Components/Results";
import { AppProvider } from "./appContext";
import Nyheter from "./Components/Nyheter";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/tshirts" element={<Tshirts />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/hoodies" element={<Hoodies />} />
          <Route path="/Results" element={<Results />} />
          <Route path="/KontaktForm" element={<KontaktForm />} />
          <Route path="/" element={<Hero />} />
          <Route path="/" element={<Results />} />
          <Route path="/Nyheter" element={<Nyheter />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
