import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const country = props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.population}</td>
    </tr>
  );
};

export default country;
