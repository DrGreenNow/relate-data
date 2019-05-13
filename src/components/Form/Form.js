import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Form.css";
import Select from "../Select/Select";

const form = props => {
  let labelVendor = (
    <React.Fragment>
      <FontAwesomeIcon icon="shipping-fast" />
      <span>&nbsp;Vendor</span>
    </React.Fragment>
  );

  let labelLocation = (
    <React.Fragment>
      <FontAwesomeIcon icon="globe-americas" />
      <span>&nbsp;Location</span>
    </React.Fragment>
  );

  let labelService = (
    <React.Fragment>
      <FontAwesomeIcon icon="server" />
      <span>&nbsp;Service</span>
    </React.Fragment>
  );

  let labelDevice = (
    <React.Fragment>
      <FontAwesomeIcon icon="hdd" />
      <span>&nbsp;Device Type</span>
    </React.Fragment>
  );

  return (
    <div className="WrapperForm">
      <form>
        <Select
          label={labelVendor}
          onChange={props.filterData.bind(this, "vendor")}
          filterKey="vendor"
          data={props.data.nodes}
        />
        <Select
          label={labelLocation}
          onChange={props.filterData.bind(this, "location")}
          filterKey="location"
          data={props.data.nodes}
        />
        <Select
          label={labelService}
          onChange={props.filterData.bind(this, "service")}
          filterKey="service"
          data={props.data.nodes}
        />
        <Select
          label={labelDevice}
          onChange={props.filterData.bind(this, "type")}
          filterKey="type"
          data={props.data.nodes}
        />
      </form>
    </div>
  );
};

export default form;
