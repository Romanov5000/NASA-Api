import React from "react";
import Header from '../Header';
import DataPicture from "../DataPicture";

import Css from "./App.module.css";

function App () {

    return (
      <div className={Css.App}>
        <Header/>
        <DataPicture />
      </div>
    );
  }

export default App;
