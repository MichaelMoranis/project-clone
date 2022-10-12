import React, { useState } from "react";
import "./styles.css";

const Header = ({action, changeColor }) => {

  return (
    <div>
      <header className={ action ? "activeColor" : ""}>
        <div className="logo">
          <img className="logo" src="coding.png" alt="logo-coding" />
        </div>
        <nav className={ changeColor ? "Color" : ""}>
        <ul>
          <li className="menu-items">Inicial</li>
          <li className="menu-items">Inscrições</li>
          <li className="menu-items">Contato</li>
          <li className="menu-items">Cursos</li>
          <li className="menu-items">Novidades</li>
          <li className="menu-items">Parceiros</li>
        </ul>  
        </nav>
      </header>
    </div>
  );
};

export default Header;
