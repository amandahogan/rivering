import React from 'react'

import Sections from './Sections'
import Stations from './Stations'
import Weather from './Weather'
import Graph from './Graph'
import Participate from './Participate'

export default React.createClass({
  render() {
    return (
      <div>
        <Graph>
          <Participate />
        </Graph>

        <Sections>
          <Stations />
          <Weather />
        </Sections>

      </div>
    )
  }
})
