import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFolderOpen } from "@fortawesome/free-regular-svg-icons";

import "./List.css";

const list = props => (
  <div className="WrapperList">
    <ul>
      {props.filteredData.nodes.map(element => (
        <li
          key={element.id}
          className="parentLi"
          onClick={() => props.expandParent(element.id)}
        >
          <FontAwesomeIcon
            icon={element.id === props.displayChild ? faFolderOpen : faFolder}
            className="myFolder"
          />
          {element.name}
          {element.id === props.displayChild &&
            element.nodes &&
            props.renderChildren(element.nodes)}
        </li>
      ))}{" "}
    </ul>
  </div>
);

export default list;

list.propTypes = {
  expandParent: PropTypes.func.isRequired,
  displayChild: PropTypes.string.isRequired,
  renderChildren: PropTypes.func.isRequired
};
