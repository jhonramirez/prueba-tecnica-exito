import React from "react";
import { Navbar } from "../../atoms";

export const Header = ({ signOut }) => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  return (
    <>
      <header className="header">
        <section className="container">
          <Navbar signOut={signOut} />
        </section>
      </header>
    </>
  );
};
