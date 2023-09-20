import React from "react";

import profile from "./assets/profile.jpg";

export default function Information() {
  return (
    <header>
      <img src={profile} alt="Photo of Sam"  className="info--img"/>
  
    </header>
  );
}
