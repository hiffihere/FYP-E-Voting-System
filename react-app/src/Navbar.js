import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://gateway.pinata.cloud/ipfs/QmPXXCnp8yNqzU7AztyDfX7LdH9WJbmv1KXQEUCAkCKfx8?_gl=1*1dgdxl2*rs_ga*NzUzODgzMjM0LjE2ODUxOTM5MTk.*rs_ga_5RMPXG14TE*MTY4NTI4NTk3My4yLjEuMTY4NTI4NjI3OS42MC4wLjA.">E-voting</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" >WELCOME TO VOTE</a>
         
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        
        
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More </a>
          
          <ul className="dropdown-menu">
     
            <li><a className="dropdown-item" href=".\Components\aboutus">About Us</a></li>
            <li><a className="dropdown-item" href="#">Contact-us</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="login.js">login</a></li>
            <li><a className="dropdown-item" href="#">Register</a></li>
        
          </ul>
         
      </form>
    </div>
  </div>
  
</nav>

  )
}
