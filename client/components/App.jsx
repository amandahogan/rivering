import React from 'react'

import Header from './Header'
import Sections from './Sections'
import Stations from './Stations'
import Weather from './Weather'
import Navigation from './Navigation'
import Graph from './Graph'
import Participate from './Participate'

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Navigation />

      </div>
    )
  }
})
