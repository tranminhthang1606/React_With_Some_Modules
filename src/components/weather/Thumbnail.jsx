

const Thumbnail = (props) =>{

    const weather_img = props.weatherImg
    const allWeatherState = {
        "Snow": "sn",
        "Sleet": "sl",
        "Hail": "h",
        "Thunderstorm": "t",
        "Heavy Rain": "hr",
        "Light Rain": "lr",
        "Showers": "s",
        "Heavy Cloud": "hc",
        "Light Cloud": "lc",
        "Clear": "c"
    }
    const getWeatherImg = () =>{
        let each_weather = allWeatherState[weather_img]
        return `http://localhost:8080/static/img/weather/${each_weather}.svg`;
    }

    return(
        <img src={getWeatherImg()} alt="" />
    )
}

export {Thumbnail}