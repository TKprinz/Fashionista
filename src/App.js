import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import KontaktForm from "./Components/KontaktForm";
import Results from "./Components/Results";
import Checkout from "./Components/Checkout";
import { AppProvider } from "./appContext";
import Nyheter from "./Components/Nyheter";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Results" element={<Results />} />
          <Route path="/KontaktForm" element={<KontaktForm />} />
          <Route path="/" element={<Hero />} />
          <Route path="/" element={<Results />} />
          <Route path="/Cart" element={<Checkout />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Nyheter" element={<Nyheter />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
