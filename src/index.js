import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WeatherPage } from "./components/weather/Weather";
import { ProductContainer } from "./components/product/Product";
import { OTP_timer } from "./components/otp_timer/Timer";
import { Detail } from "./components/weather/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <WeatherPage />,
      },
      {
        path:"/:id",
          element : <Detail/>
      },
      {
        path: "/product",
        element: <ProductContainer />,
      },
      {
        path: "/otp_timer",
        element: <OTP_timer />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
