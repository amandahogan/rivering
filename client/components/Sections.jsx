import React from 'react'
import { Link } from 'react-router'

import Stations from './Stations'
import Weather from './Weather'

export default React.createClass({
  render() {
    return (
      <div>
      <div className='container-fluid'>
        <h3>River Sections</h3>
        <div className="list-group" className="sections">
          <a href="/#/level" className="list-group-item list-group-item-action flex-column align-items-start">
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
            <small className="text-muted">Class III-IV</small>
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
      <Stations />
      <Weather />
      </div>

    )
  }
})
