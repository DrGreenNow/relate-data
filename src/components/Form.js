import React from 'react';

import './Form.css';
import Select from './Select';

const form = (props) => {
    return(
        <div className='wrapper'>
            <form>
                <Select label="Vendor" onChange={props.filterOurData} filterKey="vendor" data={props.data.nodes} />
                <Select label="Location" onChange={props.filterOurLocation} filterKey="location" data={props.data.nodes} />
                <Select label="Service" onChange={props.filterOurService} filterKey="service" data={props.data.nodes} />
                <Select label="Device Type" onChange={props.filterOurDeviceType} filterKey="type" data={props.data.nodes} />
            </form>
        </div>
    );
}

export default form;