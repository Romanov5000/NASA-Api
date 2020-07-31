import React from 'react';

export default class DataPicture extends React.Component {

    state = {
        apod: [],
    }

    getDataApod = async (props) => {

        const {date} = this.props;
        console.log(date.getFullYear());
        console.log(date.getMonth());
        console.log(date.getDate());

        let response = await fetch (`https://api.nasa.gov/planetary/apod?date=${date.getFullYear()}-${date.getDate()}-${date.getMonth()}&api_key=sN29cs6UI3whG6kqPwyBSu5HqYD2edaJu8QEnaba`);
        let result = await response.json();
        return result;
        
    }
    componentDidMount() {
        this.getDataApod().then((result) =>
          this.setState({
            apod: result,
          })
        );
      }

    render () {

        const {apod} = this.state;
        return (
            <div>
                <img src={apod.url} alt=""/>
            </div>
        )
    }
}