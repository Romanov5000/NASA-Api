import React from "react";
import Header from '../Header';
import DataPicture from "../DataPicture";

import Css from "./App.module.css";

export default class App extends React.Component {

  render() {
    return (
      <div className={Css.App}>
        <Header/>
        <DataPicture />
      </div>
    );
  }
}
