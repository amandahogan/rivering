import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (

      <header className="tongo">
          <h1><Link to={'/'}>Tongoriro River</Link></h1>
      </header>

    )
  }
})
