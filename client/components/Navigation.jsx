import React from 'react'

export default React.createClass({
  render() {
    return (

      <footer>
          <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-inverse p-4">
                <h4 className="text-white">Rivers</h4>
              </div>
            </div>
              <nav className="navbar navbar-inverse bg-inverse">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              </nav>
          </div>
      </footer>

    )
  }
})
