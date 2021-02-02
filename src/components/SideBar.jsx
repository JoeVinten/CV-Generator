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
            <li
              data-number="1"
              className={status === 1 ? "selected" : null}
              onClick={props.handleClick}
            >
              Personal information
            </li>
            <li
              data-number="2"
              className={status === 2 ? "selected" : null}
              onClick={props.handleClick}
            >
              Personal summary
            </li>
            <li
              data-number="3"
              className={status === 3 ? "selected" : null}
              onClick={props.handleClick}
            >
              Education
            </li>
            <li
              data-number="4"
              className={status === 4 ? "selected" : null}
              onClick={props.handleClick}
            >
              Employment history
            </li>
            <li
              data-number="5"
              className={status === 5 ? "selected" : null}
              onClick={props.handleClick}
            >
              Skills
            </li>
            <li
              data-number="6"
              className={status === 6 ? "selected" : null}
              onClick={props.handleClick}
            >
              Hobbies
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
