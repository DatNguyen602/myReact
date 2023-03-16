import React from "react";
import "./cssFT.css";
import { dataTest } from "../data.js";

const Features = () => {
  return (
    <div>
      <div class="feature">
        <div class="title">
          <h1>Features</h1>
          <p>
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>
        </div>
        {dataTest.map((it, id) => {
          console.log(it.img);
          return (
            <div class="list">
              <img src={it.img} alt="Anh" />
              <span class={it.color}>
                <h1>{it.h1}</h1>
                <p>{it.content}</p>
                <a href={it.link}>
                  Learn more
                  <i class="fa-thin fa-arrow-right"></i>
                </a>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
