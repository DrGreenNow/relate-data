import React from 'react';

import './CreatedataApp.css';
import Form from './Form';
import List from './List';


export default class App extends React.Component {

    state = {
        data: null,
        filteredData: null,
        displayChild: '',
        value: ''
    };

    componentDidMount() {
        const data = require('./../NavigationTree.json');
        this.setState({
            data: data,
            filteredData: data
        })
    }

    renderChildren = (nodes) => {
        const result = nodes.map(el => {
          return (<li className={el.state === "up" ? "green" : "red"} key={el.id}> {el.name} </li>)
        });
        return (
          <ul> {result} </ul>
        )
    };

    expandParent = (id) => {
        this.setState({
          displayChild: id
        });
    };

    filterOurData = (event) => {
        let filteredDataTemp = this.state.data.nodes.filter((item) => {
            return item.vendor === event.target.value
        });
        this.setState({
            filteredData: {nodes: filteredDataTemp},
            value: event.target.value
        });
    }

    filterOurLocation = (event) => {
        let filteredDataTemp = this.state.data.nodes.filter((item) => {
            return item.location === event.target.value
        })
        this.setState({
            filteredData: {nodes: filteredDataTemp},
            value: event.target.value
        });
    }

    filterOurService = (event) => {
        let filteredDataTemp = this.state.data.nodes.filter((item) => {
            return item.service === event.target.value
        })
        this.setState({
            filteredData: {nodes: filteredDataTemp},
            value: event.target.value
        });
    }

    filterOurDeviceType = (event) => {
        let filteredDataTemp = this.state.data.nodes.filter((item) => {
            return item.deviceType === event.target.value
        })
        this.setState({
            filteredData: {nodes: filteredDataTemp},
            value: event.target.value
        });
    }

    render () {
        
        let view = (
            <div>
                <Form 
                    data={this.state.data}
                    filterOurData={this.filterOurData}
                    filterOurLocation={this.filterOurLocation}
                    filterOurService={this.filterOurService}
                    filterOurDeviceType={this.filterOurDeviceType}/>
                <List 
                    filteredData={this.state.filteredData}
                    displayChild={this.state.displayChild}
                    renderChildren={this.renderChildren}
                    expandParent={this.expandParent}/>
            </div>
        );

        if(this.state.data===null) {
            view = null;
        }

        return view;
    }    
}