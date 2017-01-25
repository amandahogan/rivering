import React from 'react'

export default React.createClass({
  render() {
    return (

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

    )
  }
})
