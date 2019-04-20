import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';


const form = (props) => {

    let arr = props.data.nodes.map((element) => element.vendor);
    let unique = arr.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    });
    let arr2 = props.data.nodes.map((element) => element.location);
    let unique2 = arr2.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    });
    let arr3 = props.data.nodes.map((element) => element.service);
    let unique3 = arr3.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    });
    let arr4 = props.data.nodes.map((element) => element.type);
    let unique4 = arr4.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
    });

    return(
        <div className='wrapper'>
            <form>
                <label>
                    <p className="nameOfInput">Vendor</p>
                    <select onChange={props.filterOurData} >
                        <option>Choose vendor</option>
                        {unique.map((element) => <option  key={element.toString()}>{element}</option>)}
                    </select>
                </label>
                <label>
                    <p className="nameOfInput">Location</p>
                    <select onChange={props.filterOurLocation} >
                        <option>Choose location</option>
                        {unique2.map((element) => <option key={element.toString()}>{element}</option>)}
                    </select>
                </label>
                <label>
                    <p className="nameOfInput">Service</p>
                    <select onChange={props.filterOurService} >
                        <option>Choose service</option>
                        {unique3.map((element) => <option key={element.toString()}>{element}</option>)}
                    </select>
                </label>
                <label>
                    <p className="nameOfInput">Device Type</p>
                    <select onChange={props.filterOurDeviceType} >
                        <option>Choose device type</option>
                        {unique4.map((element) => <option key={element.toString()}>{element}</option>)}
                    </select>
                </label>
            </form>
        </div>
    );
}

export default form;

form.propTypes = {
    filterOurData: PropTypes.func.isRequired,
    filterOurLocation: PropTypes.func.isRequired,
    filterOurService: PropTypes.func.isRequired,
    filterOurDeviceType: PropTypes.func.isRequired,
};