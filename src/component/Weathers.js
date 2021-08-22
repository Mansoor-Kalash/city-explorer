import React, { Component } from "react";
import Weather from "./Weather";
class Weathers extends Component {
  render() {
    return (
      <div>
        {this.props.weatherData.map((element, idx) => {
          return (
            <Weather
              key={idx}
              datetime={element.datetime}
              description={element.weather.description}
              app_max_temp={element.app_max_temp}
              app_min_temp={element.app_min_temp}
            />
          );
        })}
      </div>
    );
  }
}

export default Weathers;
