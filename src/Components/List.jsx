import React from "react";
import * as calc from "../calculator.js";

function List() {
  return (
    <ul>
      <li>Chicken Tikka</li>
      <li>Chicken Tandoori</li>
      <li>Chicken Kebab</li>
      <li />
      <li>{calc.default(4, 5)}</li>
      <li>{calc.subtract(4, 5)}</li>
      <li>{calc.multiplication(4, 5)}</li>
      <li>{calc.division(4, 5)}</li>
    </ul>
  );
}

export default List;
