import React from "react";

import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/NavBar";

export default class App extends React.Component {
  state = {
    data: null,
    filteredData: null,
    displayChild: "",
    value: ""
  };

  componentDidMount() {
    const data = require("./NavigationTree.json");
    this.setState({
      data: data,
      filteredData: data
    });
  }

  renderChildren = nodes => {
    const result = nodes.map(el => {
      return (
        <li className={el.state === "up" ? "green" : "red"} key={el.id}>
          {" "}
          {el.name}{" "}
        </li>
      );
    });
    return <ul> {result} </ul>;
  };

  expandParent = id => {
    this.setState({
      displayChild: id
    });
  };

  filterData = (key, event) => {
    let filteredDataTemp = this.state.data.nodes.filter(item => {
      return item[key] === event.target.value;
    });
    this.setState({
      filteredData: { nodes: filteredDataTemp },
      value: event.target.value
    });
  };

  render() {
    let view = (
      <React.Fragment>
        <Navbar />
        <div className="flexContainer">
          <Form data={this.state.data} filterData={this.filterData} />
          <List
            filteredData={this.state.filteredData}
            displayChild={this.state.displayChild}
            renderChildren={this.renderChildren}
            expandParent={this.expandParent}
          />
        </div>
        <Footer />
      </React.Fragment>
    );

    if (this.state.data === null) {
      view = null;
    }

    return view;
  }
}
