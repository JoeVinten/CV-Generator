import React from "react";

export default function SideBar(props) {
  const status = props.status;

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
