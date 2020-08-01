import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Css from "./DataPicture.module.css";

export default class DataPicture extends React.Component {
  state = {
    apod: [],
    date: new Date(),
  };

  onChange = (date) => this.setState({ date });

  getDataApod = async () => {
    const { date } = this.state;
    console.log(date.getFullYear());
    console.log(date.getMonth());
    console.log(date.getDate());

    let response = await fetch(
      `https://api.nasa.gov/planetary/apod?date=${date.getFullYear() -3}-${date.getDate()}-${date.getMonth()}&api_key=sN29cs6UI3whG6kqPwyBSu5HqYD2edaJu8QEnaba`
    );
    let result = await response.json();
    return result;
  };

  componentDidMount() {
    this.getDataApod().then((result) =>
      this.setState({
        apod: result,
      })
    );
  }

  render() {
    const { apod, date } = this.state;
    console.log(date);
    return (
      <div className={Css.DataPicture}>
        <div className={Css.calendarBlock}>
          <Calendar
            className={Css.calendare}
            onChange={this.onChange}
            value={this.state.date}
          />
          <div>
              <h2>Explanation</h2>
            <p>{apod.explanation}</p>
          </div>
        </div>
        <div className={Css.imgBlock}>
          <img src={apod.url} alt="" />
        </div>
      </div>
    );
  }
}
