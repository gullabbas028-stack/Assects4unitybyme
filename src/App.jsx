// App.js
import React from "react";
import { AppProvider } from "./context/AppContext.jsx";
import TopBar      from "./components/TopBar/TopBar.jsx";
import Navbar      from "./components/Navbar/Navbar.jsx";
import CartModal   from "./components/CartModal/CartModal.jsx";
import LoginModal  from "./components/LoginModal/LoginModal.jsx";
import Footer      from "./components/Footer/Footer.jsx";
import HomePage    from "./pages/HomePage/HomePage.jsx";
import "./App.css";

export default function App() {
  return (
    <AppProvider>
      <TopBar />
      <Navbar />
      <HomePage />
      <Footer />
      <CartModal />
      <LoginModal />
    </AppProvider>
  );
}
