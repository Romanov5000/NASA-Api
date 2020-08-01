import React from "react";
import Css from "./Header.module.css";

function Header() {
  return (
    <div className={Css.Header}>
      <h1>
        Hello, My name`s Romanov Vlad. <br />
        It`s my test project
      </h1>
    </div>
  );
}

export default Header;
