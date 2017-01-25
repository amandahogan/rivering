import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <header className="tongo">
            <h1>Tongoriro River</h1>
        </header>
        <div className='container-fluid'>
          <h3>River Sections</h3>
          <div className="list-group" className="sections">
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Access 10</h5>
                <small>30 mins ago</small>
              </div>
              <p className="mb-1">Poutu Intake to Blue Pool <em>(12.5km)</em></p>
              <small>Class: III - III+, III+ -IV, IV+</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Access 13</h5>
                <small className="text-muted">1 hour ago</small>
              </div>
              <p className="mb-1">Pillars of Hercules <em>(5km)</em></p>
              <small className="text-muted">Class III+</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Access 14</h5>
                <small className="text-muted">15 mins ago</small>
              </div>
              <p className="mb-1">Rangipo Dam to Tree Trunk Gorge <em>(6km)</em></p>
              <small className="text-muted">className III-IV</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Tree Trunk Gorge</h5>
                <small className="text-muted">1 day ago</small>
              </div>
              <p className="mb-1">3 Deadly Drops</p>
              <small className="text-muted">Class V+</small>
            </a>
          </div>
        </div>
        <div className='container-fluid'>
          <div className="stations">
            <h3>Measure Stations</h3>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Rangipo Dam</h5>
                <small className="text-muted">15 mins ago</small>
              </div>
              <p className="mb-1">Water Catchment</p>
              <small className="text-muted">0.7m3/s</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Poutu Intake</h5>
                <small className="text-muted">30 mins ago</small>
              </div>
              <p className="mb-1">Visual Gauge</p>
              <small className="text-muted">16.4m3/s</small>
            </a>
          </div>
        </div>
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
          <footer>
              <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                  <div className="bg-inverse p-4">
                    <h4 className="text-white">Navigation</h4>
                    <span className="text-muted">Example</span>
                  </div>
                </div>
                  <nav className="navbar navbar-inverse bg-inverse">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  </nav>
              </div>
          </footer>

      </div>
    )
  }
})
