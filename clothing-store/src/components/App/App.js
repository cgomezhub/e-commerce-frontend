import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Products from "../Products/Products";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState(null);

  const [token, setToken] = useState("");

  const handleLogout = () => {
    setEmail(null);
    setIsLoggedIn(false);
    localStorage.clear();
    setToken("");
    window.location.reload();
  };

  return (
    <div className="app">
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        userEmail={email}
      />
      <Navigation />
      <Products />
    </div>
  );
}

export default App;