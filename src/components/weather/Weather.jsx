import axios from "axios";
import "./weatherpage.scss";
import { useState,useEffect } from "react";
import { Search } from "./Search";
import { Outlet } from "react-router-dom";

const WeatherPage = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    console.log(">>> run use effect");
    async function fetchData() {
    let response = await axios({
      method: "post",
      url: "http://localhost:8080/get-data-by-url",
      data: { url: "https://www.metaweather.com/api/location/1236594/" },
    }
    )
    setTitle(response.data.title);
  };
    
  },[]);

  console.log(">> run render");
  return (
    <>
      <h1>Bản tin thời tiết</h1>
      <Search/>
      <Outlet/>
    </>
  );
};

export { WeatherPage };
