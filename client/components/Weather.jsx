import React from 'react'

export default React.createClass({
  render() {
    return (

      <div className="container-fluid">
        <div className="weather">
          <h3>Weather</h3>
            <div className="today">
              <i className="wi wi-sunrise"></i>
              <i className="wi wi-day-sunny"></i>
              <i className="wi wi-day-cloudy"></i>
              <i className="wi wi-day-cloudy"></i>
              <i className="wi wi-day-cloudy"></i>
              <i className="wi wi-day-rain"></i>
              <i className="wi wi-day-rain"></i>
              <i className="wi wi-day-rain"></i>
              <i className="wi wi-day-rain"></i>
              <i className="wi wi-day-rain"></i>
              <i className="wi wi-day-showers"></i>
              <i className="wi wi-day-showers"></i>
              <i className="wi wi-day-sunny-overcast"></i>
              <i className="wi wi-sunset"></i>
              <i className="wi wi-night-clear"></i>
              <i className="wi wi-night-clear"></i>
              <i className="wi wi-night-clear"></i>
              <i className="wi wi-night-clear"></i>
              <i className="wi wi-night-clear"></i>
              <i className="wi wi-night-clear"></i>
              <i className="wi wi-night-clear"></i>
              <i className="wi wi-night-cloudy"></i>
              <i className="wi wi-night-cloudy"></i>
              <i className="wi wi-night-cloudy"></i>
              <i className="wi wi-night-cloudy"></i>
              <i className="wi wi-night-cloudy"></i>
              <i className="wi wi-night-cloudy"></i>
            </div>
            <div className="forecast">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Friday</th>
                    <td><i className="wi wi-day-sunny"></i></td>
                    <td>Sunny</td>
                  </tr>
                  <tr>
                    <th>Saturday</th>
                    <td><i className="wi wi-day-cloudy"></i></td>
                    <td>Cloudy</td>
                  </tr>
                  <tr>
                    <th>Sunday</th>
                    <td><i className="wi wi-day-rain"></i></td>
                    <td>Rain</td>
                  </tr>
                  <tr>
                    <th>Monday</th>
                    <td><i className="wi wi-day-rain"></i></td>
                    <td>Rain</td>
                  </tr>
                  <tr>
                    <th>Tuesday</th>
                    <td><i className="wi wi-day-cloudy"></i></td>
                    <td>Cloudy</td>
                  </tr>
                  <tr>
                    <th>Wednesday</th>
                    <td><i className="wi wi-day-sunny"></i></td>
                    <td>Sunny</td>
                  </tr>
                  <tr>
                    <th>Thursday</th>
                    <td><i className="wi wi-day-sunny"></i></td>
                    <td>Sunny</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

    )
  }
})
