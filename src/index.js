import React from "react";
import ReactDOM from "react-dom";

const name = "Rahul Ravi Prakash";
const profession = "iOS Developer";
const currentYear = new Date().getFullYear();

const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      {/* <li>Chicken Popcorn</li>
      <li>Chicken Pakoda</li>
      <li>Chicken Reshmi kebab</li> */}
      <img alt="MyTickPhoto" src={img} /> /Added Image
    </ul>

    {/* <div>
      <h2>My name is {name}</h2>
      <p>I'm an {profession}</p>
    </div>
    <div>
      <p>Created by {name} </p>
      <p>Copyright {currentYear}</p>
    </div> */}
  </div>,

  document.getElementById("root")
);
