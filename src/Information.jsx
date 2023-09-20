import React from "react";

import profile from "./assets/profile.jpg";

export default function Information() {
  return (
    <header>
      <img src={profile} alt="Photo of Sam" className="info-img" />
      <h1 className="info-name">Sam George Mathew</h1>
      <h2 className="info-role">Software Engineer</h2>
      <a href="https://www.sgmfs.dev" className="info-website">
        sgmfs.dev
      </a>
      <div className="contact-btns">
        <button className="btn mail-btn" href="1a3jwr08d@mozmail.com">
          <i class="fa-solid fa-envelope"></i>Email
        </button>
        <button
          className="btn linkedin-btn"
          href="https://www.linkedin.com/in/sam-george-mathew-b17b39118/"
        >
          <i class="fa-brands fa-linkedin"></i>LinkedIn
        </button>
      </div>
    </header>
  );
}
