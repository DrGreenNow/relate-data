import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';
// import Select from './Select';

export default class App extends React.Component {
    render() {

        let arr = this.props.data.nodes.map((element) => element.vendor);
		let unique = arr.filter(function(elem, index, self) {
		    return index === self.indexOf(elem);
		});
		let arr2 = this.props.data.nodes.map((element) => element.location);
		let unique2 = arr2.filter(function(elem, index, self) {
		    return index === self.indexOf(elem);
		});
		let arr3 = this.props.data.nodes.map((element) => element.service);
		let unique3 = arr3.filter(function(elem, index, self) {
		    return index === self.indexOf(elem);
		});
		let arr4 = this.props.data.nodes.map((element) => element.type);
		let unique4 = arr4.filter(function(elem, index, self) {
		    return index === self.indexOf(elem);
		});

        return(
            <div className='wrapper'>
                <form>
                    <label>
                        <p className="nameOfInput">Vendor</p>
                        <select onChange={this.props.filterOurData} value={this.props.value}>
                            <option>Choose vendor</option>
                            {unique.map((element) => <option  key={element.toString()}>{element}</option>)}
                        </select>
                    </label>
                    {/* <Select 
                        filterOurData={this.props.filterOurData}
                        value={this.props.value} 
                        option={'Choose vendor'}
                        unique={this.unique}/> */}
                    <label>
                        <p className="nameOfInput">Location</p>
                        <select onChange={this.props.filterOurLocation}  value={this.props.value}>
                            <option>Choose location</option>
                            {unique2.map((element) => <option key={element.toString()}>{element}</option>)}
                        </select>
                    </label>
                    <label>
                        <p className="nameOfInput">Service</p>
                        <select  onChange={this.props.filterOurService} value={this.props.value}>
                        <option>Choose service</option>
                            {unique3.map((element) => <option key={element.toString()}>{element}</option>)}
                        </select>
                    </label>
                    <label>
                        <p className="nameOfInput">Device Type</p>
                        <select onChange={this.props.filterOurDeviceType}  value={this.props.value}>
                            <option>Choose device type</option>
                            {unique4.map((element) => <option key={element.toString()}>{element}</option>)}
                        </select>
                    </label>
                </form>
            </div>
        );
    }  
}

App.propTypes = {
    data: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    filterOurData: PropTypes.func.isRequired,
    filterOurLocation: PropTypes.func.isRequired,
    filterOurService: PropTypes.func.isRequired,
    filterOurDeviceType: PropTypes.func.isRequired,
};