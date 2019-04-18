import React from 'react';

import './CreatedataApp.css';
import Form from './Form';
import List from './List';

let data = require('./../NavigationTree.json');

export default class App extends React.Component {

    state = {
        data: data,
        filteredData: data,
        displayChild: '',
        value: ''
    };

    // setData = () => {
    //     let dataJson = require('./../NavigationTree.json');
    //     this.setState({
    //         data: dataJson,
    //         filteredData: dataJson,
    //     });
    // };

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
        this.setState({value: event.target.value});

        // if (event.target.value === "Choose vendor") {
        //     this.setState({
        //         filteredData: data
        //     });
        //     console.log("if", this.state.filteredData);
        // } else {
            let filteredDataTemp = this.state.data.nodes.filter((item) => {
                return item.vendor === event.target.value
            })
            let filteredData = {nodes: 0};
            filteredData.nodes = filteredDataTemp;
            this.setState({
                filteredData: filteredData
            });
            console.log(event.target.value);
            console.log("out", this.state.filteredData);
            // console.log("else", this.state.filteredData);
        // }
    }

    filterOurLocation = (event) => {
        this.setState({value: event.target.value});
        if (event.target.value === "Choose location") {
            this.setState({
                filteredData: data
            });
        } else {
            let filteredDataTemp = this.state.data.nodes.filter((item) => {
                return item.location === event.target.value
            })
            let filteredData = {nodes: 0};
            filteredData.nodes = filteredDataTemp;
            this.setState({
                filteredData: filteredData
            });
        }
    }

    filterOurService = (event) => {
        this.setState({value: event.target.value});
        if (event.target.value === "Choose service") {
            this.setState({
                filteredData: data
            });
        } else {
            let filteredDataTemp = this.state.data.nodes.filter((item) => {
                return item.service === event.target.value
            })
            let filteredData = {nodes: 0};
            filteredData.nodes = filteredDataTemp;
            this.setState({
                filteredData: filteredData
            });
        }
    }

    filterOurDeviceType = (event) => {
        this.setState({value: event.target.value});
        if (event.target.value === "Choose device type") {
            this.setState({
                filteredData: data
            });
        } else {
            let filteredDataTemp = this.state.data.nodes.filter((item) => {
                return item.deviceType === event.target.value
            })
            let filteredData = {nodes: 0};
            filteredData.nodes = filteredDataTemp;
            this.setState({
                filteredData: filteredData
            });
        }
    }

    render () {
        return(
            <div className='wrapper'>
                <Form 
                    data={this.state.data}
                    value={this.state.value}
                    filterOurData={this.filterOurData}
                    filterOurLocation={this.filterOurLocation}
                    filterOurService={this.filterOurService}
                    filterOurDeviceType={this.filterOurDeviceType}
                    />

                <List 
                    filteredData={this.state.filteredData}
                    displayChild={this.state.displayChild}
                    _renderChildren={this.renderChildren}
                    expandParent={this.expandParent}
                    />
            </div>
        );
    }    
}