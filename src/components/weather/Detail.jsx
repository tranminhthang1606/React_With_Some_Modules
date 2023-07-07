import { useAsyncError, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Thumbnail } from "./Thumbnail";
import { Link } from "react-router-dom";
const Detail = () => {
  let { id } = useParams();
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState();
  const [time, setTime] = useState();

  
  useEffect(() => {
    const getWeatherById = async () => {
      let response = await axios({
        method: "post",
        url: "http://localhost:8080/get-data-by-url",
        data: { url: `https://www.metaweather.com/api/location/${id}` }, //template string
      });
      if (response && response.data) {
        let data = response.data;
        let Weather_data = data.consolidated_weather;
        // let array_weather = [];
        // for (let key in Weather_data) {
        //   array_weather.push(Weather_data[key]);
        // }
        // console.log(array_weather)
        setWeather(Weather_data);
        setLocation(data.title);
        setTime(data.time);
      }
    };
    getWeatherById();
  }, []);
  console.log(weather);

  return (
    
    <div className="detail_page">
      <h2><Link to={"/"}>Back to Homepage</Link></h2>
      <h2>{location}</h2>
      <p>{time}</p>
      {weather.map((item, index) => {
        return (
          <div className="detail_contain" key={index}>
            <div className="detail_info">
              <h2>{item.weather_state_name}</h2>
              <small>{item.applicable_date}</small>
              <br />
              <Thumbnail weatherImg={item.weather_state_name} />
            </div>
            <div className="detail_status">
              <p>Nhiệt độ cao nhất :{item.max_temp}</p>
              <p>Nhiệt độ thấp nhất :{item.min_temp}</p>
              <p>Hướng Gió :{item.wind_direction_compass}</p>
              <p>Tốc độ gió /km :{item.wind_speed}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export { Detail };
