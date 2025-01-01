"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import "./NavBar.css";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", changeColor);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <nav className={scroll ? "navbar-container" : "navbar-container1"}>
      <Logo />
      <Menu />
    </nav>
  );
}
