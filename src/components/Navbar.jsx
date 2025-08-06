import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
  <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BlogNest</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blogs 
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/manali">Manali</Link></li>
            <li><Link className="dropdown-item" to="/goa">Goa</Link></li>
            <li><Link className="dropdown-item" to="/rajasthan">Rajasthan</Link></li>
            <li><Link className="dropdown-item" to="/kokan">Kokan</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
