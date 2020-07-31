import React from "react";
import DataPicture from "../DataPicture";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default class App extends React.Component {

  state = {
    //apod: [],
    date: new Date(),
  };

  onChange = (date) => this.setState({ date });

  render() {
    const { date } = this.state;
    console.log(date);
    return (
      <div className="App">
        <DataPicture
        date={date}/>
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}
