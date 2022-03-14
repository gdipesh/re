import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <>
                
    {/* <div className=
    "niconne text-shadow">Coming Soon</div> */}
    <nav className="navbar navbar-expand-sm navbar-light nav-css text-center text-theme sticky-top  fs-3 " style={{backgroundColor:" #dcefff54"}}>
<div className="container-fluid">
<Link className="navbar-brand text-red  " to="/">DIPESH</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ms-auto me-2  ">
    <li className="nav-item">
      <Link className="nav-link hover-text-red  hover-white  active" aria-current="page" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link hover-text-red   hover-white active"  to="/Info">Join US</Link>
    </li>
   
    <li className="nav-item">
      <Link className="nav-link hover-text-blue hover-white active " to="/About">About</Link>
    </li>
   
   
   
  </ul>
</div>
</div>
</nav>
        </>
    
    );
};

export default Navbar;
