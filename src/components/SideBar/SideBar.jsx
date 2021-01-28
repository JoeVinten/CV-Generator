import React from "react";
import "./SideBar.css";

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="sidebar__content">
        <header>
          <h1>CV Generator</h1>
        </header>
        <nav>
          <ul className="sidebar__nav">
            <li>Personal information</li>
            <li>Personal summary</li>
            <li>Education</li>
            <li>Employment history</li>
            <li>Skills</li>
            <li>Hobbies</li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
