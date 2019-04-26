import React from "react";

import "./Form.css";
import Select from "../Select/Select";

const form = props => {
  return (
    <div className="WrapperForm">
      <form>
        <Select
          label="Vendor"
          onChange={props.filterData.bind(this, "vendor")}
          filterKey="vendor"
          data={props.data.nodes}
        />
        <Select
          label="Location"
          onChange={props.filterData.bind(this, "location")}
          filterKey="location"
          data={props.data.nodes}
        />
        <Select
          label="Service"
          onChange={props.filterData.bind(this, "service")}
          filterKey="service"
          data={props.data.nodes}
        />
        <Select
          label="Device Type"
          onChange={props.filterData.bind(this, "type")}
          filterKey="type"
          data={props.data.nodes}
        />
      </form>
    </div>
  );
};

export default form;
