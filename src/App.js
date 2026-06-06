import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <AppRouter />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}
