import React from 'react'
// import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (

    <div className={`navbar-${props.mode} bg-${props.mode}`}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className={`container-fluid navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">Navbar</a>
        <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
          <span className="navbar-hrefggler-icon"></span>
        </buthrefn>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
          <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          {/* <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
          </li> */}
          </ul>
      
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <buthrefn className="btn btn-outline-success" type="submit">Search</buthrefn>
          </form> */}
          
        
          
          <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input class="form-check-input" type="checkbox" onClick={props.togglermode} role="switch" id="switchCheckDefault"/>
          <label class="form-check-label" for="switchCheckDefault" style={{color:props.mode==='dark'?'white':'black'}}>enable dark mode</label>
        </div>
          <div class={`form-check form-switch text-${props.mode==='green'?'white':'black'}`}>
          <input class="form-check-input" type="checkbox" onClick={props.greeenmode} role="switch" id="switchCheckDefault"/>
          <label class="form-check-label" for="switchCheckDefault" style={{color:props.mode==='green'?'black':'grey'}} >enable green mode</label>
        </div>
         <div class={`form-check form-switch text-${props.mode==='yellow'?'white':'black'}`}>
          <input class="form-check-input" type="checkbox" onClick={props.yellowmode} role="switch" id="switchCheckDefault"/>
          <label class="form-check-label" for="switchCheckDefault" style={{color:props.mode==='yellow'?'black':'grey'}} >enable yellow mode</label>
        </div>
        </div>
      </div>
    </nav>
    </div>
  )
}
// Navbar.defaultProps = {
//     title:"Nav bar here",
//     about:"about us here"
// };

// Navbar.propTypes = {

//   title: PropTypes.string.isRe,
//   about: PropTypes.string
// }

/*
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

*/