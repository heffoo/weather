import React from "react";
import { translateClouds } from "../../utils";
import WeatherList from "../weatherList/WeatherList";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import './mainCurrentInfo.scss'
import { Loader } from "../loader/loader";

export function MainCurrentWeather({ weatherInfo }) {
  return (
    <div className="wrapper">
      <div className="main-info">
    
        <section>
          <p className="temp"> {Math.ceil(weatherInfo.dayInfo.temperature)}°</p>
          <p>По ощущениям: {Math.ceil(weatherInfo.dayInfo.feelsLike)} °</p>
        </section>
        <br />
        <br />
        <div className="clouds">
          <h1> {translateClouds(weatherInfo.dayInfo.clouds)}</h1>
          <p> {weatherInfo.dayInfo.description} </p>
        </div>
        <br />
        <img
          className="weather-img"
          alt=""
          src={`http://openweathermap.org/img/wn/${weatherInfo.dayInfo.icon}@2x.png`}
        />
      </div>

      <br />

      <div className="down">
        <div className="coords">
          широта {weatherInfo.dayInfo.lon} <br />
          долгота {weatherInfo.dayInfo.lat}
          <br />
          ветер {weatherInfo.dayInfo.windSpeed}мс/c
          <br />
        </div>
        <div>
          <div className="btn-wrapper">
            <NavLink exact to="/weather" activeClassName="active" className="day-btn">
               по часам 
            </NavLink>
            <NavLink to="/old" activeClassName="active" className="day-btn"> по дням </NavLink>
          </div>
          <Switch>
            <Route exact path="/weather">
              <WeatherList list={weatherInfo.hourlyInfo} />
            </Route>
            <Route path="/old">
              <WeatherList list={weatherInfo.dailyInfo} />
            </Route>
            <Redirect from="/" to="/weather" />
          </Switch>
        </div>
      </div>
    </div>
  );
}