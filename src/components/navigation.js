import React from "react";
import "../style/default/defaultTema.scss";
import { Link } from 'react-router-dom';
import { BsHouseDoorFill } from "react-icons/bs";
function NavigationComponent() {

  console.log(window.location.href)
  return (
    <div className="text-left">
      <div className="container backgroundNone">
      <Link className="customBlack" to={`/`}> <BsHouseDoorFill/></Link>
       
      </div>
    </div>
  )
}

export default NavigationComponent;