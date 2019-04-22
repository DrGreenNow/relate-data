import React from 'react';

import './Select.css';

const select = (props) => {
    let arr = props.data.map((element) => element[props.filterKey]);
    let unique = arr.filter((elem, index, self) => index === self.indexOf(elem));

    return (
        <label>
            <p className="nameOfInput">{props.label}</p>
            <select onChange={props.onChange} >
                <option>Choose {props.label}</option>
                {unique.map((element) => <option  key={element.toString()}>{element}</option>)}
            </select>
        </label>
    )
}

export default select;