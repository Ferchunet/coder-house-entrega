/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import App from '../App.css'

import CartWidget from './cartWidget'
const Navbar = () => {
  return (
    <div>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">KIDS</a>
    <i class="bi bi-joystick"></i>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
       
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">pelelas</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">andarin</a>
        </li>
        <li class="nav-item">
         <CartWidget/>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar