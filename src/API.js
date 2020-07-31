import React from 'react';

export default class nasaApi extends React.Component {


    getDataApod = async (props) => {
        console.log(props);

        let response = await fetch (`https://api.nasa.gov/planetary/apod?date=2020-04-05&api_key=sN29cs6UI3whG6kqPwyBSu5HqYD2edaJu8QEnaba`);
        let result = await response.json();
        return result;
        
    }
}