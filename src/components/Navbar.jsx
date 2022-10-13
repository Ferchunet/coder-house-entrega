/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../components/NavBar.css';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <NavLink class="navbar-brand" to='/'>KIDS</NavLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        
          <li class="nav-item">
            <NavLink class="nav-link" to="/lista">PRODUCTOS</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/PELELA">JUGUETES</NavLink>
          </li>
          <li class="nav-item">
          <NavLink class="nav-link" to="/category/pelela">PELELA</NavLink>
          </li>
          
        </ul>
       
      </div>
    </div>
    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
  </nav>
  )
}

export default Navbar