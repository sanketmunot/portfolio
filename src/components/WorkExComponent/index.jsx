import React from "react";
import Navbar from "../NavBar";
import { WORK, getEmoji } from "./workex";
import "./styles.scss";

function WorkEx() {
  return (
    <div>
      <Navbar />
      {WORK.map((item, idx) => {
        return (
          <div key={idx} className="work-card">
            <div className="work-end">{item.end}</div>
            <div className="card-content">
              <h1>{item.company}</h1>
              <h2>{item.position}</h2>

              <ul>
                {item.workItems.map((workItem) => {
                  return <li data-emoji={getEmoji()}> {workItem} </li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WorkEx;
