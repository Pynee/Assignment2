import React from "react";

const countryTable = props => {
  return (
    <table class="table table-striped table-bordered table-dark text-left ">
      <thead>
        <tr>
          <th scope="col">Country</th>
          <th scope="col">Population</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};

export default countryTable;
