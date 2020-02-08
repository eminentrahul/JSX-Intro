import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date(2020, 1, 1, 16).getHours();

const customColor = {
  color: ""
};

var greeting;

if (currentTime < 12) {
  greeting = "Good Morning!";
  customColor.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Evening!";
  customColor.color = "Blue";
} else {
  greeting = "Good Night!";
  customColor.color = "Green";
}

ReactDOM.render(
  <div>
    <h1 className="heading">{greeting}</h1>
  </div>,

  document.getElementById("root")
);
