import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
  <div className="bg-dark p-4">
    <h5 className="text-body-emphasis h4">Online shopping system</h5>
    <Link to="/home" type="button" className="text-body-secondary p-3">Home</Link>
    <Link to="/login" type="button" className="text-body-secondary p-3">Login</Link>
    <Link to="/register" type="button" className="text-body-secondary p-3">Signup</Link>

  </div>
</div>
<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>



    </div>
  )
}

export default Navbar
