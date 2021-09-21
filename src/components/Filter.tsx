import { Checkbox } from "antd";
import React from "react";

const Filter = ({ filterByOrigin, onChange }: { filterByOrigin: any, onChange: any }) => {
  return (
    <div>
      <b>Filter by Origin</b>
      <Checkbox.Group
        onChange={onChange}
      >
        {
          Object.keys(filterByOrigin).map((i: any) => <Checkbox key={i} value={i}>{i} ({filterByOrigin[i]})</Checkbox>)
        }
      </Checkbox.Group>
    </div>
  );
}

export default Filter;