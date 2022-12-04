import React from "react";
import "../style/components/headerComponent.scss"

import NavigationComponent from './navigation';
function HeaderComponent() {

  console.log(window.location.href)
  return (
    <header >
      <div className="text-center">Simpsons</div>
      <NavigationComponent/>
    </header>
  )
}

export default HeaderComponent;